
function SkillBtn ({BtnWidth = 'w-full', BtnHeight ='h-full', SkillBtnText, SkillBtnTextColor = 'text-white', BtnColorBack, BtnColorFront, textSize}) {
  return (
    <>
      <div className="relative">
        <div className={`${textSize} text-center ${BtnWidth} ${BtnHeight} ${SkillBtnTextColor} ${BtnColorFront} rounded-lg border-black border-4 relative z-10 flex items-center justify-center`}>{SkillBtnText}</div>
        <div className={`${BtnWidth} ${BtnHeight} ${BtnColorBack} rounded-lg border-black border-4 absolute z-0 top-2 left-2 text-2xl text-transparent`}>{SkillBtnText}</div>
      </div>
    </>
  )
};

export default SkillBtn; 