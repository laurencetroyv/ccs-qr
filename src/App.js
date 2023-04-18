import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const Home = lazy(() => import("./routes/Home"));

  return (
    <Suspense>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IS" element={null} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
