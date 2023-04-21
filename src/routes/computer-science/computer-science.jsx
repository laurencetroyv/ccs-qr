import React from "react";

import { Route, Routes } from "react-router-dom";
import YearPreview from "../year-preview/year-preview.jsx";

export default function ComputerScience() {
  const route = [
    "computer-science/first-year",
    "computer-science/second-year",
    "computer-science/third-year",
    "computer-science/fourth-year",
  ];
  return (
    <Routes>
      <Route
        index
        element={<YearPreview title={"Computer Science"} route={route} course={'BSCS'} />}
      />
      
    </Routes>
  );
}
