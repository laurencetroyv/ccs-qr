import React, { Fragment, useContext, useState } from "react";
import { StudentContext } from "../../utils/StudentProvider.jsx";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../utils/firebase.js";

export default function YearComponent({ course, year }) {
  const [imageUrls, setImageUrls] = useState([]);
  listAll(ref(storage, `QR/${course}/${year}`)).then((res) => {
    const urls = [];

    res.items.forEach((itemRef) => {
      getDownloadURL(itemRef).then((url) => {
        const name = itemRef.name.slice(0, 9);
        urls.push({ name, url });

        if (urls.length === res.items.length) {
          setImageUrls(urls);
        }
      });
    });
  });

  const { students } = useContext(StudentContext);

  const [searchQuery, setSearchQuery] = useState("");

  const findStudent = (imageName) => {
    return students.find((student) => student.id_no === imageName);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Fragment>
      <div className=""></div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="Search Student"
          className="input input-bordered w-full max-w-xs"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {imageUrls.map((image, i) => (
          <div key={i} className="relative pb-full py-full">
            <div className="card card-normal w-60 bg-base-100 shadow-xl pt-4">
              <figure>
                <img
                  src={image.url}
                  alt={image.name}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base">
                  {findStudent(image.name).fullname}
                </h2>
                <div className="flex-row space-x-2">
                  <div className="badge badge-secondary">
                    {findStudent(image.name).scholarship_status}
                  </div>
                  <div className="badge badge-primary">
                    {findStudent(image.name).gpa}
                  </div>
                  <div className="badge">{findStudent(image.name).gender}</div>
                  <div className="badge badge-accent">
                    {findStudent(image.name).id_no}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
