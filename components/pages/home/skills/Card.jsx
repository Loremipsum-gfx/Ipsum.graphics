import Btn from '../../../ui/Btn';
import { motion } from "framer-motion";   

const SkillCard = ({id, img, title, desc, cta}) => {

const odd = id % 2 === 0;

    return(
    <div className={`card py-8 px-4`}>
        <div className={`flex flex-col ${odd ? 'md:flex-row-reverse' : 'md:flex-row'} group `} style={{perspective: '1200px'}}>
			<div className='bg-primary-gradient bg-cover w-full h-52 lg:h-64 rounded-3xl relative rotate3d group-hover:shadow-rotation' style={{transition: '550ms ease all'}}>
				<motion.div 
					initial={{opacity: 0, scale: 0.75}}
					whileInView={{opacity: 1, scale: 1}}
					transition={{delay:0.25, duration: 0.5}}
				className='absolute bottom-0 left-0 w-full h-[130%] overflow-hidden origin-bottom'>
					<img src={img} alt="" className='absolute top-12 lg:top-0 group-hover:-top-4' style={{transition: '550ms ease all'}}/>
				</motion.div>
			</div>
			<div className={`max-w-[64ch] pt-4 md:pt-4 pb-6 text-left md:px-0 flex-initial ${odd ? 'md:pr-6' : 'md:pl-6 flex-in'}`}>
				<h5>{title}</h5>
				<p className='pb-4'>{desc}</p>
				<div className='group-hover:scale-105 w-fit' style={{transition: '750ms ease all'}}>
				{// <Btn variant="small" onClick={cta}>see more</Btn>
				} 
				</div>
			</div> 
		</div>
    </div>
    )
}

export default SkillCard;