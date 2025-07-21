import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const Showcase = lazy(() => import("./pages/Showcase"));
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
