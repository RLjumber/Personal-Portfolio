"use client";

import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Home() {
const [isLight, setIsLight] = useState(false);
const [themeData, setThemeData] = useState("dark");

  const toggleTheme = () => {
    if (isLight === true) {
      setIsLight(true);
    }
  }
    

  const themeSetter = () => {
      if (themeData === "dark") {
          setThemeData("light");
      } else {
          setThemeData("dark");
      }
  }

  return (
    <main className="w-full" theme-data={themeData}>
      
      <a onClick={
                    () => themeSetter()
                }
                className="fixed bottom-0 right-0 md:top-0 md:left-0 m-4 h-16 w-16 object-fill">{themeData=="light" && <NightlightIcon className=" text-indigo-600 w-full h-full"/>} { themeData==="dark" && <LightModeIcon className=" text-amber-400 w-full h-full"/> }</a>
      <Header />
      <Landing />
    </main>
  )
}
