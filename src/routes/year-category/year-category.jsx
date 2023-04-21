import React from "react";
import { useParams } from "react-router-dom";
import YearComponent from "../year-component/year-component";

const categoryRoutes = [
  "first-year/",
  "second-year/",
  "third-year/",
  "fourth-year/",
];
export default function YearCategory() {
  const { category } = useParams(categoryRoutes);

  return <YearComponent />;
}
