// src/data/lorem.js
const lorem = {
  name: "Lorem Ipsum",
  born: 1991,
  get age() {
    return new Date().getFullYear() - this.born;
  },
  hired: true,
  work() {
    return {
      occupation: this.hired ? "Lead Platform Expert" : "unemployed",
      workplace: "Dot.vu",
      since: this.hired ? "2020" : "Not hired at the moment",
      responsibilities: this.hired
        ? [
            "Managing client accounts",
            "Developing multimedia solutions",
            "Team coordination",
          ]
        : [],
    };
  },
  languages: [
    ["Danish", "da-DK"],
    ["English", "en-US"],
  ],
  profession: "Multimedia Designer",
  education: "Graphic Designer",
  skills: {
    core: [
      "Layout for Publishing",
      "Visual Identity Development",
      "Responsive web layout",
      "Illustration",
      "Animation",
      "Video editing",
      "Audio Editing",
      "Web Design",
      "UX / UI",
      "Frontend Development",
      "SEO",
    ],
    knowledge: [
      "Color theory",
      "Color grading",
      "Visual communication",
      "Golden ratio",
      "rule of thirds",
      "compositions",
      "photo manipulation",
      "re-touching",
      "line-art illustration",
      "logo design",
    ],
  },
  techStack: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe Audition",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Visual Studio",
    "WordPress",
    "Microsoft 365",
  ],
  social: {
    website: "https://loremipsum.graphics",
    LinkedIn: "https://www.linkedin.com/in/loremipsum-gfx/",
    GitHub: "https://github.com/Loremipsum-gfx",
    X: "https://x.com/LoremIpsum_gfx",
  },
  contact: {
    phone: { number: "20978142", countryCode: "+45" },
    mail: "lorem@ipsum.graphics",
  },
};

export default lorem;
