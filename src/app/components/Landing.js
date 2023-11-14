import { useState } from "react";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function Landing() {
    const [themeData, setThemeData] = useState("dark");
    

    const toggleTheme = () => {
        if (themeData === "dark") {
            setThemeData("light");
            
        } else {
            setThemeData("dark");
           
        }
    }


    return (
        <main className="bg-bkg" theme-data={themeData}>
            <div className="p-4">
                <a onClick={
                    () => toggleTheme()
                }
                className="fixed">{themeData=="light" && <NightlightIcon className=" text-indigo-600 h-16 w-16"/>} { themeData==="dark" && <LightModeIcon className=" text-amber-400 h-16 w-16"/> }</a>
                <section id="intro" className=" h-screen">
                    <div className="h-full flex flex-col justify-center pb-20 pb">
                        <h1 className="font-display text-9xl text-accent" >Hi, I`m Luke</h1>
                        <h2 className="text-primary font-light text-4xl">Welcome To My Digital Portfolio</h2>
                    </div>
                </section>
                <section id="who-and-what" className="border-t-2 pt-10">
                    <div className="flex flex-col">
                        <h3 className="font-display text-5xl pb-10">What I Do</h3>
                        <ul className="flex flex-col h-full w-full items-end text-5xl font-light justify-evenly">
                            <li><h3 className="border p-5 hover:bg-red-400 w-full">Frontend</h3></li>
                            <li><h3 className="p-5">Fullstack</h3></li>
                            <li><h3 className="p-5">Design</h3></li>
                        </ul>
                    </div>
                    <div className="font-display text-5xl pt-10">
                        <h3 className="pb-10">Who I am</h3>
                    </div>
                </section>
            </div>
      </main>
    )
}