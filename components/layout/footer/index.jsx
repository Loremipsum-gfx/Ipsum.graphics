"use client";

import lorem from "@/components/data/lorem";

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();

  const removeConsent = () => {
    localStorage.removeItem("cookie-consent");
    alert("Your cookie consent has been removed");
  };

  return (
    <section>
      <div className="max-w-3xl m-auto p-4">
        <div className="flex flex-col justify-center items-center">
          <figure className="flex flex-col items-center justify-center text-center">
            <img
              className="w-32 mb-2"
              src="li-logo-small.svg"
              alt="Lorem Ipsum logo"
              title="All professionals use Lorem Ipsum"
            />
            <figcaption className="text-xs">
              © Copyright{" "}
              <a
                href="https://loremipsum.graphics"
                title="home"
                className="text-primary font-bold"
              >
                Lorem Ipsum
              </a>{" "}
              2023 – {y}
              <br />
              {`${lorem.name} | ${lorem.profession} | `}
              <a href={lorem.social.LinkedIn} title="get to know me" className="hover:text-primary">
                Write me on LinkedIn | 
              </a> <button onClick={removeConsent} className="mt-4 text-xs text-gray-600 hover:text-primary transition-colors cursor-pointer "> Remove data consent </button>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Footer;
