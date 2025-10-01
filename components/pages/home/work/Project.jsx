import { useState } from "react";



const Project = ({name, descrition, image})=>{

  const [rotate, setRotate] = useState({rotateX: 0, rotateY: 0});
    return (
      <div 
      className="px-5 py-8 work-card-frame cursor-grab active:cursor-grabbing"  style={{perspective: '1200px'}}>
        <div className="relative flex work-card items-end rounded-3xl px-4 p-4 pt-[38.2%]  bg-primary-gradient group hover:shadow-rotation hover:rotate-3d-[x-12deg]" style={{transition: '750ms ease all',}}>  
          <div className='absolute bottom-0 left-[-5%] w-[110%] h-[120%] overflow-hidden'>
            <img src={image} alt={name} className='absolute top-8 group-hover:top-5' style={{transition: '750ms ease all'}}/>
          </div>
          <div className="relative w-full text-left project-details p-6 rounded-[14px] bg-light transition-all group-hover:-translate-y-2 group-hover:shadow-rotation">
          <h5 className="p-0">{name}</h5>
          <p>{descrition}</p>
          </div>
        </div>
      </div> 
    )
}


export default Project;