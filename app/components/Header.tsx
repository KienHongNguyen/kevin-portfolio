/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className='sticky flex items-center justify-between w-full h-[10%] px-24 border border-yellow-500'>
      {/* Profile */}
      <div className='flex items-center gap-4 border border-red-500'>
        {/* Picture */}
        <img
          src='/profile-picture.jpg'
          alt='Kevin Profile Picture'
          className='w-16 h-16 rounded-full border-2 border-black'
        ></img>
        {/* Text */}
        <div className='font-bold text-2xl text-black'>Kevin Nguyen</div>
      </div>

      {/* Section */}
      <div className='flex gap-12 font-bold text-xl uppercase text-black border border-blue-500'>
        <Link href='/#homepage'>Home</Link>
        <Link href='/#about'>About</Link>
        <Link href='/#about'>Projects</Link>
        <Link href='/#about'>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
