import React from 'react'
import './LogIn.css';
import { FaUser   } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='LogIn w-screen h-screen flex justify-center opacity-95'>

        <div className="flex flex-col text-text_blue bg-white w-1/2 h-3/5 mt-[8rem] rounded-md place-items-center opacity-100">
        <span className="flex flex-col w-full align-center justify-center place-items-center w-full">
            <h3 className="text-[2.1rem] flex flex-col font-bold font-bodyFont text-center pt-[3rem]">
                <p>Image Gallery App</p>
                <p>Log in</p>
            </h3>

            {/* INPUTS */}
            <div className='w-1/2 mt-[3rem] flex flex-col '>
                {/* INPUT 1 */}
            <span className="w-full">
                <p className="text-[13px] font-bold py-1">Username</p>

                <span className='flex flex-row w-full text-[11px] text-center text-gray-400  border py-1 px-3 rounded border-gray-400'>
                <FaUser   className='mr-2 mt-[2px]' />
                <input type="text" placeholder='Enter Username' />
                </span>
            </span>

            {/* INPUT 2 */}
            <span className="mt-[1.5rem] w-full">
                <p className="text-[13px] py-1 font-bold">Password</p>

            <span className=' flex text-center align-center text-gray-400  border py-1 px-3 rounded border-gray-400'>
                <MdLock className='mr-2' />
                <input type="text" placeholder='Enter Password' className='text-[11px]' />
            </span>
            </span>

            {/* FORGOT PASSWORD */}
            <Link to='/home'>
            <p className="text-[10px] ml-auto font-semibold pt-1 ">Forgot Password?</p>
            </Link>
             
            </div>

            {/* BUTTON */}
            <button className="bg-iga_blue w-1/2 rounded text-white align-center justify-center mt-[3.5rem] h-[2.7rem]"><Link to='/home'>
            <p>LogIn</p>
            </Link>
            </button>

            <p className="text-[10px] mt-[1.5rem] font-semibold flex flex-row">New to this platform? <p className="px-1 font-black">Register</p> Here</p>
            </span>
        </div>
    </div>
  )
}

export default LogIn