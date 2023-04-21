import { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/loading-animation";
import { StudentContext } from "./utils/StudentProvider";
import InformationSystems from "./routes/information-systems/information-systems";
import YearComponent from "./routes/year-component/year-component";
import Home from "./routes/Home";
import InformationTechnology from "./routes/information-technology/information-technology";
import ComputerApplication from "./routes/computer-application/computer-application";
import ComputerScience from "./routes/computer-science/computer-science";

function App() {
  const { fetchStudents } = useContext(StudentContext);

  fetchStudents();
  return (
    <Suspense fallback={<Spinner />}>
      <div
        data-theme="dark"
        className="flex grow items-center justify-center min-h-screen p-4"
      >
        <div className="">
          <Routes>
            {/* Information Systems */}
            <Route path="/" element={<Home />} />
            <Route
              path="information-systems//*"
              element={<InformationSystems />}
            />
            <Route
              path="information-systems/first-year/"
              element={<YearComponent course={'IS'} year={'firstYear'} />}
            />
            <Route
              path="information-systems/second-year/"
              element={<YearComponent course={'IS'} year={'secondYear'} />}
            />
            <Route
              path="information-systems/third-year/"
              element={<YearComponent course={'IS'} year={'thirdYear'} />}
            />
            <Route
              path="information-systems/fourth-year/"
              element={<YearComponent course={'IS'} year={'fourthYear'} />}
            />

            {/* Information Technology */}
            <Route
              path="information-technology//*"
              element={<InformationTechnology />}
            />
            <Route
              path="information-technology/first-year/"
              element={<YearComponent course={'IT'} year={'firstYear'} />}
            />
            <Route
              path="information-technology/second-year/"
              element={<YearComponent course={'IT'} year={'secondYear'} />}
            />
            <Route
              path="information-technology/third-year/"
              element={<YearComponent course={'IT'} year={'thirdYear'} />}
            />
            <Route
              path="information-technology/fourth-year/"
              element={<YearComponent course={'IT'} year={'fourthYear'} />}
            />

            {/* Computer Application */}
            <Route
              path="computer-application//*"
              element={<ComputerApplication />}
            />
            <Route
              path="computer-application/first-year/"
              element={<YearComponent course={'CA'} year={'firstYear'} />}
            />
            <Route
              path="computer-application/second-year/"
              element={<YearComponent course={'CA'} year={'secondYear'} />}
            />
            <Route
              path="computer-application/third-year/"
              element={<YearComponent course={'CA'} year={'thirdYear'} />}
            />
            <Route
              path="computer-application/fourth-year/"
              element={<YearComponent course={'CA'} year={'fourthYear'} />}
            />

            {/* Computer Science */}
            <Route path="computer-science//*" element={<ComputerScience />} />
            <Route
              path="computer-science/first-year/"
              element={<YearComponent course={'CS'} year={'firstYear'} />}
            />
            <Route
              path="computer-science/second-year/"
              element={<YearComponent course={'CS'} year={'secondYear'} />}
            />
            <Route
              path="computer-science/third-year/"
              element={<YearComponent course={'CS'} year={'thirdYear'} />}
            />
            <Route
              path="computer-science/fourth-year/"
              element={<YearComponent course={'CS'} year={'fourthYear'} />}
            />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
