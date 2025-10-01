"use client";

import Stat from './Stat';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className='py-6 flex justify-center items-center md:min-h-[50vh]'>
      { inView &&
    <div className="p-4 max-w-[1920px] flex flex-wrap  justify-center items-center gap-8 sm:space-x-20 md:space-x-40">
        <div className="text-[120px] md:text-[220px] relative">
          <span className='text-primary font-headers absolute z-10 -left-8 md:-left-14'>+</span>
          <Stat number={500} />
          <h5 className='-mt-8 md:text-2xl'>Web pages & apps</h5>
        </div>
        <div className="text-[120px] md:text-[220px] relative">
        <span className='text-primary font-headers absolute z-10 -left-8 md:-left-14'>+</span>
          <Stat number={200} />
          <h5 className='-mt-8 md:text-2xl'>Animation & videos</h5>
        </div>
        <div className="text-[120px] md:text-[220px] relative">
        <span className='text-primary font-headers absolute z-10 -left-8 md:-left-14'>+</span>
          <Stat number={999} />
          <h5 className='-mt-8 md:text-2xl'>Publishing projects</h5>
        </div>
    </div>
    }
    </section>
  );
};

export default Stats;
