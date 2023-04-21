import React from "react";

import { Route, Routes } from "react-router-dom";
import YearPreview from "../year-preview/year-preview.jsx";

export default function InformationSystems() {
  const route = [
    "information-systems/first-year",
    "information-systems/second-year",
    "information-systems/third-year",
    "information-systems/fourth-year",
  ];
  return (
    <Routes>
      <Route
        index
        element={<YearPreview title={"Information Systems"} route={route} course={'BSIS'} />}
      />
      
    </Routes>
  );
}
