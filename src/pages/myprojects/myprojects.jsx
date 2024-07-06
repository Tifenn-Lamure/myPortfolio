import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import OhMyFood from "../../assets/img/ohmyfood.JPG";
import PortfolioArchi from "../../assets/img/PortfolioArchitecte.JPG";
import Kasa from "../../assets/img/Kasa.JPG";

const MyProjects = () => {
  return(
    <>
      <h2 className="text-light-violet text-[20px] xsm:text-[40px] ml-6 xsm:ml-8 my-6 xsm:my-8">My projects</h2>
      <div className="flex flex-col mb-[5rem] gap-[3em]">
        <CardProjects 
          ImgProjectSrc={OhMyFood} 
          AltImgProjectSrc="my project Oh My Food" 
          TextProject="OH MY FOOD - An application that allows users to reserve and select their dishes ahead of time at prestigious restaurants. On arrival, everything will be ready to be served." 
          SkillTab={['SASS','CSS','HTML']}
          LinkProject="https://github.com/Tifenn-Lamure/Openclassrooms-OhMyFood" 
        />
        <CardProjects 
          ImgProjectSrc={PortfolioArchi} 
          AltImgProjectSrc="my project porfolio architect" 
          TextProject="ARCHITECT'S PORTFOLIO - An application which is an architect's Portfolio. It was mostly to teach me vanilla JS."
          SkillTab={['API REST', 'CSS', 'JS']}
          LinkProject="https://github.com/Tifenn-Lamure/Portfolio-architecte"
          IsAtLeft={false}
        />
        <CardProjects 
          ImgProjectSrc={Kasa} 
          AltImgProjectSrc="my project Kasa" 
          TextProject="KASA - Appartment rental website for holidays. The project was made in React."
          SkillTab={['HTML', 'CSS', 'JS', 'REACT']} 
          LinkProject="https://github.com/Tifenn-Lamure/Kasa"
        />
      </div>
    </>
  )
};

export default MyProjects;