import React from 'react'
import { GoHome } from "react-icons/go";
import { TbCameraPlus } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

export const TaskBar = () => {
  return (
    <>
        <div className="bg-iga_blue absolute text-white h-screen w-96 font-bodyFont pt-1 pl-3">
            <h1 className="text-[2.5rem] font-semibold ">Logo</h1>

            <div className="text-[1.2rem] font-semibold mt-28 ">
            <span className="flex flex-row text-iga_blue bg-activeBg mr-3 h-[5rem] pt-7 active:bg-activeBg rounded-md pl-3"><GoHome className='mr-3 mt-1 font-bold'/><p className="">Home</p></span>
            <span className="flex flex-row mr-3 h-[5rem] pt-7 active:bg-activeBg rounded-md mt-2 pl-3"><TbCameraPlus className='mr-3 mt-1'/><p className="">Image Upload</p></span>
            <span className="flex flex-row pl-3 mt-[32rem]"><MdLogout className='mr-3 mt-1'/><p className="">Logout</p></span>
            </div>
        </div>
    </>
  )
}
