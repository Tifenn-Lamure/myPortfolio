import React from "react";
import { Link } from "react-router-dom";
import TiaraPic from "./../../assets/img/TiaraPic.PNG";

const Home = () => {
  return(
    <>
      <div className="h-[100%] bg-light-violet flex items-center justify-around">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-white">Tifenn LAMURE</h1>
          <h2 className="text-5xl text-white">Portfolio</h2>
          <div className="relative mt-20">
            <Link to={`/resume`} className="bg-dark-violet h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 m-10 bottom-2 right-2 text-3xl text-white font-light hover:bottom-0 hover:right-0">All about me</Link>
            <div className="bg-white h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black z-0 m-10"></div>
          </div>
          <div className="relative m-6-">
            <Link to={`/projects`} className="bg-dark-violet h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 bottom-2 right-2 text-3xl text-white font-light hover:bottom-0 hover:right-0">My projects</Link>
            <div className="bg-white h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black z-0"></div>
          </div>
        </div>
        <img src={TiaraPic} className="w-1/4 flex items-center" alt="drawing of me"/>
      </div>
    </>
  )
};

export default Home;