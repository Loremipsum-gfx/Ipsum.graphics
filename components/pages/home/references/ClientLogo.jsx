import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ClientLogo = ({ id, image, text, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const placeholder = './src/assets/svg/reference-logo.svg';

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: 22}}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50, rotate: isInView ? 0 : 22}}
      transition={{ duration: 0.5, delay: id * 0.25 }}
      className={`client-logo p-5 flex-auto bg-transparent perspective-distant`}
      id={`client-logo-${id}`}
      href={link}
      title={text}
    >
      <img
        className="m-2 flex w-full sm:h-40 scale-125"
        alt={text}
        title={text}
        src={image || placeholder}
      />
    </motion.a>
  );
};

export default ClientLogo;
