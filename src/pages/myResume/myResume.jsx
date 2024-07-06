import React from "react";
import QrcodePic from "./../../assets/img/qrcode.png";
import SkillBtn from "../../components/SkillBtn/SkillBtn";
import CvPdf from '../../assets/pdf/CV_Tifenn_LAMURE.pdf';
import TifennResume from '../../assets/img/TifennResume.PNG';
import CloudSimpleBG from '../../assets/img/CloudSimple.PNG';
import CloudInfront from '../../assets/img/CloudInfront.PNG';

const Resume = () => {
  return(
    <>
      <div className="bg-dark-blue-violet flex flex-col gap-10">

        <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto">

          <div className="mt-[2em] lg:mt-[5em] flex justify-center w-full mb-8">
            <div className="relative">
              <div className="lg:w-[95%] lg:h-[25rem] bg-white mx-4 border-black border-4 relative rounded-lg z-10 overflow-clip flex items-center">
                <div className="absolute w-full h-full bg-white z-10 opacity-[.3]"></div>
                <img src={CloudSimpleBG} className="w-[110%] max-w-[110%] absolute bottom-0 z-0 object-cover overflow-hidden animate-[cloud_3000ms_ease-in-out_infinite]" alt="background with clouds"/>
                <img src={CloudInfront} className="w-[110%] max-w-[110%] absolute bottom-0 z-0 object-cover overflow-hidden animate-[cloudReverse_3000ms_ease-in-out_infinite]" alt="Clouds in the front line" />
                <div className="lg:h-[30em] flex gap-[6rem] px-[1rem] xsm:px-[4rem] items-center justify-between">
                  <div className="flex flex-col gap-4 z-20 mt-4 xsm:mt-0">
                    <h2 className="text-dark-blue-violet text-[32px] xsm:text-[64px]">Tifenn LAMURE</h2>
                    <div className="text-[14px] xsm:text-[22px] lg:w-[70%]">Front developer specialized in animations and UX/UI designs thanks to my degree in art. I am seeking remote jobs opportunities worldwide.  So if you want a developer doing pretty and design website, I am the person you need!</div>
                    <div className="flex justify-center">
                      <img src={TifennResume} className="w-32 overflow-visible z-50 xsm:w-48 lg:hidden" alt="drawing of me"/>
                    </div>
                  </div>
                </div>
              </div>
              <img src={TifennResume} className="overflow-visible w-72 z-50 absolute hidden lg:block bottom-[0.2rem] right-[4rem]" alt="drawing of me"/>
              <div className="hidden xsm:block w-[95%] h-full bg-light-violet bg-dark-violet border-black border-b-4 border-l-4 xsm:border-4 absolute rounded-bl-lg xsm:rounded-lg bottom-[-1em] xsm:left-8 z-0"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-16 lg:justify-between lg:px-8">
            <div className="relative hidden lg:block">
              <div className="w-full h-[30rem] bg-white border-black border-4 relative rounded-lg z-10 flex flex-col items-center overflow-hidden">
                <div className="w-full border-b-4 text-2xl bg-very-light-violet border-black pl-6 text-dark-violet">Github</div>
                <div className="overflow-hidden h-full max-h-[95%] flex justify-center items-center">
                  <img className="w-full max-w-[27rem] max-h-[27rem] aspect-square" src={QrcodePic} alt="the QR code link to my Linkedin"/>
                </div>
              </div>
              <div className="h-[30rem] bg-light-violet w-[100%] bg-dark-violet border-black border-4 absolute rounded-lg top-4 left-4 z-0"></div>
            </div>

            <a href="https://linktr.ee/tifenn_lamure" without="true" rel="noopener noreferrer" target="_blank" className="relative mx-auto lg:hidden">
              <div className="bg-dark-violet h-16 w-48 xsm:w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 xsm:m-10 bottom-2 right-2 text-[24px] xsm:text-3xl text-white font-light hover:bottom-0 hover:right-0">My Linktree</div>
              <div className="bg-white h-16 w-48 xsm:w-80 flex items-center justify-center rounded-lg border-4 border-black z-0 xsm:m-10"></div>
            </a>

            <div className="flex flex-col items-center justify-between gap-[1rem]">
              <SkillBtn 
              SkillBtnText="HTML"
              textSize="text-xl xsm:text-3xl"
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]"
              BtnColorBack="bg-very-light-violet" 
              BtnColorFront="bg-dark-violet"
              />
              <SkillBtn 
              SkillBtnText="CSS/SCSS" 
              textSize="text-xl xsm:text-3xl"
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]"
              BtnColorBack="bg-[#B7B7F0]" 
              BtnColorFront="bg-[#7171D4]"
              />
              <SkillBtn 
              SkillBtnText="JAVASCRIPT"
              textSize="text-xl xsm:text-3xl" 
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]"
              BtnColorBack="bg-[#6E6EBC]" 
              BtnColorFront="bg-light-violet"
              />
              <SkillBtn 
              SkillBtnText="REACT"
              textSize="text-xl xsm:text-3xl"
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]" 
              SkillBtnTextColor="text-black" 
              BtnColorBack="bg-[#5858B2]" 
              BtnColorFront="bg-[#B7B7F0]"
              />
              <SkillBtn 
              SkillBtnText="REDUX"
              textSize="text-xl xsm:text-3xl" 
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]"
              SkillBtnTextColor="text-black" 
              BtnColorBack="bg-[#4B4BAB]" 
              BtnColorFront="bg-very-light-violet"
              />
              <SkillBtn 
              SkillBtnText="ADOBE/FIGMA"
              textSize="text-xl xsm:text-3xl"
              BtnWidth="w-[15rem]"
              BtnHeight="h-[3.5rem]" 
              SkillBtnTextColor="text-black" 
              BtnColorBack="bg-dark-blue-violet" 
              BtnColorFront="bg-white"
              />
            </div>

            <div className="flex flex-col justify-between gap-4">

              <div className="flex gap-4 justify-between mx-auto">
                <div className="relative">
                  <div className="text-center w-[7rem] h-[7rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                    <div className="text-[35px] xsm:text-[50px] md:text-[70px] font-['Parisienne']">Fr</div>
                    <div className="text-[20px]">Native</div>
                  </div>
                  <div className="w-[7rem] h-[7rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
                </div>
                <div className="relative">
                  <div className="text-center w-[7rem] h-[7rem] text-[#2C32BE] bg-very-light-violet rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">
                    <div className="text-[35px] xsm:text-[50px] md:text-[70px] font-['Parisienne']">En</div>
                    <div className="text-[20px]">Fluent</div>
                  </div>
                  <div className="w-[7rem] h-[7rem] bg-very-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
                </div>
              </div>

              <div className="relative mx-auto">
                <div className="text-center w-[15rem] md:w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Bachelor Animation 2D - Bellecour Ecole</div>
                <div className="w-[15rem] md:w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
              <div className="relative mx-auto">
                <div className="text-center w-[15rem] md:w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Intégrateur Web - OpenClassrooms</div>
                <div className="w-[15rem] md:w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>
              <div className="relative mx-auto">
                <div className="text-center w-[15rem] md:w-[21rem] h-[5rem] text-black text-2xl bg-white rounded-lg border-black border-4 relative z-10 flex flex-col items-center justify-center">Hôtesse d'accueil - <br />La Poste</div>
                <div className="w-[15rem] md:w-[21rem] h-[5rem] bg-light-violet rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent"></div>
              </div>

            </div>
          </div>

          <a href={CvPdf} without="true" rel="noopener noreferrer" target="_blank" className="relative mx-auto mt-[3rem] mb-8">
            <div className="bg-dark-violet h-16 w-36 xsm:w-80 flex items-center justify-center rounded-lg border-4 border-black absolute z-10 bottom-2 left-0 text-xl xsm:text-3xl text-white font-light hover:bottom-0 hover:left-2 hover:cursor-pointer">Resume</div>
            <div className="bg-white h-16 w-36 xsm:w-80 flex items-center relative left-2 justify-center rounded-lg border-4 border-black z-0"></div>
          </a>

        </div>

      </div>
    </>
  )
};

export default Resume;