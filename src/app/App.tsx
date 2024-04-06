import { Suspense, useEffect, useState } from "react";
import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button";

const App = () => {
    const [mode, setMode] = useState(false); // true - dark , false - light

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode(true);
        } else {
            setMode(false);
        }
    },[]);

    const handleButtonClick = () => {
        setMode(chanegMode => !chanegMode);
    };

    const contentStyle = {
        backgroundColor: mode ? '#000' : '#fff',
        color: mode ? '#fff' : '#000'
      };


    return (
        <div style={contentStyle} className="flex flex-col h-screen">
            <nav style={contentStyle} className="bg-slate-200">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-bettween h-16">
                        <div className="flex">
                            <Link style={contentStyle}
                                to="/" 
                                className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold"
                            >
                                Main
                            </Link>
                            <Link style={contentStyle}
                                to="/about" 
                                className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <Button
                    onClick={handleButtonClick}
                    className="absolute top-0 right-0 m-2 p-2"
                    variant={mode ? 'destructive' : 'secondary'}
                >
                    {mode ? 'Dark Mode' : 'Light Mode'}
                </Button>
            </div>

            <div className="flex-grow py-5">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPageAsync />} />
                        <Route path="/about" element={<AboutPageAsync />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

export default App;