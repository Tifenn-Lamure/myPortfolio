
function SkillBtn ({SkillBtnText, SkillBtnTextColor = 'text-white', BtnColorBack, BtnColorFront}) {
  return (
    <>
      <div className="relative">
        <div className={`text-2xl text-center ${SkillBtnTextColor} w-48 ${BtnColorFront} rounded-lg border-black border-4 relative z-10`}>{SkillBtnText}</div>
        <div className={`w-48 h-10 ${BtnColorBack} rounded-lg border-black border-4 absolute z-0 top-2 left-2`} ></div>
      </div>
    </>
  )
};

export default SkillBtn; 