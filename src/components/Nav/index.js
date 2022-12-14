/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Resume } from '../../assets/';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          <Link
            className="hover:scale-110 duration-500 hover:text-green-400"
            to="/home"
          >
            <li>Home</li>
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-green-400"
            to="/about"
          >
            <li>About</li>
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-green-400"
            to="/skills"
          >
            <li>Skills</li>
          </Link>
          <Link
            className="hover:scale-110 duration-500 hover:text-green-400"
            to="/work"
          >
            <li>Work</li>
          </Link>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <Link to="/home">
          <li className="py-6 text-4xl">Home</li>
        </Link>
        <Link to="/about">
          <li className="py-6 text-4xl">About</li>
        </Link>
        <Link to="/skills">
          <li className="py-6 text-4xl">Skills</li>
        </Link>
        <Link to="/work">
          <li className="py-6 text-4xl">Work</li>
        </Link>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/-noah-parker/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/NTParker"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: noahtmparker@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
