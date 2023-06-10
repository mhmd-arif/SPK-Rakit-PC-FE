import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { HeroImg } from "../assets";

const Build = () => {
  const buildRef = useRef(null);
  return (
    <div className="Build w-full h-screen font-poppins text-white bg-[#2F4550] " ref={buildRef} >
      <div className='flex flex-row h-full font-poppins text-white px-[100px] pt-[80px]'>
        <div className='basis-1/2 flex flex-col'>
          <div className='items-start'>
            <h2 className='text-[80px] font-bold'>Custom your <br /> dream PCs</h2>
            <p className='text-lg text-[#B8DBD9] font-medium'>Build your dream PC around your <br /> budget and optimized for your preferences</p>
            <div className='flex flex-row-reverse mt-[100px] mr-[200px] '>
              <button className="bg-[#B8DBD9] text-black text-base font-bold py-4 px-9 rounded-xl  transform duration-300 ease hover:bg-white hover:text-black"
              >
                Start Build
              </button>
            </div>
          </div>
        </div>
        <div className='basis-1/2 flex flex-row items-center justify-center'>
          <img src={HeroImg} alt="img PC Components" className='w-[600px]' />
        </div>
      </div>
    </div>
  );
};

export default Build;
