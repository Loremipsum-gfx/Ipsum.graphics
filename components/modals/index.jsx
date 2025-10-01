import { useState } from "react";
import { motion } from "framer-motion";
import Fallback from "./Fallback";
import LoremVideo from "./LoremVideo";

const Modal = ({type, onClose}) => {
if (!type) return null;

const renderContent = (type) => {
    switch (type) {
      case 'video':
        return <LoremVideo /> ;
      default: 
        return <Fallback />;
    }
  };


return(
    <motion.div 
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,}}
    transition={{ duration: 0.25 }}
    className="cookie-notice  w-full flex justify-center items-center fixed top-0 left-0 h-full bg-primary-transparent-backdrop z-[150] p-8">
        <div className='max-w-screen-sm w-full flex justify-center items-center bg-light rounded-3xl overflow-hidden relative shadow-xl border-primary border-4 border-solid'>
           <button onClick={onClose} className="absolute top-2 right-3 w-4 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#9a9a9a" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
            </button>           
           {renderContent(type)}
        </div>
</motion.div>  
    );
};

export default Modal;