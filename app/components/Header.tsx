/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='sticky top-0 z-99 bg-white flex items-center justify-between w-full h-[10%] px-4 xl:px-24 shadow-sm'>
      {/* Profile */}
      <div className='flex items-center gap-2 xl:gap-4'>
        {/* Picture */}
        <img
          src='/profile-picture.jpg'
          alt='Kevin Profile Picture'
          className='w-8 h-8 xl:w-16 xl:h-16 rounded-full border-1 border-black'
        ></img>
        {/* Text */}
        <div className='font-bold text-base xl:text-2xl'>Kevin Nguyen</div>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className='text-2xl xl:hidden'>
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Section */}
      <div className='hidden xl:flex gap-12 font-bold text-xl uppercase'>
        <Link href='/'>Home</Link>
        <Link href='/#about'>About</Link>
        <Link href='/#about'>Projects</Link>
        <Link href='/#about'>Contact</Link>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col font-bold text-base text-right uppercase border-y border-gray-300
          transition-all duration-3000 ease-in-out transform origin-top ${
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <Link
            href='/'
            onClick={() => setIsOpen(false)}
            className='w-full border-b border-gray-300 py-5 px-4'
          >
            Home
          </Link>
          <Link
            href='/#about'
            onClick={() => setIsOpen(false)}
            className='w-full border-b border-gray-300 py-5 px-4'
          >
            About
          </Link>
          <Link
            href='/#projects'
            onClick={() => setIsOpen(false)}
            className='w-full border-b border-gray-300 py-5 px-4'
          >
            Projects
          </Link>
          <Link
            href='/#contact'
            onClick={() => setIsOpen(false)}
            className='w-full border-gray-300 py-5 px-4'
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
