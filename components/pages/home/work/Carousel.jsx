import Slider from "react-slick";
import projects from "../../../data/Projects"
import Project from "./Project";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const WorkCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        },
        
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    },
}]
  };
  return (
    <>

    <div className="slider-container">
      <Slider {...settings}>
      {
          projects.map(project => ( 
            <Project
            key={project.id}
            image={project.image}
            name={project.name}
            descrition={project.description}
            />
          ))
        }  
      </Slider>
      </div>
      </>
  );
}

export default WorkCarousel;
