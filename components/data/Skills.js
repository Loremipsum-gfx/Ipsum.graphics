const placeholder = "./src/assets/bitmap/avatar/lorem-avatar-headshot.png";

const skills = [
  {
    id: 1,
    image: "/graphics/bitmap/skills/frontend.png" || placeholder,
    title: "Layout for web & print",
    description: `I have made both static and responsive layout for both printed and digital media for years. 
      Traditional layout principles paired with professional knowhow, I’ll help layout amazing web applications or exhibition materials for your next event.`,
    cta: () => {
      console.log("CTA for card 1");
    },
  },
  {
    id: 2,
    image: "/graphics/bitmap/skills/webdesign.png" || placeholder,
    title: "UX/UI and frontend development",
    description: `Creating easy to use and beautiful web applications with memorable UIs and a solid UX is no small project. 
      I’ll help create your next WordPress-theme, or basic applications… working in HTML, CSS, JS and some of the major frameworks, we’ll find the best solution for you.`,
    cta: () => {
      console.log("CTA for card 2");
    },
  },
  {
    id: 3,
    image: "/graphics/bitmap/skills/illustration.png" || placeholder,
    title: "Graphics and illustrations",
    description: `As a creative, I frequently do illustrations and graphics. 
      Taking on any styles or media, I enjoy sketching, digitalized illustrations, creating graphical composition in 2D or 3D, or making branded graphics or logos.`,
    cta: () => {
      console.log("CTA for card 3");
    },
  },
  {
    id: 4,
    image: "/graphics/bitmap/skills/animation.png" || placeholder,
    title: "Animation and video/audio editing",
    description: `I create commercial animations and do video- & audio editing. 
      With knowhow on composition as well as conversion, making a coherent video targeted the proper audience.`,
    cta: () => {
      console.log("CTA for card 4");
    },
  },
];

export default skills;
