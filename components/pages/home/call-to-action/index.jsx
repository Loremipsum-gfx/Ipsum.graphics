import { motion } from "framer-motion";   

const CallToAction = () => {    
return (
<section className="w-full px-4 min-h-[50vh] flex justify-center items-center">
<motion.div 
initial={{opacity: 0, translateY: '50px'}}
whileInView={{opacity: 1, translateY: '0px'}}
transition={{delay:0.5, duration: 0.5}}
className=" max-w-screen-xl grid grid-cols-1 md:grid-cols-2 py-5 items-center">
    <h3>
        <span className="highlight">When to use</span><br /> Lorem ipsum
    </h3>
    <div>
    <p className="md:text-left">
        Let's get it out of the way! I do not do well in front or behind a lense, nor do I do full stack development, or 'content creation'.
        My core experties lies in the field of visual comminication through, Graphic Design. Through the years, I've also dived into Animation, Illustration, Web Design, User Experiences and Frontend Develpment.
        My own core values lies in a 360 degree creative service, from consultation to a full branded package. 
    </p>
    </div>
</motion.div>
</section>
);
}


export default CallToAction;