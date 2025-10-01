"use client";

import {useState, useEffect } from 'react';

export default function Menu() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    menu 
    ? document.body.classList.add('menu')
    : document.body.classList.remove('menu');

    return () => {
      document.body.classList.remove('menu');
    };
  }, [menu]);

useEffect(() => {
  if (typeof window !== "undefined") {
    setOrigin(window.location.origin);
  }
}, []);

  return (
    <>
      <div id="lorem-menu-button" className="p-4" onClick={toggleMenu}>
        <svg x="0px" y="0px" viewBox="0 0 60 16">
          <rect id="e3" x="18.1" y="12.9" className="st0" width="10.5" height="2.6" />
          <rect id="e2" x="18.1" y="6.6" className="st0" width="10.5" height="2.4" />
          <rect id="e1" x="18.1" y="0.4" className="st0" width="10.5" height="2.6" />
          <path d="M12.1,0.4h3.1v15h-2.9v-10l-3.9,7.4H6.8L2.9,5.5v10H0v-15h3.1L7.6,9L12.1,0.4z M40.7,10.3l-7.8-9.9 h-2.3v15h2.9V5.8l7.7,9.6h2.4v-15h-2.9V10.3z M56.6,0.4v7.7c0,0.6-0.1,1.2-0.2,1.8c-0.1,0.6-0.3,1.1-0.6,1.6 c-0.3,0.5-0.7,0.8-1.1,1.1c-0.5,0.3-1.1,0.4-1.7,0.4c-0.7,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.8-0.6-1.1-1.1c-0.3-0.5-0.5-1-0.6-1.6 c-0.1-0.6-0.2-1.2-0.2-1.8V0.4h-2.9v7.7c0,1,0.1,1.9,0.3,2.8c0.2,0.9,0.6,1.7,1.1,2.4c0.5,0.7,1.2,1.2,2,1.7 c0.8,0.4,1.9,0.6,3.1,0.6c1.2,0,2.2-0.2,3-0.6c0.8-0.4,1.5-0.9,2-1.6c0.5-0.7,0.9-1.5,1.2-2.4c0.2-0.9,0.4-1.9,0.4-2.9V0.4H56.6z" />
        </svg>
      </div>
      <div id="lorem-menu">
        <nav id="lorem-menu-frame" className="flex w-full flex-col justify-center items-center relative no-underline uppercase text-justify leading-tight text-9xl
        before:absolute before:font-headers before:leading-[0.85] before:bottom-[100%] before:text-transparent
        after:absolute after:font-headers after:leading-[0.85] after:top-[100%] after:text-transparent">
          <a href={origin || "/"}  style={{ left: '4vw' }} title="Go to the frontpage">Home</a>
          <a href="#get-in-touch"  onClick={toggleMenu} style={{ right: '4vw' }} title="Contact coming soon">Contact</a>
          <a href="#" style={{ left: '2vw' }} title="Portfolio coming soon">Portfolio</a>
          <a href="https://blog.loremipsum.graphics" style={{ right: '4vw' }} title="Blog coming soon">Blog</a>
          <a href="#about-lorem"  onClick={toggleMenu} style={{ left: '4vw' }} title=" About.. coming soon">About</a>
        </nav>
      </div>
    </>
  );
}
