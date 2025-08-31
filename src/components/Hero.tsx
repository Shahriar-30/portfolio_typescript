import React from "react";
import { MdStarBorder } from "react-icons/md";

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
      </div>
    </>
  );
};

export default Hero;
