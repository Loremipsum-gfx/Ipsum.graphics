import React from 'react';
import ClientLogos from '@/components/data/ClientLogos';
import RefCarousel from './Carousel';

const References = () => {
  return (
    <section id="references" className="w-full pt-5 px-4 sm:px-4 md:min-h-[70vh] flex justify-center items-center flex-col">
      <div className="max-w-screen-xl w-full flex flex-col text-left">
        <h3>
          <span className="highlight">Who used</span><br /> Lorem Ipsum
        </h3>
        <p className='w-[64ch] max-w-full'>
          As a Multimedia Designer I have had the luxury of working with and for some of the best and brightest in many different industries. 
          Working both for and with many of these revelutionary companies I highly recommend visiting their sites... take a look.
        </p>
      </div>
      <div className="references max-w-full">
        <RefCarousel />
      </div>
    </section>
  );
};

export default References;
