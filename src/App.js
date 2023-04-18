import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <Suspense>
      <div className="flex min-h-screen">
        <h1 className="text-center mb-8 sm:text-base md:text-3xl lg:text-5xl font-bold">
          College of Computer Studies - Student Quick Response Code
        </h1>
        <div className="flex grow justify-center items-center">
          <Routes>
            <Route path="/" element={null} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
