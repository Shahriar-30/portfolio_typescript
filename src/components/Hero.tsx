import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdStarBorder } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-5">
        <p className="flex items-center gap-1 text-[15px] border-2 rounded-full px-3 py-1">
          <MdStarBorder className="text-[16px]" /> Welcome to my portfolio
        </p>
        <h1 className="text-[30px]">MERN Stack Developer</h1>
        <p className="text-[18px] text-center">
          I am a MERN Stack Developer with full-stack expertise, building
          scalable frontend + backend applications.
        </p>

        <div>
          <button className="border-2 text-[20px] rounded-full px-5 py-1 mt-4 bg-black text-white border-white">
            Download My CV
          </button>
        </div>
        <div className="flex gap-4 mt-[13px] items-center justify-center">
          <FaFacebookSquare className="text-[25px] cursor-pointer" />
          <IoLogoGithub className="text-[28px] cursor-pointer" />
          <FaLinkedin className="text-[25px] cursor-pointer" />
          <IoMdMail className="text-[28px] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Hero;
