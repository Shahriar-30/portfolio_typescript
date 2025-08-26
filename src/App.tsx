import React, { useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import useTheme from "./store/ThemeStore";

const App: React.FC = () => {
  let { themes } = useTheme();
  useEffect(() => {
    document.body.style.background = themes === "dark" ? "#222" : "#fff";
    document.body.style.color = themes === "dark" ? "#fff" : "#000";
  }, [themes]);
  return (
    <>
      <ThemeButton />
    </>
  );
};

export default App;
