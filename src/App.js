import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const Home = lazy(() => import("./routes/Home"));
  const InformationSystems = lazy(() => import("./routes/IS/IS"));

  const Spinner = () => (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="inline-block w-14 h-14 border border-solid rounded-3xl border-t-pink-400 animate-spin" />
    </div>
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
            <Route path="IS/*" element={<InformationSystems title={'Information Systems'} />} />
            <Route path="IT/*" element={null} />
            <Route path="CA/*" element={null} />
            <Route path="CS/*" element={null} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
