import { motion } from "framer-motion";

export const Title = ({text}) => {
    const charArray = text.split('');

    return (
    <h1 className="pb-6 md:pb-12 leading-[0.75]">

     {charArray.map((char, index) => (
        <motion.span 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1, delay: index / 6.18}}
        className={`${char === ' ' ? 'block h-0' : 'inline'} overflow-hidden`}
        key={index}>
    
        {char === ' ' ? `\u00A0` : char}

        </motion.span>
      ))}
    </h1>
    );
}