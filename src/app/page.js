"use client";
import Header from "./components/header";
import Main from "./components/main";
import { useContext } from "react";
import { WeatherContextProvider } from "./contexts/context";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose specific weights
  display: "swap",
});

export default function Home() {
  const { darkMode } = useContext(WeatherContextProvider);

  return (
    <div
      className={`p-4 h-screen flex flex-col items-center ${
        poppins.className
      }   ${darkMode ? "bg-gray-800 text-white " : "bg-slate-200"}`}
    >
      <Header />
      <Main />
    </div>
  );
}
