import React from "react";

import { Route, Routes } from "react-router-dom";
import YearPreview from "../year-preview/year-preview.jsx";
import YearComponent from "../year-component/year-component.jsx";

export default function InformationSystems() {
  return (
    <Routes>
      <Route index element={<YearPreview />} />
      <Route path=":year" element={<YearComponent />} />
    </Routes>
  );
}
