import React, { Fragment } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Noah Parker
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am an aspiring fullstack software developer. I enjoy creating and
          maintaining versatile web applications using the industry's most in
          demand technologies. What can I help you create?
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-400 hover:border-green-400">
            <span className="flex items-center">
              View Work
              <HiArrowNarrowRight className="ml-3 flex items-center group-hover:rotate-90 duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
