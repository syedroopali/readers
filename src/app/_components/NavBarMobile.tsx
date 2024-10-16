"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function NavBarMobile() {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = function () {
    setShowNavBar(!showNavBar);
  };

  return (
    <div>
      <nav>
        {!showNavBar && (
          <LuMenu
            onClick={handleShowNavBar}
            className="text-2xl transition-all sm:hidden"
          />
        )}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#ffffff80] flex justify-center items-center transition-all ${
            !showNavBar ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <RxCross2
            onClick={handleShowNavBar}
            className="text-2xl absolute top-4 right-3"
          />

          <div className="w-5/6 h-[80%] rounded-2xl items-center flex justify-start flex-col relative shadow-md border-2 border-gray-400 py-[10%] ">
            <div className="w-[80%] mb-16">
              <SearchBar />
            </div>
            <ul className="flex flex-col">
              <li className="w-full">
                <Link
                  href="/"
                  className="inline-block py-4 w-full text-center text-xl hover:bg-gray-100 font-bold text-gray-700 border-b-2 border-t-2 border-b-gray-300 transition-all"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/"
                  className="inline-block py-4 w-full text-center text-xl hover:bg-gray-100 font-bold text-gray-700 border-b-2  border-b-gray-300  transition-all"
                >
                  About Us
                </Link>
              </li>

              <li className="w-full">
                <Link
                  href="/"
                  className="inline-block py-4 w-full text-center text-xl hover:bg-gray-100 font-bold text-gray-700 border-b-2  border-b-gray-300  transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
