import React from "react";
import useTheme from "../store/ThemeStore";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



const ThemeButton: React.FC = () => {
  const { themes, setThemeToggle } = useTheme();

  return (
    <button
      className={`p-2 text-[18px] rounded cursor-pointer`}
      onClick={() => {
        setThemeToggle(themes === "white" ? "dark" : "white");
      }}
    >
      {themes === "white" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
}
    </button>
  );
};

export default ThemeButton;
