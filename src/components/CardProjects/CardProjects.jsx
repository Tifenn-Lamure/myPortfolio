import { useState } from "react";
import SkillBtn from "../SkillBtn/SkillBtn";



function CardProjects ({ImgProjectSrc, AltImgProjectSrc, TextProject, LinkProject, IsAtLeft = true}) {
  const [isViewMore, setViewMore] = useState(false)

  return (
    <div className={`relative ${IsAtLeft ? 'mr-8 ' : 'ml-8 '}`}>
      <div className={`h-[24rem] bg-light-violet p-4 border-black border-y-4 relative z-10 flex gap-10 items-center ${IsAtLeft ? 'border-r-4 rounded-r-lg' : 'border-l-4 rounded-l-lg flex-row-reverse'}`}>
          <img src={ImgProjectSrc} alt={AltImgProjectSrc} className="h-[90%] w-[50%] object-cover border-black border-2 rounded-lg" />
          <div className="flex flex-col gap-[1rem] items-center w-[50%]">
            <div className="text-[28px] text-center text-white">{TextProject}</div>
            {!isViewMore ?
              <div className="h-[48px] flex flex-col align-center justify-center">
                <button className="text-2xl text-center w-48 bg-very-light-violet rounded-lg border-black border-4 relative z-10 hover:text-3xl hover:h-12 hover:w-52" onClick={() => setViewMore(true)}>View More</button>
              </div>
            :
            <div className="flex flex-col gap-[1rem] items-center">
              <SkillBtn BtnWidth="w-48" SkillBtnText="SASS" BtnColorBack="bg-very-light-violet" BtnColorFront="bg-dark-violet" className="w-48"/>
              <a href={LinkProject} target="_blank" without rel="noopener noreferrer" className="text-xl text-white hover:underline mb-4">Click for my repositories</a>
              <div className="h-[48px] flex flex-col align-center justify-center">
                <button className=" text-2xl text-center w-48 bg-very-light-violet rounded-lg border-black border-4 relative z-10 hover:text-lg hover:h-8 hover:w-44 hover:leading-6" onClick={() => setViewMore(false)}>View Less</button>
              </div>
            </div>
            }
          </div>
      </div>
      <div className={`h-[24rem] w-[98%] bg-dark-violet border-black border-y-4 absolute top-4 z-0 ${IsAtLeft ? 'border-r-4 rounded-r-lg' : 'border-l-4 rounded-l-lg right-0'}`}></div>
    </div>
  )
};

export default CardProjects;