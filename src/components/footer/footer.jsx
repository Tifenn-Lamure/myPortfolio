import React from "react";

const Footer = () => {
  return(
    <>
      <div className="bg-dark-violet border-t-4 border-black font-[600] px-6 xsm:px-10 py-[1.3rem] flex flex-col lg:flex-row gap-[1rem] justify-between z-30">
        <div>
          <div className="text-[20px] xsm:text-[35px]">ADRESS</div> 
          <div className="text-[16px] xsm:text-[28px]">29 rue Paul Déroulède,</div> 
          <div className="text-[16px] xsm:text-[28px]">06000 Nice, FRANCE</div>
        </div>
        <div>
          <div className="text-[20px] xsm:text-[35px]">PHONE</div> 
          <a href="tel:+33651164487" className="text-[16px] xsm:text-[28px] hover:text-very-light-violet" >{"(+33) 6.51.16.44.87"}</a> 
        </div>
        <div>
          <div className="text-[20px] xsm:text-[35px]">EMAIL</div> 
          <a href="mailto:tifenn.lamure@hotmail.com" className="text-[16px] xsm:text-[28px] hover:text-very-light-violet">tifenn.lamure@hotmail.com</a>
        </div>
      </div>
    </>
  )
};

export default Footer;