'use client'
import Header from "./components/header";
import Main from "./components/main";
import { useContext } from "react";
import { WeatherContextProvider } from "./contexts/context";

export default function Home() {
  const {darkMode} = useContext(WeatherContextProvider)

  return (
      <div className={`p-4 h-screen grid grid-rows-[10%_90%] ${darkMode && "bg-gray-800 text-white"}`}>
        <Header />
        <Main />
      </div>
  );
}
