import { getDocs } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { studentCollection } from "./firebase";

export const StudentContext = createContext();

export default function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const courses = ["BSIS", "BSIT", "BSCA", "BSCS"];
  const years = [1, 2, 3, 4];

  const fetchStudents = () => {
    getDocs(studentCollection).then((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });

      setStudents(docs);
    });
  };

  return (
    <StudentContext.Provider
      value={{ fetchStudents, students, courses, years }}
    >
      {children}
    </StudentContext.Provider>
  );
}
