import React from 'react';
import useTheme from '../contexts/Theme.js';

function Header() {
  const {themeMode, darkTheme, lightTheme} = useTheme();

  const changeTheme = (e) => {
    const dstatus = e.currentTarget.checked;
    if(dstatus){
      darkTheme();
    }
    else{
      lightTheme();
    }
  }

  return (
    <header className="bg-amber-400 w-full h-[10vh] p-1 dark:bg-gray-800">
      <div className="flex justify-center items-center h-[90%] bg-pink-300 m-1 dark:bg-gray-700">
        <div className="flex-1 text-center font-bold text-2xl h-[80%] border border-black"
        >
            <span>FOCUS FLOW</span>
        </div>
        <div className="flex justify-end items-center border h-[80%] border-black pr-4">
          <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={themeMode === "dark"}
            onChange={changeTheme}
            className="sr-only peer"
          />
        
          <div
            className="
              w-11 h-6
              bg-gray-300
              rounded-full
              peer-checked:bg-gray-700
              transition-colors
              relative
              after:content-['']
              after:absolute
              after:top-[2px]
              after:left-[2px]
              after:w-5
              after:h-5
              after:bg-white
              after:rounded-full
              after:transition-transform
              peer-checked:after:translate-x-5
            "
          ></div>
        </label>


        </div>
      </div>
    </header>
  );
}

export default Header;
