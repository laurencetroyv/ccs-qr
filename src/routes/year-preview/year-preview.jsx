import React, { Fragment, useContext } from "react";
import Card from "../../components/Card.jsx";
import { Freshman, Junior, Senior, Sophomore } from "../../assets/index.jsx";
import { StudentContext } from "../../utils/StudentProvider.jsx";

export default function YearPreview({ title, route, course }) {
  const [firstYear, secondYear, thirdYear, fourthYear] = route;
  const { students, years } = useContext(StudentContext);

  const test = [];
  for (let i = 0; i < years.length; i++) {
    const majorQuery = students.filter((student) => student.major === course);
    const yearQuery = majorQuery.filter(
      (student) => student.year_level === years[i]
    );
    test[`year_${years[i]}`] = yearQuery;
  }

  const yearMap = [
    {
      id: 1,
      title: "First Year",
      imageURL: Freshman,
      route: firstYear,
      paragraph: test.year_1.length,
    },
    {
      id: 2,
      title: "Second Year",
      imageURL: Senior,
      route: secondYear,
      paragraph: test.year_2.length,
    },
    {
      id: 3,
      title: "Third Year",
      imageURL: Sophomore,
      route: thirdYear,
      paragraph: test.year_3.length,
    },
    {
      id: 4,
      title: "Fourth Year",
      imageURL: Junior,
      route: fourthYear,
      paragraph: test.year_4.length,
    },
  ];

  return (
    <Fragment>
      <div className="items-center">
        <h1 className="text-center font-bold sm:text-xl md:text-3xl">
          {title}
        </h1>
        <div className="md:flex md:flex-row">
          {yearMap.map((data) => (
            <Card
              imageURL={data.imageURL}
              alt={"An image of celestial wolf"}
              title={data.title}
              paragraph={`${data.paragraph} Students Enrolled`}
              route={data.route}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
