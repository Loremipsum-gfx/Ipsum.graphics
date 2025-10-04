"use client";

import WorkCarousel from './Carousel';
import Btn from '@/components/ui/Btn';

const Work = () =>{
    return(
    <section className="py-6 md:min-h-[100vh] flex flex-col justify-center items-center">
        <div className="max-w-[100%] pt-5 pb-4">
            <div className="max-w-3xl px-4 m-auto">
                <h3>
                <span className="highlight">Made with</span><br/> Lorem Ipsum
                </h3>
                <p>
                I’ve been working with many different client and projects throughout the years... 
                I’m free to chat or help out if you need help with anything Graphic design, animation, video editing webdesign. I hope to hear.
                </p>
            </div>
            <div className="py-8">
            <WorkCarousel />
            </div>     
        </div>
        {// <Btn variant='primary'>See my work</Btn>
        }
    </section>



    );
}

export default Work;