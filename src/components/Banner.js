import React, { useState } from "react";
import First from "../assets/img/4.jpg"
import second from "../assets/img/12.jpg"

import Image from '../assets/img/house-banner.png';

import { Link } from 'react-router-dom';

import { ImCancelCircle } from "react-icons/im";
const Banner = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>

    <section className='h-full  mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[180px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-[#ffcb41]'>Rent and Buy</span> Your Dream <br />  House With
            Us.
          </h1>
          <p className='max-w-[480px] mb-8 text-lg'>
          Our team members are available day and night to guide you throughout the process
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
     <div id="About" className='lg:flex justify-between items-center space-x-10 lg:m-20 lg:py-10'>
      <div className='w-1/2 mx-auto mb-10 lg:mb-0'>
    <img src={First} alt='helo' width={600} />
      </div>
      <div  className='lg:w-1/2 mb-10 lg:mb-0'>
<div className='lg:w-[500px] flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left mx-auto'>
<p className='uppercase'>WellCome to Matrix X</p>
<h1 className='lg:text-5xl '><span className='text-[#ffcb41]'>Matrix X Core Value </span> 
and Conception
Innovation</h1>
<p>
Matrix X was created With the primary belief
that everyone has smooth real estate
experience.The technology introduces hassle-
free results. No one is the misguided. The
properties are not misrepresentive
</p>
<Link
className='bg-gray-700 py-2 px-6 w-40 text-white'
>Learn More</Link>
</div>
      </div>
     </div>
     <div className='bg-[#ffcb41] w-full px-20 py-10  mb-4 lg:mb-0'>
      <h1 className='lg:text-4xl capitalize tracking-wide'>Step Into The Future With Uniqueness</h1>
     </div>
     <div id="services" className='lg:flex justify-between items-center lg:space-x-10 lg:m-20 '>
      
      <div  className='lg:w-1/2 p-4 lg:p-0'>
<div className='lg:w-[500px] flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left mx-auto'>

<h1 className='lg:text-4xl '>Are you searching for the best
platform to display your
porperty?</h1>
<p>
Our team members are available day and night to guide you
throughout the process They will help you with uploading the
property details and doing other additional services such as
virtual tours. We will guide how to take the perfect picture for
the ad as
well. Matrix X Will turn the dream of researching target buyers
into a reality
</p>

</div>

      </div>
      <div className='lg:w-1/2 flex justify-center items-center '>
    <img 
    className="rounded-2xl"
    src={second} alt='helo' width={400} />
      </div>
     </div>
    </section>
    </>
  );
};

export default Banner;
