import { getDocs } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { studentCollection } from "./firebase";

export const StudentContext = createContext();

export default function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getDocs(studentCollection).then((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });

      setStudents(docs);
    });
  }, []);
  return (
    <StudentContext.Provider value={{ students }}>
      {children}
    </StudentContext.Provider>
  );
}
