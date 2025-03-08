import React, { useEffect, useContext } from "react";
import { WeatherContextProvider } from "../contexts/context";
import axios from "axios";
import Forecast from "./forecast";
import Current from "./current";
import Hourly from "./hourly";
import Time from "./time";

const Main = () => {
  const { response, setResponse, searchInput } = useContext(
    WeatherContextProvider
  );

  useEffect(()=>{
    try {
      const fetchData = async () => {
        const result = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=9f64b16c6d9f4762a95114827250803&q=auto:ip`
        );
        setResponse(await result.data);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  },[])
  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=9f64b16c6d9f4762a95114827250803&q=${searchInput}&aqi=yes`
        );
        setResponse(await result.data);
      };

      if (searchInput) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchInput]);

  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <div className="p-10 grid border grid-cols-[27%_10%_57%] grid-rows-2 gap-10">
      <Time />
      <Current />
      <Forecast />
      <Hourly />
    </div>
  );
};

export default Main;
