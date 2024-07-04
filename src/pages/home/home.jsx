import React from "react";
import { Link } from "react-router-dom";
import TifennDrawing from "./../../assets/img/TifennDrawing.PNG";
import CloudBg from "./../../assets/img/CloudBG.webp";

const Home = () => {
  return(
    <>
      <div className="h-[100vh] bg-light-violet flex items-center justify-around relative">
        <img src={CloudBg} alt="drawing of the sky with clouds" className="w-full h-[100vh] absolute z-0 object-fill" />
        <div className="h-[100vh] w-full bg-black z-[5] absolute mix-blend-multiply opacity-[72%]"></div>
        <div className="flex flex-col items-center z-20">
          <h1 className="text-7xl text-white">Tifenn LAMURE</h1>
          <h2 className="text-5xl text-white">Front-end developer</h2>
          <div className="relative mt-20">
            <Link to={`/resume`} className="bg-dark-violet h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 m-10 bottom-2 right-2 text-3xl text-white font-light hover:bottom-0 hover:right-0">All about me</Link>
            <div className="bg-white h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black z-0 m-10"></div>
          </div>
          <div className="relative">
            <Link to={`/projects`} className="bg-dark-violet h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 bottom-2 right-2 text-3xl text-white font-light hover:bottom-0 hover:right-0">My projects</Link>
            <div className="bg-white h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black z-0"></div>
          </div>
        </div>
        <img src={TifennDrawing} className="w-[45%] animate-[float_6s_infinite] z-40" alt="drawing of me"/>
      </div>
    </>
  )
};

export default Home;