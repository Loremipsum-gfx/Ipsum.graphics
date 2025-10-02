import { motion } from "framer-motion";   

const CallToAction = () => {    
return (
<section className="w-full min-h-[50vh] flex justify-center items-center">
<motion.div 
initial={{opacity: 0, translateY: '50px'}}
whileInView={{opacity: 1, translateY: '0px'}}
transition={{delay:0.5, duration: 0.5}}
className=" max-w-screen-xl grid grid-cols-1 md:grid-cols-2 py-5 items-center">
    <h3>
        <span className="highlight">When to use</span><br /> Lorem ipsum
    </h3>
    <div>
    <p className="md:text-left">I’ve been working as a Multimedia Designer for over 10 years, with a basis in Graphic Design and have gotten many areas of expertise. Whether you need help with a project, or your need a tutor for a className* don’t look any further than Lorem Ipsum to help you out.
    </p>
    </div>
</motion.div>
</section>
);
}


export default CallToAction;