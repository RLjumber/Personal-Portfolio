"use client";

import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

export default function Home() {
const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {

   if (isLight === true) {
     setIsLight(true);
   }

  }

  return (
    <main className="w-full bg-bkg" data-theme={isLight ? "light" : "dark"}>
      <Header />
      <Landing />
    </main>
  )
}
