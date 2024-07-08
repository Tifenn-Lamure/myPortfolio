import { useState } from "react";
import SkillBtn from "../SkillBtn/SkillBtn";


function CardProjects ({ImgProjectSrc, AltImgProjectSrc, TextProject, LinkProject, SkillTab, IsAtLeft = true}) {
  const [isViewMore, setViewMore] = useState(false)

  return (
    <div className={`relative ${IsAtLeft ? 'mr-4 sm:mr-8 ' : 'ml-4 sm:ml-8 '}`}>
      <div className={`h-[12rem] sm:h-[24rem] bg-light-violet p-1 sm:p-4 border-black border-y-4 relative z-10 flex gap-2 sm:gap-10 items-center ${IsAtLeft ? 'border-r-4 rounded-r-lg' : 'border-l-4 rounded-l-lg flex-row-reverse'}`}>
          <img src={ImgProjectSrc} alt={AltImgProjectSrc} className="h-[90%] w-[50%] object-cover border-black border-2 rounded-lg" />
          <div className="flex flex-col gap-[.3rem] sm:gap-[1rem] items-center w-[50%]">
          {!isViewMore ?
            <>
              <div className="text-[12px] sm:text-[18px] lg:text-[24px] text-center text-white leading-[1rem] sm:leading-normal">{TextProject}</div>
              <div className="flex flex-col align-center justify-center">
                <button className="text-[12px] sm:text-2xl text-center w-24 sm:w-48 bg-very-light-violet rounded-lg border-black border-2 relative z-10 hover:text-3xl hover:h-12 hover:w-52" onClick={() => setViewMore(true)}>More Details</button>
              </div>
            </>
            :
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2 gap-[1rem] lg:gap-[2rem] items-center">
              {SkillTab.map((SkillTab, index) => (
                <SkillBtn BtnWidth="w-[3.5rem] sm:w-28 lg:w-48" key={index} BtnHeight="h-[2rem] lg:h-[3rem]" SkillBtnText={SkillTab} textSize="text-[10px] sm:text-[18px] lg:text-[24px]" BtnColorBack="bg-very-light-violet" BtnColorFront="bg-dark-violet" className="w-48"/>
              ))}
              </div>
              <div className="flex flex-col items-center justify-center mt-[1rem]">
                <a href={LinkProject} target="_blank" without="true" rel="noopener noreferrer" className="text-center text-[12px] sm:text-[18px] lg:text-[24px] text-white pb-[.5rem] hover:underline">Click for my repositories</a>
                <button className="text-center text-[12px] sm:text-2xl text-center w-24 sm:w-48 bg-very-light-violet rounded-lg border-black border-2 relative z-10 hover:text-lg hover:h-8 hover:w-44 hover:leading-6" onClick={() => setViewMore(false)}>Less Details</button>
              </div>
            </div>
            }
          </div>
      </div>
      <div className={`h-[12rem] sm:h-[24rem] w-[98%] bg-dark-violet border-black border-y-4 absolute top-4 z-0 ${IsAtLeft ? 'border-r-4 rounded-r-lg' : 'border-l-4 rounded-l-lg right-0'}`}></div>
    </div>
  )
};

export default CardProjects;