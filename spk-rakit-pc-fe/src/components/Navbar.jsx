import { useState } from "react";
import { LogoRakitPc } from "../asset";
// import LogoRakitPc from "../../public/LogoRakitPC.svg"
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onHeroClick, onBuildClick }) => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  const toBuild = () => {
    navigate('/build');
  };

  const toCatalogue = () => {
    navigate('/catalogue');
  };

  return (
    <div className="navbar bg-[#2F4550]">
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-[100px] text-center items-center text-lg font-semibold text-black " +
        "justify-between transform duration-300 ease overflow-hidden "}>
        <a onClick={toHome} className="flex flex-row justify-start items-center h-full text-white cursor-pointer">
          <img src={LogoRakitPc} className={"m-2 transform duration-300 ease h-[40px]"} />
          <p className="transform">Rakit PC</p>
        </a>

        <div className="text-white flex flex-row gap-9">
          <button onClick={toHome} >Home</button>
          <button onClick={toBuild}>Build</button>
          <button onClick={toCatalogue}>Catalogue</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
