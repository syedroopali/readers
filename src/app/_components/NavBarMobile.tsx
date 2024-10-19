"use client";
import NavBarLinks from "@/app/_components/NavBarLinks";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

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

          <div className="w-5/6 h-[80%] rounded-2xl items-center flex justify-center flex-col relative shadow-md border-2 border-gray-400 py-[10%] bg-white">
            <NavBarLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}
