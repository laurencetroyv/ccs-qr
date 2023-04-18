import React, { Fragment } from "react";
import Card from "../components/Card.jsx";

export default function Home() {
  const Major = [
    {
      id: 1,
      title: "Computer Application",
      imageURL:
        "https://www.cud.ac.ae/sites/default/files/programs/2020/program-bachelor-of-science-in-computer-science-1920x1080.jpg",
      alt: "An image of celestial wolf",
      paragraph: "282 Students Enrolled",
      route: "CA",
    },
    {
      id: 2,
      title: "Computer Science",
      imageURL:
        "https://th.bing.com/th/id/OIP.hE6i5B7WSwPf8orwRSuTlQHaEK?pid=ImgDet&rs=1",
      alt: "An image of celestial wolf",
      paragraph: "158 Students Enrolled",
      route: "CS",
    },
    {
      id: 3,
      title: "Information Technology",
      imageURL:
        "https://www.asiapacificsecuritymagazine.com/wp-content/uploads/2016/10/how-has-1.jpg",
      alt: "An image of celestial wolf",
      paragraph: "304 Students Enrolled",
      route: "IT",
    },
    {
      id: 4,
      title: "Information Systems",
      imageURL:
        "https://d38b7b1k524qir.cloudfront.net/blog/wp-content/uploads/2019/11/18131839/GettyImages-1176070254-min.jpg",
      alt: "An image of celestial wolf",
      paragraph: "127 Students Enrolled",
      route: "IS",
    },
  ];

  return (
    <Fragment>
      <h1 className="text-center mb-8 font-bold">
        College of Computer Studies - Student Quick Response Code
      </h1>
      <div className="flex flex-row space-x-4">
        {Major.map((data) => (
          <Card information={data} key={data.id} />
        ))}
      </div>
    </Fragment>
  );
}
