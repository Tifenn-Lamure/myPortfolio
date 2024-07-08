import { Link } from "react-router-dom";
import React from "react";
const Header =() =>{
  return(
    <>
      <div className="main nav sm:w-full bg-dark-violet flex h-[50px] border-b-4 px-6 sm:px-10 border-black font-[600] flex-row gap-[1em] sm:gap-[3em] items-center z-30">
        <Link className="text-[16px] sm:text-[28px] hover:text-white" to={`/`}>
        HOME
        </Link>
        <Link className="text-[16px] sm:text-[28px] hover:text-white ml-[auto]" to={`/projects`}>
        MY PROJECTS
        </Link>
        <Link className="text-[16px] sm:text-[28px] hover:text-white" to={`/resume`}>
        MY RESUME
        </Link>
      </div>
    </>
)};

export default Header;