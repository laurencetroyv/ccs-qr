import React from "react";

import { Route, Routes } from "react-router-dom";
import YearPreview from "../year-preview/year-preview.jsx";

export default function ComputerApplication() {
  const route = [
    "computer-application/first-year",
    "computer-application/second-year",
    "computer-application/third-year",
    "computer-application/fourth-year",
  ];
  return (
    <Routes>
      <Route
        index
        element={<YearPreview title={"Computer Application"} route={route} course={'BSCA'} />}
      />
      
    </Routes>
  );
}
