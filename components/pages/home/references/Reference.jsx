import { useState } from "react";

const ReferenceSlot = ({name, text, image})=>{

  const [rotate, setRotate] = useState({rotateX: 0, rotateY: 0});
    return (
      <div 
      className="px-5">
        <div className="relative flex work-card items-end rounded-3xl px-4 p-4 pt-[38.2%]">  
            <img src={image} alt={name} className='absolute top-8' />
        </div>
      </div>
    )
}


export default ReferenceSlot;