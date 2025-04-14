"use client";
import Link from "next/link";
import React, { useState } from "react";

const navItems = ["Home", "About", "Play", "Notes", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");
  return (
    <header className='sticky top-8 z-99'>
      <div className='flex gap-4 py-3 px-4 my-4 mx-auto w-fit bg-white rounded-full'>
        {/* Section */}
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`flex items-center gap-2 text-xl px-4 py-2 rounded-full transition ${
              active === item ? "bg-[#f2f4e9] font-semibold" : "text-forest"
            }`}
          >
            <span>{item}</span>
            {/* {active === item && item === "Home" && (
            <kbd className='text-xl italic'>/</kbd>
          )} */}
          </Link>
        ))}
      </div>
    </header>
  );
}
