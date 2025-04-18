import React from "react";

const Homepage = () => {
  return (
    <div
      id='homepage'
      className='flex justify-center items-center max-w-[1440px] mx-auto px-6 py-24 xl:py-24'
    >
      <div className='flex flex-col items-center gap-12'>
        {/* Title */}
        <h1 className='font-bold text-center text-4xl xl:text-[6rem] leading-32'>
          Hi. I&apos;m Kevin. <br /> A Developer.
        </h1>
        {/* Subtitle */}
        <div className='xl:w-3/5 text-center xl:leading-8 text-xl xl:text-xl'>
          A Passionate Front-End Developer crafting responsive, high-performance
          web apps with React, Next.js & Tailwind CSS.
        </div>
        {/* Button */}
        <div className='text-white text-base xl:text-2xl font-bold bg-forest uppercase w-fit py-4 xl:py-5 px-12 xl:px-18 rounded-lg'>
          Projects
        </div>
      </div>
    </div>
  );
};

export default Homepage;
