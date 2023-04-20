import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/loading-animation";

function App() {
  const Home = lazy(() => import("./routes/Home"));
  const InformationSystems = lazy(() =>
    import("./routes/information-systems/information-systems")
  );

  return (
    <Suspense fallback={<Spinner />}>
      <div
        data-theme="dark"
        className="flex grow items-center justify-center min-h-screen p-4"
      >
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="is/*" element={<InformationSystems />} />
            <Route path="it/*" element={null} />
            <Route path="ca/*" element={null} />
            <Route path="cs/*" element={null} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
