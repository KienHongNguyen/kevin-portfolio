import React from "react";

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col max-w-[1440px] h-4/5 py-18 bg-white border border-red-500'
    >
      {/* Header Container */}
      <div className='flex flex-col gap-6 items-center text-black'>
        <div className='text-[36px] font-bold uppercase'>About Me</div>
        <div className='bg-purple-700 w-10 h-2 rounded-2xl'></div>
        <div className='text-2xl text-gray-600 w-3/5 text-center'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </div>
      </div>
    </div>
  );
};

export default About;
