import React from "react";
import TiaraPic from "./../../assets/img/TiaraPic.PNG";
import QrcodePic from "./../../assets/img/qrcode.png";
import SkillBtn from "../../components/SkillBtn/SkillBtn";
import CvPdf from '../../assets/pdf/CV_Tifenn_LAMURE.pdf';

const Resume = () => {
  return(
    <>
      <div className="bg-dark-blue-violet w-full h-full flex flex-col gap-10">

        <div className="mt-[4em] flex justify-center w-full">
          <div className="relative">
            <div className="w-[80rem] h-[24rem] bg-white border-black border-4 relative rounded-lg z-10 flex gap-[6rem] px-[4rem] items-center justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-light-violet text-[64px]">Tifenn LAMURE</h2>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus modi et maiores odit enim itaque illum doloremque maxime architecto.</div>
              </div>
              <img src={TiaraPic} className="h-[120%] w-[150px] mb-[75px]" alt="drawing of me"/>
            </div>
            <div className="h-[24rem] bg-light-violet w-[80rem] bg-dark-violet border-black border-4 absolute rounded-lg top-4 left-4 z-0"></div>
          </div>
        </div>

        <div className="flex flex-rows justify-center gap-[6rem] w-full">
          <div className="relative">
            <div className="w-full h-[30rem] bg-white border-black border-4 relative rounded-lg z-10 flex flex-col items-center overflow-hidden">
              <div className="w-full border-b-4 text-2xl bg-very-light-violet border-black pl-6 text-dark-violet">Github</div>
              <div className="overflow-hidden h-full w-[31rem] max-h-[95%] flex justify-center items-center">
                <img className="w-full max-w-[27rem] max-h-[27rem] aspect-square" src={QrcodePic} alt="the QR code link to my Linkedin"/>
              </div>
            </div>
            <div className="h-[30rem] bg-light-violet w-[100%] bg-dark-violet border-black border-4 absolute rounded-lg top-4 left-4 z-0"></div>
          </div>

          <div className="flex flex-col justify-between gap-[1rem]">
            <SkillBtn 
            SkillBtnText="HTML"
            textSize="text-3xl"
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]"
            BtnColorBack="bg-very-light-violet" 
            BtnColorFront="bg-dark-violet"
            />
            <SkillBtn 
            SkillBtnText="CSS/SCSS" 
            textSize="text-3xl"
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]"
            BtnColorBack="bg-[#B7B7F0]" 
            BtnColorFront="bg-[#7171D4]"
            />
            <SkillBtn 
            SkillBtnText="JAVASCRIPT"
            textSize="text-3xl" 
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]"
            BtnColorBack="bg-[#6E6EBC]" 
            BtnColorFront="bg-light-violet"
            />
            <SkillBtn 
            SkillBtnText="REACT"
            textSize="text-3xl"
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]" 
            SkillBtnTextColor="text-black" 
            BtnColorBack="bg-[#5858B2]" 
            BtnColorFront="bg-[#B7B7F0]"
            />
            <SkillBtn 
            SkillBtnText="REDUX"
            textSize="text-3xl" 
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]"
            SkillBtnTextColor="text-black" 
            BtnColorBack="bg-[#4B4BAB]" 
            BtnColorFront="bg-very-light-violet"
            />
            <SkillBtn 
            SkillBtnText="ADOBE/FIGMA"
            textSize="text-3xl"
            BtnWidth="w-[15rem]"
            BtnHeight="h-[3.5rem]" 
            SkillBtnTextColor="text-black" 
            BtnColorBack="bg-dark-blue-violet" 
            BtnColorFront="bg-white"
            />
          </div>

          <div className="flex flex-col justify-between">

            <div className="flex gap-4 justify-between">
              <div className="relative">
                <div className="text-center w-[10rem] h-[10rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                  <div className="text-[70px] font-['Parisienne']">Fr</div>
                  <div className="text-[20px]">Native</div>
                </div>
                <div className="w-[10rem] h-[10rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
              <div className="relative">
                <div className="text-center w-[10rem] h-[10rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                  <div className="text-[70px] font-['Parisienne']">En</div>
                  <div className="text-[20px]">Fluent</div>
                </div>
                <div className="w-[10rem] h-[10rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
            </div>

            <div className="relative">
              <div className="text-center w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Bachelor Animation 2D - Bellecour Ecole</div>
              <div className="w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Intégrateur Web - OpenClassrooms</div>
              <div className="w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>
            <div className="relative">
              <div className="text-center w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Hôtesse d'accueil - <br />La Poste</div>
              <div className="w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
            </div>

          </div>
        </div>

        <a href={CvPdf} without rel="noopener noreferrer" target="_blank" className="relative mx-auto mt-[3rem] mb-8 w-80">
          <div className="bg-dark-violet h-16 w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 bottom-2 left-0 text-3xl text-white font-light hover:bottom-0 hover:left-2 hover:cursor-pointer">Resume</div>
          <div className="bg-white h-16 w-80 flex items-center relative left-2 justify-center rounded-lg border-4 border-black z-0"></div>
        </a>
        
      </div>
    </>
  )
};

export default Resume;