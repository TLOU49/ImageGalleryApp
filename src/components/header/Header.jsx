import React from 'react'
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className='absolute ml-96 h-20 w-full text-text_blue shadow-md shadow-gray-500 flex justify-between'>
        <span className="flex m-6 font-semibold">
            <p className="text-[1.1rem]">Home</p>
            <RxCaretRight className='pb-1 text-[2rem]'/>
        </span>
        <span className="flex mt-6 mr-[12rem]">
        <IoPersonCircleOutline className='text-[1.6rem] '/>
        <p className="text-[16px] px-2 font-semibold">Dean Mabuela</p>
        <RxCaretDown className='text-[1.4rem] font-bold'/>
        </span>
    </div>
  )
}
