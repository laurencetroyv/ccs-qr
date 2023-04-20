import { Suspense, lazy, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/loading-animation";
import { StudentContext } from "./utils/StudentProvider";
import InformationSystems from "./routes/information-systems/information-systems";
import YearComponent from "./routes/year-component/year-component";

function App() {
  const { fetchStudents } = useContext(StudentContext);
  const Home = lazy(() => import("./routes/Home"));

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
              path="information-systems/*"
              element={<InformationSystems />}
            />
            <Route
              path="information-systems/first-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-systems/second-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-systems/third-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-systems/fourth-year/"
              element={<YearComponent />}
            />

            {/* Information Technology */}
            <Route path="information-technology/" element={null} />
            <Route
              path="information-technology/first-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-technology/second-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-technology/third-year/"
              element={<YearComponent />}
            />
            <Route
              path="information-technology/fourth-year/"
              element={<YearComponent />}
            />

            {/* Computer Application */}
            <Route path="computer-application/" element={null} />
            <Route
              path="computer-application/first-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-application/second-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-application/third-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-application/fourth-year/"
              element={<YearComponent />}
            />

            {/* Computer Science */}
            <Route path="computer-science/" element={null} />
            <Route
              path="computer-science/first-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-science/second-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-science/third-year/"
              element={<YearComponent />}
            />
            <Route
              path="computer-science/fourth-year/"
              element={<YearComponent />}
            />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
