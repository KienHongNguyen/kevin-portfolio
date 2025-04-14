import React from "react";

const About = () => {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Figma "
  ];
  return (
    <div
      id='about'
      className='flex flex-col gap-12 xl:gap-18 max-w-[1440px] mx-auto px-4 py-18 xl:px-18 xl:py-27 bg-champagne'
    >
      {/* Header Container */}
      <div className='flex flex-col gap-4 xl:gap-6 items-center'>
        <h1 className='text-[32px] xl:text-[42px] font-bold uppercase'>
          About Me
        </h1>
        <div className='bg-mainblue w-8 xl:w-10 h-2 rounded-2xl'></div>
        <div className='text-base xl:text-2xl xl:w-3/5 text-center'>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </div>
      </div>

      {/* Text Container */}
      <div className='flex flex-col lg:flex-row gap-12 xl:gap-18'>
        {/* Get to know me! */}
        <div className='w-full xl:w-1/2 flex flex-col gap-8 xl:gap-10'>
          {/* Header */}
          <h1 className='text-xl xl:text-4xl font-bold'>Get to know me!</h1>
          {/* Text */}
          <div className='flex flex-col gap-4 xl:gap-6 xl:text-2xl'>
            <div>
              I&apos;m a <strong>Front-End Developer</strong> and IT student at
              Monash University, focused on building clean, responsive, and
              high-performance web applications using React, Next.js, and
              Tailwind CSS.
            </div>
            <div>
              At <strong>Ripid</strong>, I collaborated with developers to
              enhance UI, integrate APIs, and improve SEO through server-side
              rendering. I&apos;m passionate about continuous learning,
              problem-solving, and contributing to the developer community.
            </div>
            <div>
              I&apos;m open to opportunities where I can grow, contribute, and
              make a meaningful impact. I&apos;m available to connect on{" "}
              <a
                className='text-mainblue underline font-semibold'
                href='https://www.linkedin.com/in/kienhongnguyen/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
              .
            </div>
          </div>
          {/* Button */}
          <button className='text-white text-base xl:text-xl font-bold bg-mainblue uppercase w-fit py-3 xl:py-4 px-10 xl:px-12 rounded-lg'>
            Contact
          </button>
        </div>

        {/* My Skills */}
        <div className='w-full xl:w-1/2 flex flex-col gap-8 xl:gap-10'>
          {/* Header */}
          <h1 className='text-xl xl:text-4xl font-bold'>My Skill</h1>
          <div className='flex gap-4 flex-wrap'>
            {skillList.map((skill, index) => (
              <div
                key={index}
                className='w-fit py-3 xl:py-4 px-3 xl:px-6 bg-white text-base xl:text-xl font-semibold rounded-full'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
