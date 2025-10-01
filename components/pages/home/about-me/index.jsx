import Btn from "@/components/ui/Btn";

const About = () => {
return(
<section id="about-lorem" className="py-6 md:h-[80vh] flex flex-col justify-center items-center">
<div className="p-4 grid sm:grid-cols-2 justify-center items-center max-w-screen-xl">
        <figure className="p-4 grid items-center">
            <img src="graphics/bitmap/me.png" className="" alt="play video button"/>
        </figure>
        <div className="flex flex-col text-left">
            <h3>
                <span className="highlight">About</span> Lorem
            </h3>
            <p className='pb-4 md:pb-8'>
            As a Multimeda Designer with a ranged skillset I live and breath for my field, and my work is my interest and hobby. 
            I am very much theoretical oriented, so proper work means a lot, and I pride myself by looking at the numbers, principles,
            theories and pairing it with good dynamic layout compositions. 
            I spend a lot of time optimizing my knowledge, keeping up with software and trends.
            </p>
            <Btn variant='primary'>Get to know me</Btn>
        </div>
    </div>
</section>
)
}

export default About;