'use client';

import Btn from "@/components/ui/Btn";
import Modal from "@/components/modals";
import FrontPageAnimation from "./Animation";
import { motion, useInView } from "framer-motion";   
import { useState, useRef } from "react";


const Hero = ({line_1 = 'Lorem', line_2 = 'Ipsum'}) => {
	const [popup, setPopup] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

return (
<header className="flex py-24 lg:py-0">    
    <div ref={ref} className="grid grid-cols-[repeat(16,_1fr)] grid-rows-[repeat(8,_1fr)] w-full h-[90vh] lg:ml-[-1vw]">
        <h1 className="leading-[1] col-span-full row-start-1 text-8xl lg:row-start-4 lg:text-[17vw]">
            <span className="px-3">
        {
        line_1.split('').map((word, index) => (
            <motion.span
            key={index}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100}}
            >
            {word}
            </motion.span>
        ))}
            </span>
            <span className="px-3">
        {
        line_2.split('').map((word, index) => (
            <motion.span
            key={index}
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{delay: 0.5 + index * 0.1, duration: 0.5, type: 'spring', stiffness: 100}}
            >
            {word}
            </motion.span>
        ))}
  </span>
    </h1>
    <p className="py-4 text-lg col-start-4 col-end-[14] row-start-2 lg:text-left lg:row-start-5 lg:col-start-12 lg:col-end-[16]">
    My Name is <strong>Lorem</strong> and I'm a Danish Multimedia Designer
    with more than a decade of experience across print, motion, and web. And for clarity, my name is indeed Lorem. Reach out, and get in touch, and you'll leave with a funny storry on top.
    </p>
    <div className="flex justify-center items-center col-start-4 col-end-[14] row-start-3 flex-col lg:flex-row lg:justify-start lg:row-start-5 lg:col-start-2 lg:col-end-7">
    <Btn variant="primary" onClick={() => document.location.href = "#get-in-touch"} >
    Contact me now!
    </Btn>
    { /*
    <Btn variant="secondary" onClick={() => setPopup('video')} tooltip={{shown: true, img: '/graphics/bitmap/lorem-ipsum-headshot.png', txt: 'Let me explain...', offset:-40}}>
    <img src="/graphics/svg/playbutton.svg" className="w-12 p-2" alt="play video button"/>
    Quick introduction!
    </Btn>
*/ }
    </div>
    <div className=" hidden lg:flex lg:col-start-13 lg:row-start-6 lg:rotate-90 lg:translate-y-5">
    <img src="/graphics/svg/arrow-pointing-right.svg" alt="Meet Lorem" className=" pointer-events-none rotate-90 sm:rotate-0" />
    </div>
    <div id="lorem-hero-ani" className="relative min-h-56 flex pointer-events-none justify-center items-center row-start-6 row-end-9 col-start-3 col-span-12 lg:col-start-6 lg:col-span-6  lg:row-start-1 lg:row-span-full">
    <FrontPageAnimation />
    </div>
    </div>
<Modal type={popup} onClose={() => setPopup('')} />
</header> 
);
}

export default Hero;