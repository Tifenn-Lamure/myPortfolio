import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import OhMyFood from "../../assets/img/ohmyfood.JPG";
import PortfolioArchi from "../../assets/img/PortfolioArchitecte.JPG";
import Kasa from "../../assets/img/Kasa.JPG";

const MyProjects = () => {
  return(
    <>
      <h2 className="text-light-violet text-[40px] ml-8 my-8">My projects</h2>
      <div className="flex flex-col mb-[5rem] gap-[3em]">
        <CardProjects 
          ImgProjectSrc={OhMyFood} 
          AltImgProjectSrc="my project Oh My Food" 
          TextProject="OH MY FOOD - The aim of this project was to create an application that allows users to reserve and select their dishes ahead of time at prestigious restaurants. On arrival, everything will be ready to be served." 
          SkillTab={['SASS','CSS','HTML']}
          LinkProject="https://github.com/Tifenn-Lamure/Openclassrooms-OhMyFood" 
        />
        <CardProjects 
          ImgProjectSrc={PortfolioArchi} 
          AltImgProjectSrc="my project porfolio architect" 
          TextProject="ARCHITECT'S PORTFOLIO - This website was created with the goal to create an architect's Portfolio. It was mostly to teach me vanilla JS."
          SkillTab={['API REST', 'CSS', 'JAVASCRIPT']}
          LinkProject="https://github.com/Tifenn-Lamure/Portfolio-architecte"
          IsAtLeft={false}
        />
        <CardProjects 
          ImgProjectSrc={Kasa} 
          AltImgProjectSrc="my project Kasa" 
          TextProject="KASA - It's a website for Appartment rental for holidays. The project was made in React."
          SkillTab={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']} 
          LinkProject="https://github.com/Tifenn-Lamure/Kasa"
        />
      </div>
    </>
  )
};

export default MyProjects;