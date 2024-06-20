import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='bg-black lg:px-10 py-8 text-center text-white'>
      <div className='container lg:flex lg:justify-between items-center'>
        <p className='flex '>Copyright &copy; Matrix X 2023. All rights reserved.</p>
        <ul className='flex flex-col items-start '>
          <Link
          to={`pricavy-policy`}
          >Privacy Policy</Link>
          <Link
          to={`terms-and-condition`}
          >Terms and condition</Link>
          <li>Contact Us : +90 533 820 15 27</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
