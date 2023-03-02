import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";

import images from "../images";

const HeroSlider = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };

   return (
       <Carousel
           swipeable={true}
           draggable={false}
           showDots={false}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={5000}
           keyBoardControl={true}
           customTransition="all ease-in-out 1"
           transitionDuration={500}
           containerClass="carousel-container"
           removeArrowOnDeviceType={["tablet", "mobile"]}
           responsive={responsive}
           dotListClass="custom-dot-list-style"
       >
             {/* Add your images here */}

             {images.map((image, index) => (
                 <img src={image} alt={image.alt} />
             ))}

       </Carousel>
   );
};

export default HeroSlider;
