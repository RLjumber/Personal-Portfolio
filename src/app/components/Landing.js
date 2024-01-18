import { useState } from "react";
import { InsertEmoticon } from "@mui/icons-material";
import ThemeSwitch from "./ThemeSwitch";


export default function Landing() {


    return (
            <div className="p-4 bg-bkg">
                <section id="intro" className=" h-screen">
                    <div className="h-full flex flex-col justify-center pb-20 pb">
                        <h1 className="font-display text-9xl text-accent" >Hi,<br/> I`m Luke</h1>
                        <ThemeSwitch  className="border border-red-500"/>
                        <h2 className="text-primary font-light text-4xl">Welcome To My Digital Portfolio</h2>
                    </div>
                </section>
                <section id="who-and-what" className="border-t-2 pt-10">
                    <div className="flex flex-col">
                        <h3 className="text-accent font-display text-5xl pb-10">What I Do</h3>
                        <ul className="flex flex-col h-full items-end text-5xl font-light justify-evenly">
                            <li className="w-full"><h3 className="text-primary p-5 hover:bg-pink-200">Frontend</h3></li>
                            <li className="w-full"><h3 className="text-primary p-5 hover:bg-pink-400">Fullstack</h3></li>
                            <li className="w-full"><h3 className="text-primary p-5 hover:bg-pink-600">Design</h3></li>
                        </ul>
                    </div>
                    <div className="text-primary font-display text-5xl pt-10">
                        <h3 className="text-accent pb-10">Who I am</h3>
                    </div>
                </section>
            </div>
    )
}