import { getDocs } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { studentCollection } from "./firebase";

export const StudentContext = createContext();

export default function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const courses = ["BSIS", "BSIT", "BSCA", "BSCS"];
  const years = [1, 2, 3, 4];

  const yearLevelCount = {};

  const fetchStudents = () => {
    getDocs(studentCollection).then((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });

      setStudents(docs);
    });

    for (const course of courses) {
      for (const year of years) {
        const majorQuery = students.filter(
          (student) => student.major === courses[course]
        );
        const yearQuery = students.filter(
          (student) => student.year_level === years[year]
        );
        yearLevelCount[`${courses[course]} ${years[year]}`] = [
          majorQuery.length,
          yearQuery.length,
        ];
      }
    }
  };

  return (
    <StudentContext.Provider value={{ fetchStudents, students, courses }}>
      {children}
    </StudentContext.Provider>
  );
}
