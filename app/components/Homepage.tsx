import React from "react";

const Homepage = () => {
  return (
    <div
      id='homepage'
      className='flex justify-center items-center max-w-[1440px] px-6 py-24 xl:py-56 bg-red-500'
    >
      <div className='flex flex-col items-center gap-8 text-black'>
        {/* Title */}
        <div className='uppercase font-bold text-center text-4xl xl:text-[48px] leading-12'>
          Hey, I&apos;m Kevin Nguyen
        </div>
        {/* Subtitle */}
        <div className='xl:w-3/5 text-center xl:leading-10 text-xl xl:text-2xl'>
          A Passionate Front-End Developer crafting responsive, high-performance
          web apps with React, Next.js & Tailwind CSS.
        </div>
        {/* Button */}
        <div className='text-white text-base xl:text-2xl font-bold bg-mainblue uppercase w-fit py-4 xl:py-5 px-12 xl:px-18 rounded-lg'>
          Projects
        </div>
      </div>
    </div>
  );
};

export default Homepage;
