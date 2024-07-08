import React from "react";
import { Link } from "react-router-dom";
import TiaraPic from "./../../assets/img/TiaraPic.PNG";

const Resume = () => {
  return(
    <>
      <div className="bg-dark-blue-violet h-[90vh] flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto px-4">

          <div className="text-white text-[5rem] sm:text-[10rem]">404</div>
          <div className="text-white text-[2rem] sm:text-[3rem] text-center">Oops! This page does not exist...</div>
          <Link className="text-white text-[16px] sm:text-[28px] hover:text-black" to={`/`}>
            Go Back to Home
          </Link>
          <img src={TiaraPic} className="w-[10rem] sm:w-[15rem] animate-[float_6s_infinite] mt-16 sm:mt-8" alt="drawing of me"/>

        </div>
      </div>
    </>
  )
};

export default Resume;