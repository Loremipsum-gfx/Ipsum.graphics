import { motion } from "framer-motion";   

const FrontPageAnimation = () => {
   return (
<motion.div 
initial={{scale: 0}}
whileInView={{scale: 1}}
transition={{delay:1.5, type: 'spring', stiffness: 280}}
className="w-full h-full " style={{backgroundImage: 'url(/graphics/video/animation/loremscroll/frame1.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

</motion.div>
    );
}
export default FrontPageAnimation;