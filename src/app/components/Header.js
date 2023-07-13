"use client"

import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();
    
    return (
            <nav>
                <a href="/" class="hover:text-emerald-800">R. Jumber</a>
                {pathname === "/" ? <a href="/" class="text-emerald-500 hover:text-emerald-500">Work</a> : <a href="/" class="hover:text-emerald-500">Work</a>}
                {pathname === "/about" ? <a href="/about" class="text-emerald-500 hover:text-emerald-500">About</a> : <a href="/about" class="hover:text-emerald-500">About</a>}
                {pathname === "/contact" ? <a href="/contact" class="text-emerald-500 hover:text-emerald-500">Contact</a> : <a href="/contact" class="hover:text-emerald-500">Contact</a>}
            </nav>
    )
}