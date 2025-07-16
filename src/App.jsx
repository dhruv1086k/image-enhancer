import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ImageUpload from "./components/ImageUpload";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
