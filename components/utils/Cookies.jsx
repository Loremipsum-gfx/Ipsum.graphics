import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Btn from '../ui/Btn';

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); 

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowNotice(true);
    }
  }, []);

  const handleContainerClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 250); // Reset after animation
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowNotice(false);
  };
  const declineCookies = () => {
    setShowNotice(false);
  };

  if (!showNotice) {
    return null;
  }

  return (
    <motion.div  
    onClick={handleContainerClick}
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,}}
    transition={{ duration: 1, delay: 1 }}
    className="cookie-notice  w-full flex justify-center items-center fixed top-0 left-0 h-full bg-primary-transparent-backdrop z-[150] p-8">
        <motion.div
        animate={isAnimating ? { scale: 1.05, } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 420 }}
        className='max-w-[720px] w-full flex pt-12 pb-10 px-12 justify-center items-center bg-light rounded-3xl overflow-hidden relative shadow-xl border-primary border-4 border-solid'>
          
            <img src="cookies.png" alt="cookie" className='absolute top-[-22%] max-[320px]:top-[-12%] left-1/2 translate-x-[-50%] md:translate-x-[-60%] md:top-[10%] md:left-0 w-80'/>
          
          <div className='pt-40 md:pl-28 md:pt-0'>
              <p>I'm currently</p>
              <h4>cookie-free!</h4>
              <p>I'm not tracking you. I might <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" title="Learn more about web storage" rel="noopener noreferrer">save some data</a> in your browser to enhance your experience.</p>
            <div className='flex flex-col justify-center items-center pt-6'>
                <Btn variant='primary' onClick={acceptCookies}>Okey-dokey</Btn>
                <Btn variant='secondary' onClick={declineCookies}>No, thank you</Btn>
            </div>
          </div>
      </motion.div>
    </motion.div>
  );
};

export default CookieNotice;
