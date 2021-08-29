import React from "react";
import useDarkMode from "../customHooks/useDarkMode";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="flex text-header-blue ">
      <h1 className="">devfinder</h1>
      <button onClick={() => setTheme(colorTheme)}>
        <div className="flex items-center">
          <span className="uppercase">{colorTheme}</span>
          {colorTheme === "light" ? <IoSunny /> : <FaMoon />}
        </div>
      </button>
    </header>
  );
};

export default Header;
