import React, { useEffect } from "react";
import useTheme from "./store/ThemeStore";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ThemeButton from "./components/ThemeButton";

const App: React.FC = () => {
  let { themes } = useTheme();
  useEffect(() => {
    document.body.style.background = themes === "dark" ? "#222" : "#fff";
    document.body.style.color = themes === "dark" ? "#fff" : "#000";
  }, [themes]);
  return (
    <>
    <div className="px-3">
      <div className="mb-[35px] mt-[8px]">
       <NavBar />
      </div>
      <Hero />
      <ThemeButton />

    </div>
     
    </>
  );
};

export default App;
