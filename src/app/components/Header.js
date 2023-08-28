"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky flex flex-nowrap top-0 border border-red-500 justify-between">
      <a href="/" className="hover:text-emerald-800">
        Jumber Design
      </a>
      <div className="flex flex-col items-end absolute end-0 z-10 text-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 focus:cursor-pointer"
          onClick={toggleDropdown}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {isDropdownOpen && (
          <div className="flex flex-col mt-2">
            {pathname === "/" ? (
              <a href="/" className="text-emerald-500 hover:text-emerald-500">
                Work
              </a>
            ) : (
              <a href="/" className="hover:text-emerald-500">
                Work
              </a>
            )}
            {pathname === "/about" ? (
              <a href="/about" className="text-emerald-500 hover:text-emerald-500">
                About
              </a>
            ) : (
              <a href="/about" className="hover:text-emerald-500">
                About
              </a>
            )}
            {pathname === "/contact" ? (
              <a href="/contact" className="text-emerald-500 hover:text-emerald-500">
                Contact
              </a>
            ) : (
              <a href="/contact" className="hover:text-emerald-500">
                Contact
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
