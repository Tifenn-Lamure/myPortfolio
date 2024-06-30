
function SkillBtn ({SkillBtnText, BtnColorBack, BtnColorFront}) {
  return (
    <>
      <div className="relative">
        <div className={`text-white text-2xl text-center w-48 ${BtnColorFront} rounded-lg border-black border-4 relative z-10 my-4`}>{SkillBtnText}</div>
        <div className={`w-48 h-10 ${BtnColorBack} rounded-lg border-black border-4 absolute z-0 top-2 left-2 my-4`} ></div>
      </div>
    </>
  )
};

export default SkillBtn; 