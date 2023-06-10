import { useState } from "react";
import { logoRakitPc } from "../assets";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // const toPromo = () => {
  //   navigate('/promo');
  // };


  return (
    <div className="navbar bg-[#2F4550]">
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-[100px] text-center items-center text-lg font-semibold text-black " +
        "justify-between transform duration-300 ease overflow-hidden "}>
        <a href="/" className="flex flex-row justify-start items-center h-full text-white">
          <img src={logoRakitPc} className={"m-2 transform duration-300 ease h-[40px]"}/>
          <p className="transform">Rakit PC</p> 
        </a>
        
        <div className="text-white flex flex-row gap-9">
          <button>Home</button>
          <button>Build</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
