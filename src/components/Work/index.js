import React from 'react';
import WMA from '../../assets/images/WMA-1.png';
import ReadMe from '../../assets/images/readme-1.png';
import Game from '../../assets/images/Game-1.png';

const Work = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300">
      {/* container */}
      <h3 style={{ textAlign: 'center' }}>Some of my past work</h3>
      <div
        Name="post-wrapper"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div>
          <div
            Name="post"
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          >
            <img className="thumbnail" src={WMA} alt="weather app" />
            <div className="post-preview">
              <h6 className="post-title">Weather Map</h6>
              <p className="post-intro">
                All in one weather/map application that allows the user to view
                the weather and a map of a city of their choosing
              </p>
              <a
                target="_blank"
                href="https://ntparker.github.io/Weather-Map-App/"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img className="thumbnail" src={Game} alt="game" />
            <div className="post-preview">
              <h6 className="post-title">NightHawk</h6>
              <p className="post-intro">
                A free to play video game that features user account creation to
                engage with other players.
              </p>
              <a target="_blank" href="https://fast-ridge-15962.herokuapp.com/">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img className="thumbnail" src={ReadMe} alt="ReadMe" />
            <div className="post-preview">
              <h6 className="post-title">README Generator</h6>
              <p className="post-intro">
                This application allows the user to dynamically generate a
                quality and professional README to use in their repository.
              </p>
              <a
                target="_blank"
                href="https://github.com/NTParker/readme-generator"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
