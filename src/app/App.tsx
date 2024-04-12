import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar/LeftSidebar";

const App = () => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 xs:px-2 sm:px-10 md:pb-10">
          <div className="max-auto w-full max-w-5xl">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<MainPageAsync />} />
                <Route path="/about" element={<AboutPageAsync />} />
              </Routes>
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
