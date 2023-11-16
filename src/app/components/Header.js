"use client";

import GroupWorkOutlined from '@mui/icons-material/GroupWorkOutlined';
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  return (
    <nav className=" sticky flex flex-nowrap top-0 z-10 justify-between bg-transparent">
      
      <div className="p-4 flex flex-col items-end absolute end-0 z-10 text-end" onClick={toggleDropdown}>
        <GroupWorkOutlined className={` text-accent h-16 w-16 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />

        {isDropdownOpen && (
          <div className="flex flex-col mt-2 text-3xl">

            {pathname === "/" ? (
              <a href="/" className="text-accent">
                Home
              </a>
            ) : (
              <a href="/" className="text-primary hover:text-accent">
                Home
              </a>
            )}

            {pathname === "/Work" ? (
              <a href="/Work" className="text-accent">
                Work
              </a>
            ) : (
              <a href="/Work" className="text-primary hover:text-accent">
                Work
              </a>
            )}

            {pathname === "/about" ? (
              <a href="/about" className="text-accent">
                About
              </a>
            ) : (
              <a href="/about" className="text-primary hover:text-accent">
                About
              </a>
            )}

            {pathname === "/contact" ? (
              <a href="/contact" className="text-accent">
                Contact
              </a>
            ) : (
              <a href="/contact" className="text-primary hover:text-accent">
                Contact
              </a>
            )}

          </div>
        )}
      </div>
    </nav>
  );
}
