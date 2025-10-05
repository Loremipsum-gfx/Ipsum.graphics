const placeholder = "./src/assets/bitmap/avatar/lorem-avatar-headshot.png";

const skills = [
  {
    id: 1,
    image: "/graphics/bitmap/skills/frontend.png" || placeholder,
    title: "Layout for web & print",
    description: `I have made thoughtful layout for traditional print, as well as responsive web design for years. `,
    cta: () => {
      console.log("CTA for card 1");
    },
  },
  {
    id: 2,
    image: "/graphics/bitmap/skills/webdesign.png" || placeholder,
    title: "UX/UI and frontend development",
    description: `I Design intentional, easy-to-use web applications and devoping them with front-end languages and tools available.`,
    cta: () => {
      console.log("CTA for card 2");
    },
  },
  {
    id: 3,
    image: "/graphics/bitmap/skills/illustration.png" || placeholder,
    title: "Graphics and illustrations",
    description: `Any creative work needs visual support, and most all creatives can make it. I'm no different.`,
    cta: () => {
      console.log("CTA for card 3");
    },
  },
  {
    id: 4,
    image: "/graphics/bitmap/skills/animation.png" || placeholder,
    title: "Animation and video/audio editing",
    description: `I also work with create commercial animations for web and television. I alsao do and do video- & audio editing. `,
    cta: () => {
      console.log("CTA for card 4");
    },
  },
];

export default skills;
