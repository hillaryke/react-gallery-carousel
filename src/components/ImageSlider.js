import React, { useState } from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true,
      beforeChange: (current, next) => setCurrentSlide(next),
   };

   const handleTouchStart = (e) => {
   const touchStartX = e.touches[0].clientX;
   document.addEventListener("touchmove", handleTouchMove);
   document.addEventListener("touchend", handleTouchEnd);

   function handleTouchMove(e) {
      const touchCurrentX = e.touches[0].clientX;
      const diff = touchStartX - touchCurrentX;
      if (Math.abs(diff) > 10) {
         diff > 0 ? Slider.slickNext() : Slider.slickPrev();
      }
   }

   function handleTouchEnd() {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
   }
};

const handleMouseDown = (e) => {
   const startX = e.clientX;
   document.addEventListener("mousemove", handleMouseMove);
   document.addEventListener("mouseup", handleMouseUp);

   function handleMouseMove(e) {
      const currentX = e.clientX;
      const diff = startX - currentX;
      if (Math.abs(diff) > 10) {
         diff > 0 ? Slider.slickNext() : Slider.slickPrev();
      }
   }

   function handleMouseUp() {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
   }
};

   return (
       <div className="font-bold">
hello
       </div>
   );
};

export default ImageSlider;
