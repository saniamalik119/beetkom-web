import React from 'react'
import {privacyData } from "../data"
const PrivacyPolicy = () => {
  return (
    <div className='px-20 '>
      <p className='text-5xl capitalize '>Privacy Policy</p>
      <p className='mt-10'>Welcome to Beetkom, a real estate platform that is committed to simplifying the property experience. Its Privacy Policy contains how we gather, analyze, and safeguard information when the clients use the application. 
Beetkom promises to protect user information. The privacy policy focuses on educating the users and ensuring they receive credible information. Personal data for Beetkom includes email addresses, telephone numbers, usernames, and other unique details.
Individuals who use Beetkom accept the data exchange and other elements. If you do not wish for the information to be shared or are uncomfortable with the privacy policy, do not use Beetkom.
</p>
{privacyData.map((term, i)=>(
  <div
  className='pb-6'
   key={i}
  >
  <h2 className='text-2xl pt-4'>{term.heading}</h2>
<p className='pb-6'>
{term.content}
{term.id === 4 && (
  <>
  <ul className='py-4 pl-6'>
    <li className='list-disc py-2'>Geo-based information such as IP addresses, locations, devices, browsers, and bandwidth.
</li>
<li className='list-disc py-2'>Contact information such as addresses, names, and emails. Other elements that describe the scenarios are also collected.
</li>
<li className='list-disc py-2'>Date and Time of the website visit. Beetkom pays close attention to the version of the operating system and the languages.
</li>
  </ul>
  <p>Beetkom collects data for promotional and commercial use. It aims to improve the quality of service. Furthermore, the privacy policy is consistent with the legal requirements. The information is utilized in drafting and negotiating future contracts with the Beetkom visitors. </p>
  </>
)}
</p>

  </div>
))}
    </div>
  )
}

export default PrivacyPolicy