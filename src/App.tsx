import React, { Suspense } from "react";
import { Counter } from "./components/Counter";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync, AboutPageAsync } from "./pages";


const App = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
