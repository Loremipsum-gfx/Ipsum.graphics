import Slider from "react-slick";
import ClientLogos from '@/components/data/ClientLogos';
import ReferenceSlot from './Reference';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RefCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 4000,
    autoplay: true,       
    autoplaySpeed: 0, 
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
          ClientLogos.map(ref => ( 
            <ReferenceSlot
            key={ref.id}
            image={ref.image}
            text={ref.text}
            link={ref.link}
            />
          ))
        }  
      </Slider>
      </div>
      </>
  );
}

export default RefCarousel;
