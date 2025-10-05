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
        <p className='w-full max-w-[64ch]'>
          Throughout theyears, I have had the privilege of collaborating with a diverse range of skilful people,
          from innovative startups to established enterprises. Here a few of the companies I have worked with and for.
        </p>
      </div>
      <div className="references max-w-full">
        <RefCarousel />
      </div>
    </section>
  );
};

export default References;
