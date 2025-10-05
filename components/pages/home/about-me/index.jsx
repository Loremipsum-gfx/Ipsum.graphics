import Btn from "@/components/ui/Btn";

const About = () => {
return(
<section id="about-lorem" className="py-6 md:h-[60vh] flex flex-col justify-center items-center">
<div className="p-4 grid sm:grid-cols-2 justify-center items-center max-w-screen-xl">
        <figure className="p-4 grid items-center">
            <img src="/graphics/bitmap/avatar/lorem-avatar-headshot.png" className="" alt="play video button"/>
        </figure>
        <div className="flex flex-col text-left">
            <h3>
                <span className="highlight">About</span> Lorem
            </h3>
            <p className='pb-4 md:pb-8'>
            As a Multimedia Designer with a broad and deliberate skill set, I live and breathe design. My work isn’t just a job — it’s my passion and hobby.
I’m quite rooted in design theory and believe that good design comes from understanding the principles behind it. I take pride in balancing aesthetics with structure, always pairing creativity with purpose.
            </p>
            <Btn variant='primary' onClick={() => document.location.href = "#get-in-touch"}>Get to know me</Btn>
        </div>
    </div>
</section>
)
}

export default About;