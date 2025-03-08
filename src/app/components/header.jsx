import { useContext, useEffect, useState } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { WeatherContextProvider } from "../contexts/context";
import axios from "axios";

const Header = () => {
  const { darkMode, setDarkMode, setSearchInput, searchInput } = useContext(
    WeatherContextProvider
  );
  const [option, setOptions] = useState([]);
  useEffect(() => {
    async function autoComplete() {
      const result = await axios.get(
        `http://api.weatherapi.com/v1/search.json?key=9f64b16c6d9f4762a95114827250803&q=${searchInput}`
      );
      setOptions(result.data);
    }
    if (searchInput) {
      autoComplete();
    }
  }, [searchInput]);
  return (
    <div className="flex w-full items-center justify-between p-2">
      <div
        className={`border w-16  flex items-center p-1 justify-between  rounded-xl gap-4 relative ${
          darkMode && "text-white "
        }`}
      >
        <FaSun
          className={`z-1 w-1/2 teext-white`}
          onClick={() => {
            setDarkMode(false);
          }}
        />
        <FaMoon
          className="z-1 w-1/2"
          onClick={() => {
            setDarkMode(true);
          }}
        />
        <button
          className={`h-full w-1/2 left-0 absolute z-0 rounded-full bg-red-500 ${
            darkMode && " translate-x-full"
          }`}
        ></button>
      </div>
      <span className="border w-3/5 px-2  rounded-lg flex justify-center items-center gap-1 relative">
        <FaSearch className="" />
        <input
          type="text"
          className="w-full focus:outline-none p-2"
          onInput={(e) => {
            setSearchInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        {option.length > 0 && (
          <div className="absolute p-2 w-full h-fit border top-full rounded-lg shadow-lg">
            {option.map((item, index) => {
              return (
                <p key={index} className="border-b cursor-pointer"
                onClick={()=>{
                  setSearchInput(item.name)
                }}>
                  {item.name},{item.country}{" "}
                </p>
              );
            })}
          </div>
        )}
      </span>
      <button className="flex items-center bg-[#4CBB17] gap-1 text-white p-2 rounded-lg">
        <BiTargetLock />
        <span className="hidden lg:block">Current location</span>
      </button>
    </div>
  );
};

export default Header;
