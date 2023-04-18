import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const Home = lazy(() => import("./routes/Home"));
  const InformationSystems = lazy(() => import("./routes/InformationSystems"));

  return (
    <Suspense>
      <div data-theme="light">
        <div className="flex flex-col min-h-screen items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IS" element={<InformationSystems />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
