import React from "react";
import TiaraPic from "./../../assets/img/TiaraPic.PNG";
import QrcodePic from "./../../assets/img/qrcode.png";
import SkillBtn from "../../components/SkillBtn/SkillBtn";

const Resume = () => {
  return(
    <>
      <div className="bg-dark-blue-violet h-[100vh] flex flex-col gap-10">

        <div className="mt-[4em] w-full">
          <div className="relative mx-[4em]">
            <div className="w-full h-[24rem] bg-white border-black border-4 relative rounded-lg z-10 flex gap-[6rem] px-[4rem] items-center justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-light-violet text-[64px]">Tifenn LAMURE</h2>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus modi et maiores odit enim itaque illum doloremque maxime architecto.</div>
              </div>
              <img src={TiaraPic} className="h-[120%] w-[150px] mb-[75px]" alt="drawing of me"/>
            </div>
            <div className="h-[24rem] bg-light-violet w-[100%] bg-dark-violet border-black border-4 absolute rounded-lg top-4 left-4 z-0"></div>
          </div>
        </div>

        <div className="flex gap-4 justify-between mx-[4em]">
          <div className="relative">
            <div className="w-[100%] h-[24rem] bg-white border-black border-4 relative rounded-lg z-10 flex flex-col items-center overflow-hidden">
              <div className="w-full border-b-4 text-2xl bg-very-light-violet border-black pl-6 text-dark-violet">Github</div>
              <div className="overflow-hidden h-full w-full max-h-[95%] flex justify-center items-center">
                <img className="w-full max-w-[330px] max-h-[330px] aspect-square" src={QrcodePic}/>
              </div>
            </div>
            <div className="h-[24rem] bg-light-violet w-[100%] bg-dark-violet border-black border-4 absolute rounded-lg top-4 left-4 z-0"></div>
          </div>

          <div className="h-full flex flex-col justify-between">
            <SkillBtn SkillBtnText="HTML" BtnColorBack="bg-very-light-violet" BtnColorFront="bg-dark-violet"/>
            <SkillBtn SkillBtnText="CSS/SCSS" BtnColorBack="bg-[#B7B7F0]" BtnColorFront="bg-[#7171D4]"/>
            <SkillBtn SkillBtnText="JAVASCRIPT" BtnColorBack="bg-[#6E6EBC]" BtnColorFront="bg-light-violet"/>
            <SkillBtn SkillBtnText="REACT" SkillBtnTextColor="text-black" BtnColorBack="bg-[#5858B2]" BtnColorFront="bg-[#B7B7F0]"/>
            <SkillBtn SkillBtnText="REDUX" SkillBtnTextColor="text-black" BtnColorBack="bg-[#4B4BAB]" BtnColorFront="bg-very-light-violet"/>
            <SkillBtn SkillBtnText="ADOBE/FIGMA" SkillBtnTextColor="text-black" BtnColorBack="bg-dark-blue-violet" BtnColorFront="bg-white"/>
          </div>

          <div className="h-full flex flex-col justify-between max-w-[15rem]">

            <div className="flex gap-4 justify-between">
              <div className="relative">
                <div className="text-center w-[7rem] h-[7rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                  <div className="text-4xl">FR</div>
                  <div>Native</div>
                </div>
                <div className="w-[7rem] h-[7rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
              <div className="relative">
                <div className="text-center w-[7rem] h-[7rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                  <div className="text-4xl">EN</div>
                  <div>Fluent</div>
                </div>
                <div className="w-[7rem] h-[7rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
            </div>

            <div className="relative">
              <div className="text-center w-full h-[3.5rem] text-black bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Bachelor Animation 2D - Bellecour Ecole</div>
              <div className="w-full h-[3.5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center w-full h-[3.5rem] text-black bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Intégrateur Web - OpenClassrooms</div>
              <div className="w-full h-[3.5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center w-full h-[3.5rem] text-black bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Hôtesse d'accueil - La Poste</div>
              <div className="w-full h-[3.5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
};

export default Resume;