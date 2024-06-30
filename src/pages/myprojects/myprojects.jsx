import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import OhMyFood from "../../assets/img/ohmyfood.JPG"

const MyProjects = () => {
  return(
    <>
      <h2 className="text-light-violet text-[28px] ml-8 my-8">My projects</h2>
      <div className="flex flex-col gap-[3em]">
        <CardProjects 
          ImgProjectSrc={OhMyFood} 
          AltImgProjectSrc="my project Oh My Food" 
          TextProject="Project I did about an app of delivery food" 
          LinkProject="https://github.com/Tifenn-Lamure/Openclassrooms-OhMyFood" 
        />
        <CardProjects 
          ImgProjectSrc={OhMyFood} 
          AltImgProjectSrc="my project Oh My Food" 
          TextProject="Project I did about an app of delivery food" 
          LinkProject="https://github.com/Tifenn-Lamure/Openclassrooms-OhMyFood"
          IsAtLeft={false}
        />
        <CardProjects 
          ImgProjectSrc={OhMyFood} 
          AltImgProjectSrc="my project Oh My Food" 
          TextProject="Project I did about an app of delivery food" 
          LinkProject="https://github.com/Tifenn-Lamure/Openclassrooms-OhMyFood"
        />
      </div>
    </>
  )
};

export default MyProjects;