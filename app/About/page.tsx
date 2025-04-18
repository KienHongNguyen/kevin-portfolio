"use client";
import React from "react";

export default function page() {
  return (
    <main className='flex flex-col gap-12 xl:gap-18 max-w-[1440px] mx-auto px-4 py-18 xl:px-18 xl:py-27'>
      <h1 className='font-bold text-center text-4xl xl:text-[6rem] leading-32'>
        I&apos;m Kevin.
      </h1>

      {/* Content Container */}
      <div className='flex'>
        <div className='w-2/5 border border-blue px-20'>
          {/* <img
            src='/profile-picture.jpg'
            alt='Kevin Nguyen'
            className='w-full rounded-t-full'
          ></img> */}
        </div>
        <div className='flex justify-between h-fit w-3/5'>
          <div>
            I&apos;m a Web Developer working remotely from 8°C Melbourne,
            Australia.
          </div>
        </div>
      </div>
    </main>
  );
}
