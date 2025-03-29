import React, { useContext, useEffect, useState } from "react";
import { WeatherContextProvider } from "../contexts/context";

const Hourly = () => {
  const { forecast } = useContext(WeatherContextProvider);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    if (forecast && forecast.hourly) {
      setHourlyForecast(forecast.hourly);
    }
    console.log(forecast);
  }, [forecast]);

  useEffect(() => {
    console.log(hourlyForecast);
  }, [hourlyForecast]);

  return (
    <div className="border rounded-xl p-4 col-span-2 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Hourly Forecast:</h1>
      <div>
        {hourlyForecast.length > 0 ? (
          <ul>
            {hourlyForecast.map((hour, index) => (
              <li key={index}>
                Hour {index + 1}: {JSON.stringify(hour)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hourly forecast data available.</p>
        )}
      </div>
    </div>
  );
};

export default Hourly;
