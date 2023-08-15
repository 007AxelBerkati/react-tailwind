import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'am Axel Berkati, nice to meet you. Please take around</p>
          </div>
          <div>
            <p>
              Currently, I am focusing on learning website development using
              React JS and mobile application development using React Native. I
              also have experience in using React Native through the MSIB
              program at Binar Academy. I am currently seeking a Mobile
              Development or Front-end Development position to utilize and
              enhance my skills while taking the next step in my career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
