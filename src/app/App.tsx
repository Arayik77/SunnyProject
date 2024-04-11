import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex-grow py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync />} />
            <Route path="/about" element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
