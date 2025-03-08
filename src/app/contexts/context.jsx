"use client";
import { useState, createContext, use } from "react";

export const WeatherContextProvider = createContext({});

const WeatherContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [response,setResponse] = useState([])
  const [searchInput,setSearchInput] = useState("")
  return (
    <WeatherContextProvider.Provider
      value={{
        darkMode,
        setDarkMode,
        response,
        setResponse,
        searchInput,
        setSearchInput
      }}
    >
      {children}
    </WeatherContextProvider.Provider>
  );
};

export default WeatherContext;
