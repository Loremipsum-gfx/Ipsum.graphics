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
        Just like lorem ipsum, I'm a versatile Multimedia Designer,
        I can deliver the work you need, or help as a consultant on your own creative projects
        
    </p>
    </div>
</motion.div>
</section>
);
}


export default CallToAction;