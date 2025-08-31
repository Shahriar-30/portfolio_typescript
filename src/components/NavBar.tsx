import { motion } from "motion/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useTheme from "../store/ThemeStore";

const NavBar: React.FC = () => {
  let { themes: theme } = useTheme();
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="flex  w-full items-center justify-between py-3">
          <motion.div className="select-none border-b-2">
            Shahriar Amin Al Siphat
          </motion.div>
          {/* mobile */}
          {toggle ? (
            <RxCross2
              className="text-[25px]"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <FaBars
              className="text-[25px]"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        {/* mobile */}
        {toggle && (
          <ul className={`w-[180px] ${theme === 'white' ? 'bg-black' : 'bg-white'} space-y-1 absolute right-0  z-50`}>
            <li className={`cursor-pointer ${theme === 'white' ? 'text-white' : 'text-black'} py-1 pl-1.5 text-bold text-[18px] border-t-0 border-1`}>
              Home
            </li>
            <li className={`cursor-pointer ${theme === 'white' ? 'text-white' : 'text-black'} py-1 pl-1.5 text-bold text-[18px] border-t-0 border-1`}>
              About
            </li>
            <li className={`cursor-pointer ${theme === 'white' ? 'text-white' : 'text-black'} py-1 pl-1.5 text-bold text-[18px] border-t-0 border-1`}>
              Skills
            </li>
            <li className={`cursor-pointer ${theme === 'white' ? 'text-white' : 'text-black'} py-1 pl-1.5 text-bold text-[18px] border-t-0 border-1`}>
              Project
            </li>
            <li className={`cursor-pointer ${theme === 'white' ? 'text-white' : 'text-black'} py-1 pl-1.5 text-bold text-[18px] border-t-0 border-1`}>
              Contact
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
