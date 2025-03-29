import React, { useContext } from "react";
import { WeatherContextProvider } from "../contexts/context";
import { WiHumidity } from "react-icons/wi";
import { FaWind,FaWater,FaGauge, FaRegSun } from "react-icons/fa6";

import { FiSunrise, FiSunset } from "react-icons/fi";

const Current = () => {
  const { darkMode, response } = useContext(WeatherContextProvider);

  return (
    <div className="border rounded-xl col-span-1 p-10 flex gap-4">
      <div className="flex-col flex gap-1">
        <h1 className="bg-gradient-to-r from-gray-400 to-[#444444] bg-clip-text text-transparent text-7xl font-bold">
          {response.current ? `${response.current.temp_c}°C` : "Loading..."}
        </h1>
        <p className="flex items-center gap-1  text-lg">
          Feels like
          <span className="font-bold text-xl text-gray-600">
            {response.current
              ? `${response.current.feelslike_c}°C`
              : "Loading..."}
          </span>
        </p>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 px-2 font-semibold">
            <FiSunrise className="text-4xl" />
            <div className="flex flex-col justify-center">
              <p>Sunrise</p>
              <p>
                {response.forecast
                  ? `${response.forecast.forecastday[0].astro.sunrise}`
                  : "loading..."}
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-2 px-2 font-semibold">
            <FiSunset className="text-4xl" />
            <div>
              <p>Sunset</p>
              <p>
                {response.forecast
                  ? `${response.forecast.forecastday[0].astro.sunset}`
                  : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center text-3xl font-bold">
        {response.current && (
          <img
            className="w-52"
            src={response.current ? response.current.condition.icon : ""}
            alt={response.current ? response.current.condition.text : ""}
          />
        )}
        <h1>{response.current ? response.current.condition.text : ""}</h1>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex items-center gap-8 w-full justify-around ">
          <span className="flex flex-col items-center justify-between gap-1">
            <FaWater className="text-4xl" />
            <p className="font-bold">
              {response.current
                ? `${response.current.humidity}%`
                : "Loading..."}
            </p>
            <p className="font-bold">Humidity</p>
          </span>{" "}
          <span className="flex flex-col items-center gap-1">
            <FaWind className="text-4xl" />
            <p className="font-bold">
              {response.current
                ? `${response.current.wind_kph}km/h`
                : "Loading..."}
            </p>
            <p className="font-bold">Wind speed</p>
          </span>
        </div>
        <div className="flex items-center gap-8 justify-around  w-full">
          <span className="flex flex-col items-center gap-1">
            <FaGauge className="text-4xl" />
            <p className="font-bold">
              {response.current
                ? `${response.current.pressure_mb}mb`
                : "Loading..."}
            </p>
            <p className="font-bold">Pressure</p>
          </span>{" "}
          <span className="flex flex-col items-center gap-1">
            <FaRegSun className="text-4xl" />
            <p className="font-bold">
              {response.current
                ? `${response.current.uv}`
                : "Loading..."}
            </p>
            <p className="font-bold">UV</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;


