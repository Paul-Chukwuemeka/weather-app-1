import React from "react";
import { useContext, useEffect, useState } from "react";
import { WeatherContextProvider } from "../contexts/context";

const Time = () => {
  const { response, darkMode } = useContext(WeatherContextProvider);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (response.location) {
      const loadedTime =
        response.location && response.location.localtime.split(" ");

      setDate(loadedTime[0]);
      setTime(loadedTime[1]);
    }
  }, [response]);
  useEffect(() => {
    if (date) {
        const newDate = new Date(date);
        const formattedDate = newDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      setDate(formattedDate);
    }
  },[date])

  return (
    <div
      className={`${
        darkMode ? "shadow-[0_0_3px_white]" : "shadow-[0_0_3px_#1e2939]"
      } rounded-xl p-14 col-span-2 flex flex-col justify-around items-center gap-10`}
    >
      <h1 className="text-5xl font-bold text-center">
        {response.location ? response.location.name : "Loading ..."}
      </h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-7xl font-extrabold text-center">{time}</h1>
        <h1 className="text-xl font-bold text-center">{date}</h1>
      </div>
    </div>
  );
};

export default Time;
