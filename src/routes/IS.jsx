import React, { Fragment } from "react";
import Card from "../components/Card.jsx";
import Freshman from "../assets/freshman.svg";
import Senior from "../assets/senior.svg";
import Sophomore from "../assets/sophomore.svg";
import Junior from "../assets/junior.svg";

export default function InformationSystems() {
  const Major = [
    {
      id: 1,
      title: "First Year",
      imageURL: Freshman,
      alt: "An image of celestial wolf",
      paragraph: "40 Students Enrolled",
      route: "./IS/first-year",
    },
    {
      id: 2,
      title: "Second Year",
      imageURL: Senior,
      alt: "An image of celestial wolf",
      paragraph: "38 Students Enrolled",
      route: "./IS/second-year",
    },
    {
      id: 3,
      title: "Third Year",
      imageURL: Sophomore,
      alt: "An image of celestial wolf",
      paragraph: "18 Students Enrolled",
      route: "./IS/third-year",
    },
    {
      id: 4,
      title: "Fourth Year",
      imageURL: Junior,
      alt: "An image of celestial wolf",
      paragraph: "32 Students Enrolled",
      route: "./IS/fourth-year",
    },
  ];

  return (
    <Fragment>
      <h1 className="text-center mb-8 font-bold">Information Systems</h1>
      <div className="flex flex-row space-x-4">
        {Major.map((data) => (
          <Card information={data} key={data.id} />
        ))}
      </div>
    </Fragment>
  );
}
