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
            <figcaption className="text-xs">© Copyright <a href="https://loremipsum.graphics" title="home" className="text-primary font-bold">Lorem Ipsum </a> 2023 – {y}
            <br /> {`${lorem.name} | ${lorem.profession} | `} <a href={lorem.social.LinkedIn} title="get to know me">Write me on LinkedIn</a></figcaption>
        </figure>
    </div>
</div>
</section>
)
}

export default Footer;