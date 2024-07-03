import React from "react";

const Footer = () => {
  return(
    <>
      <div className="w-full bg-dark-violet h-[20vh] border-t-4 border-black font-[600] px-[2rem] py-[1.5rem] flex flex-row justify-between z-30">
        <div >
          <div className="text-[35px]">ADRESS</div> 
          <div className="text-[28px]">29 rue Paul Déroulède,</div> 
          <div className="text-[28px]">06000 Nice, FRANCE</div>
        </div>
        <div>
          <div className="text-[35px]">PHONE</div> 
          <div className="text-[28px]">+33 6 51 16 44 87</div> 
        </div>
        <div>
          <div className="text-[35px]">EMAIL</div> 
          <div className="text-[28px]">tifenn.lamure@hotmail.com</div> 
        </div>
      </div>
    </>
  )
};

export default Footer;