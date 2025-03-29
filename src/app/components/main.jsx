import React, { useEffect, useContext } from "react";
import { WeatherContextProvider } from "../contexts/context";
import axios from "axios";
import Forecast from "./forecast";
import Current from "./current";
import Hourly from "./hourly";
import Time from "./time";

const Main = () => {
  const { response, setResponse, location,setForecast } = useContext(
    WeatherContextProvider
  );
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  useEffect(()=>{
    try {
      const fetchData = async () => {
        const result = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=5&aqi=yes`
        );
        setResponse(await result.data);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  },[])
  useEffect(() => {
    console.log(location)
    try {
      const fetchData = async () => {
        const result = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=yes`
        );
        setResponse(await result.data);
      };

      if (location !== "") {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  useEffect(() => {
  setForecast(response.forecast?.forecastday)
  }, [response]);
  return (
    <div className="p-10 max-w-[100rem] h-full w-9/12 grid grid-cols-[27%_10%_57%]  grid-rows-2 gap-10">
      <Time />
      <Current />
      <Forecast />
      <Hourly />
    </div>
  );
};

export default Main;
