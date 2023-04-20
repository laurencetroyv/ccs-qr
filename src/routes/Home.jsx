import React, { Suspense, useContext } from "react";
import Card from "../components/Card.jsx";
import { StudentContext } from "../utils/StudentProvider.jsx";
import Spinner from "../components/loading-animation.jsx";

export default function Home() {
  const { students, courses } = useContext(StudentContext);
  const amount = {};

  for (const course in courses) {
    const enrolledMajor = students.filter(
      (student) => student.major === courses[course]
    );
    amount[`${courses[course]}`] = enrolledMajor.length;
  }

  const majors = [
    {
      id: 1,
      title: "Computer Application",
      imageURL:
        "https://www.cud.ac.ae/sites/default/files/programs/2020/program-bachelor-of-science-in-computer-science-1920x1080.jpg",
      student: amount.BSCA,
      route: "computer-application",
    },
    {
      id: 2,
      title: "Computer Science",
      imageURL:
        "https://th.bing.com/th/id/OIP.hE6i5B7WSwPf8orwRSuTlQHaEK?pid=ImgDet&rs=1",
      student: amount.BSCS,
      route: "computer-science",
    },
    {
      id: 3,
      title: "Information Technology",
      imageURL:
        "https://www.asiapacificsecuritymagazine.com/wp-content/uploads/2016/10/how-has-1.jpg",
      student: amount.BSIT,
      route: "information-technology",
    },
    {
      id: 4,
      title: "Information Systems",
      imageURL:
        "https://d38b7b1k524qir.cloudfront.net/blog/wp-content/uploads/2019/11/18131839/GettyImages-1176070254-min.jpg",
      student: amount.BSIS,
      route: "information-systems",
    },
  ];

  return (
    <Suspense fallback={<Spinner />}>
      <h1 className="text-center font-bold sm:text-xl md:text-3xl">
        College of Computer Studies - Student Quick Response Code
      </h1>
      <div className="md:flex md:flex-row">
        {majors.map((data) => (
          <Card
            imageURL={data.imageURL}
            alt={"An image of celestial wolf"}
            title={data.title}
            paragraph={`${data.student} students enrolled`}
            route={data.route}
            key={data.id}
          />
        ))}
      </div>
    </Suspense>
  );
}
