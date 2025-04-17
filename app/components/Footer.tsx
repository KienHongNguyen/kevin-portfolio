"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date();
  const date1 = year.getFullYear();
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (darkMode) {
  //     root.classList.add("dark");
  //   } else {
  //     root.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <footer className='max-w-[1440px] mx-auto px-48 py-24'>
      {/* Full Container */}
      <div className='flex w-full'>
        {/* Left Container */}
        <div className='text-xl w-3/5'>&copy; {date1} Kevin Nguyễn</div>

        {/* Right Container */}
        <div className='flex gap-12 w-2/5'>
          {/* Links */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-xl'>Sections</h1>
            <div className='flex flex-col gap-2'>
              <div>Home</div>
              <div>About</div>
              <div>Projects</div>
              <div>Contact</div>
            </div>
          </div>
          {/* Elsewhere */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl'>Elsewhere</h1>
            <div className='flex flex-col gap-2'>
              <div>Github</div>
              <a href='https://read.cv/explore' target='_blank'>
                Resume
              </a>
              <div>LinkedIn</div>
            </div>
          </div>
          {/* Contact */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl'>Contact</h1>
            <div className='flex flex-col gap-2'>
              <div>Message</div>
            </div>
          </div>

          {/* <button
            onClick={() => setDarkMode((prev) => !prev)}
            className='px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow hover:scale-105 transition'
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button> */}
        </div>
      </div>
    </footer>
  );
}
