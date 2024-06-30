import { Link } from "react-router-dom";
import React from "react";
const Header =() =>{
  return(
    <>
      <div className="main nav w-full bg-dark-violet flex h-[50px] border-b-4 px-10 border-black font-[600] flex-row gap-[3em] items-center">
        <Link className="text-[28px]" to={`/`}>
        HOME
        </Link>
        <Link className="text-[28px] ml-[auto]" to={`/projects`}>
        MY PROJECTS
        </Link>
        <Link className="text-[28px]" to={`/resume`}>
        MY RESUME
        </Link>
      </div>
    </>
)};

export default Header;