import { Link } from "react-router-dom";
import React from "react";
const Header =() =>{
  return(
    <>
      <div className="main nav w-full bg-dark-violet flex gap-[2.5rem] h-[30px]">
        <Link className="main-nav-btn" to={`/`}>
        home
        </Link>
        <Link className="main-nav-btn" to={`/projects`}>
        projects
        </Link>
        <Link className="main-nav-btn" to={`/resume`}>
        myResume
        </Link>
      </div>
    </>
)};

export default Header;