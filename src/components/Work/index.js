/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import WMA from '../../assets/images/WMA-1.png';
import ReadMe from '../../assets/images/readme-1.png';
import Game from '../../assets/images/Game-1.png';
import Team from '../../assets/images/team-1.png';
import Quiz from '../../assets/images/quiz-pic.png';
import Note from '../../assets/images/note-taker.png';

const Work = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] bg-[#0a192f] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-400">
            Work
          </p>
          <p className="py-4">Check out some of my recent projects.</p>
        </div>

        {/* container for projects */}
        <div className="rounded-sm bg-[#0a192f] grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={WMA}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  Weather Map App
                </h1>
                <p className="pt-4">
                  All in one weather/map application that allows the user to
                  view the weather and a map of a city of their choosing
                </p>
              </div>
              <div className="pt-2 text-center">
                {/* eslint-disable-next-line */}
                <a
                  href="https://ntparker.github.io/Weather-Map-App/"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    See More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `${Game}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={Game}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  Nighthawk
                </h1>
                <p className="pt-4">
                  A free to play video game that features user account creation
                  to engage with other players.
                </p>
              </div>
              <div className="pt-2 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://fast-ridge-15962.herokuapp.com/"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    Play Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `${ReadMe}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={ReadMe}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  ReadMe Generator
                </h1>
                <p className="pt-4">
                  This application allows the user to dynamically generate a
                  quality and professional README to use in their repository.
                </p>
              </div>
              <div className="pt-2 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/NTParker/readme-generator"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    See More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `${Team}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={Team}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  Team Generator
                </h1>
                <p className="pt-4">
                  This application allow the user to create an HTML webpage
                  displaying team member information through the command line.
                </p>
              </div>
              <div className="pt-2 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/NTParker/Team-Profile-Gen"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    See More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `${Quiz}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={Quiz}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  JavaScript Quiz
                </h1>
                <p className="pt-4">
                  A JavaScript quiz with a five minute timer. For each wrong
                  answer, 10 seconds is deducted!
                </p>
              </div>
              <div className="pt-2 text-center ">
                {/* eslint-disable-next-line */}
                <a href="https://ntparker.github.io/Code-Quiz/" target="_blank">
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    Play Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `${Note}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            <div className="opacity-100 rounded-lg">
              <span className="rounded-lg">
                <img
                  className="rounded-t-lg rounded-b-lg hover:scale-110 duration-500"
                  src={Note}
                ></img>
              </span>
              <div>
                <h1 className="inline border-b-2 border-green-400">
                  Note Taker App
                </h1>
                <p className="pt-4">
                  This app allows the user to write and save notes in order to
                  increase productivity. Data is stored locally.
                </p>
              </div>
              <div className="pt-2 text-center ">
                {/* eslint-disable-next-line */}
                <a
                  href="https://sheltered-headland-32437.herokuapp.com/"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 m-2
                        text-gray-300 font-bold text-lg hover:text-green-400 hover:scale-110 duration-500"
                  >
                    See More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
