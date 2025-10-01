import { motion } from "framer-motion"
import { useState } from "react";

const Btn = ({
  type = 'button', 
  variant = 'primary', 
  tooltip = {shown: false, img: '', txt: '', offset: 0},
  children, 
  ...props}) => {

const variantClasses = {
  primary: 'skew-x-[-8deg] bg-primary-gradient-repeat text-light shadow-btn hover:shadow-btn-active px-8 py-4 animateBackground',
  secondary: 'bg-transparent shadow-none text-dark px-8 py-4',
  small: 'bg-transparent border-2 border-solid border-primary text-primary px-2 py-1',
},
    className = ` ${variantClasses[variant] || variantClasses.primary} my-1 relative group cursor-pointer transition-all flex justify-center items-center w-full max-w-fit no-underline font-bold rounded-md`;

const [hover, setHover] = useState(false);
  return (
    <motion.button
    tapindex = {0}
    whileHover={() => { 
      setHover(true);
    }}
    onHoverEnd={()=>{
      setHover(false)
    }}

    type={type} 
    className={className}
    href='#' 
    {...props}>
      {tooltip.shown && (
      <motion.span
      animate={{top: !hover ? 0 : tooltip.offset || -50, translateX: !hover ? 50 : 0, rotate: !hover ? 45 : 0, skewX: variant === 'primary' ? 8 : 0}}
      transition={{ duration: 0.3, type: "spring", stiffness: 820 }}
      className='absolute flex items-center bg-dark py-2 rounded-full text-light opacity-0 group-hover:opacity-100 font-thin min-w-max max-w-none pointer-events-none
      after:w-3 after:aspect-square after:bg-dark after:absolute after:left-1/2 after:bottom-[-6px] after:rotate-45'>
        {tooltip.img && (<img src={tooltip.img} alt={tooltip.txt} className="rounded-full max-w-7 h-7 overflow-hidden ml-2 mr-[-4px] object-cover"/>)}
        <span className="px-3 py-1 leading-none">{tooltip.txt}</span>
      </motion.span>
      )}
      <span className={variant === 'primary' ? 'skew-x-[8deg]' : 'items-center'}>
      {children}
      </span>
    </motion.button>
  );
};
export default Btn;
