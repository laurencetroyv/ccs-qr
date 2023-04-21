import React from "react";

import { Route, Routes } from "react-router-dom";
import YearPreview from "../year-preview/year-preview.jsx";

export default function InformationTechnology() {
  const route = [
    "information-Technology/first-year",
    "information-Technology/second-year",
    "information-Technology/third-year",
    "information-Technology/fourth-year",
  ];
  return (
    <Routes>
      <Route
        index
        element={<YearPreview title={"Information Technology"} route={route} course={'BSIT'}/>}
      />
      
    </Routes>
  );
}
