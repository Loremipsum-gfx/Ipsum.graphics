"use client";

import lorem from "@/components/data/lorem";

const Footer = () => {
    const d = new Date(),
    y = d.getFullYear()
return(
<section>

<div className="max-w-3xl m-auto p-4">
    <div className="flex flex-col justify-center items-center">
        <figure className="flex flex-col items-center justify-center">
            <img className="w-32 mb-2" src="li-logo-small.svg" alt="Lorem Ipsum logo" title="All professionals use Lorem Ipsum" />
            <figcaption className="text-xs">© Copyright <a href="#" title="home" className="text-primary font-bold">Lorem Ipsum </a> 2023 – {y}
            <br /> {`${lorem.name} | ${lorem.profession}`} </figcaption>
        </figure>
    </div>
</div>
</section>
)
}

export default Footer;