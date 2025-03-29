import React, { useContext } from "react";
import { WeatherContextProvider } from "../contexts/context";

const Forecast = () => {
  const { forecast } = useContext(WeatherContextProvider);
  
  return (
    <div className="border p-4 rounded-xl col-span-1">
      <h1 className="text-3xl font-semibold text-center py-4"> 3 Day Forecast</h1>
      <div>
        {forecast?.map((day, index) => {
          const formattedDate = new Date(day.date);
          day.date = formattedDate.toDateString();
          return (
            <div className="flex items-center justify-between p-2" key={index}>
              <img
                src={day.day.condition.icon}
                width={70}
                height={64}
                alt={day.condition?.text}
              />
              <p className="font-semibold text-lg">{day.day.avgtemp_c}°C</p>
              <p className="font-semibold text-lg">{day.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
