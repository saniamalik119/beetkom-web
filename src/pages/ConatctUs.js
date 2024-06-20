import React from 'react'
import { FcCallback } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";
import { Link } from 'react-router-dom';
import { MdMyLocation } from "react-icons/md";
const ConatctUs = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center lg:mb-28'>

     <h1 className='font-semibold text-5xl pb-4'> LET'S CHAT!</h1>
     <p className='mb-10'>We would Love to hear from You</p>
     <div className='lg:flex justify-between items-center w-full px-40'>
        <div className='flex items-center flex-col'>
            <FcCallback
            className='text-2xl mb-4'
            />
            <p>+90 533 820 15 27</p>
        </div>
        <div className='flex items-center flex-col'>
            <MdMyLocation
             className='text-2xl mb-4'
            />
            <Link to="https://maps.app.goo.gl/bqMPM4WvaoDswtN58">https://maps.app.goo.gl/bqMPM4WvaoDswtN58</Link>
        </div>
        <div className='flex items-center flex-col'>
            <SiMinutemailer
             className='text-2xl mb-4'
            />
            <p>marketxapp2024@gmail.com</p>
        </div>
       
       
     </div>
    </div>
  )
}

export default ConatctUs