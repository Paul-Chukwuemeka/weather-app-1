import { useContext, useEffect, useState } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { WeatherContextProvider } from "../contexts/context";
import axios from "axios";

const Header = () => {
  const { darkMode, setDarkMode, setSearchInput, searchInput, setLocation } =
    useContext(WeatherContextProvider);
  const [option, setOptions] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    async function autoComplete() {
      const result = await axios.get(
        `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchInput}`
      );
      setOptions(result.data);
    }
    if (searchInput) {
      autoComplete();
    }
  }, [searchInput]);
  return (
    <div className="flex w-full items-center justify-between p-4 px-12">
      <div
        className={`border w-32 flex items-center  h-11 overflow-hidden justify-between  rounded-3xl gap-4 relative cursor-pointer ${
          darkMode && "text-white bg-gray-800 "
        }`}
      >
        <span
         className={`z-1 w-1/2 flex justify-center text-2xl  text-white`}
          onClick={() => {
            setDarkMode(false);
          }}
        >
          <FaSun />
        </span>
        <span
        className="z-1 w-1/2 flex justify-center text-2xl"
          onClick={() => {
            setDarkMode(true);
          }}
        >
          <FaMoon  />
        </span>
        <div
          className={`h-11 w-1/2 left-0 absolute z-0 rounded-full bg-red-500 ${
            darkMode && " translate-x-full"
          }`}
        ></div>
      </div>
      <span className="border min-w-[500px] w-3/6 px-6 py-2 rounded-4xl flex justify-center items-center gap-1 relative">
        <FaSearch className="text-xl text-gray-500" />
        <input
          type="text"
          className={`w-full focus:outline-none p-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
          placeholder="Search City"
          onInput={(e) => {
            setSearchInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        {option.length > 0 && (
          <div className="absolute p-2 w-full h-fit border top-full rounded-lg shadow-lg">
            {option.map((item, index) => {
              return (
                <p
                  key={index}
                  className="border-b cursor-pointer"
                  onClick={() => {
                    setLocation(`${item.name},${item.country}`);
                    setOptions([]);
                  }}
                >
                  {item.name},{item.country}{" "}
                </p>
              );
            })}
          </div>
        )}
      </span>
      <button className="flex items-center bg-[#4CBB17] gap-1 text-white p-3 rounded-4xl">
        <BiTargetLock />
        <span className="hidden lg:block">Current location</span>
      </button>
    </div>
  );
};

export default Header;
