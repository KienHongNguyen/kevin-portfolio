import React from "react";

const Homepage = () => {
  return (
    <div
      id='homepage'
      className='flex justify-center items-center max-w-[1440px] h-4/5 bg-blue-50 border border-blue-500'
    >
      <div className='flex flex-col items-center gap-8 text-black'>
        {/* Title */}
        <div className='uppercase font-bold text-2xl'>Hey, Im Kevin Nguyen</div>
        {/* Subtitle */}
        <div>A Front Web Developer </div>
        {/* Button */}
        <div className='py-4 px-12 rounded-2xl font-semibold text-xl bg-blue-500 text-white'>
          Projects
        </div>
      </div>
    </div>
  );
};

export default Homepage;
