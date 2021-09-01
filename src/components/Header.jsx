import React from "react";

import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = ({ colorTheme, setTheme }) => {
  return (
    <header className="flex justify-between text-header-blue dark:text-white mt-6 ">
      <h1 className="font-bold text-2xl">devfinder</h1>
      <button onClick={() => setTheme(colorTheme)}>
        <div className="flex items-center">
          <span className="uppercase pr-2 font-semibold tracking-widest		">
            {colorTheme}
          </span>
          {colorTheme === "light" ? <IoSunny /> : <FaMoon />}
        </div>
      </button>
    </header>
  );
};

export default React.memo(Header);
