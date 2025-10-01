import React from 'react';
import ClientLogos from '@/components/data/ClientLogos';
import ClientLogo from './ClientLogo';

const References = () => {
  return (
    <section className="w-full py-5 px-4 sm:px-4 md:min-h-[70vh] flex justify-center items-center flex-col">
      <div className="max-w-screen-xl w-full flex flex-col pb-6 md:pb-12 text-left">
        <h3>
          <span className="highlight">Who used</span><br /> Lorem Ipsum
        </h3>
        <p className='w-[64ch] max-w-full'>
          As a Multimedia Designer I have had the luxury of working with and for some of the best and brightest in many different industries. 
          Working both for and with many of these revelutionary companies I highly recommend visiting their sites... take a look.
        </p>
      </div>
      <div className=" references min-w-[300%] flex flex-row">
        {
          ClientLogos.map(logo => (
            <ClientLogo
              key={logo.id}
              id={logo.id}
              image={logo.image}
              text={logo.text}
              link={logo.link}
            />
          ))
        }
      </div>
    </section>
  );
};

export default References;
