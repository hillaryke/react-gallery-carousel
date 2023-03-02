import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
   const sliderRef = useRef(null);
   const [sliderSettings, setSliderSettings] = useState({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true // Set right-to-left direction
   });

   useEffect(() => {
      const sliderNode = sliderRef.current.innerSlider.list;

      const handleLeftClick = () => sliderNode.previous();
      const handleRightClick = () => sliderNode.next();
      const handleTouchStart = (e) => {
         const touchStartX = e.touches[0].pageX;

         const handleTouchMove = (e) => {
            const touchEndX = e.touches[0].pageX;
            if (touchStartX - touchEndX > 50) sliderNode.next();
            if (touchStartX - touchEndX < -50) sliderNode.previous();
         }

         const handleTouchEnd = () => {
            sliderNode.list.removeEventListener('touchmove', handleTouchMove);
            sliderNode.list.removeEventListener('touchend', handleTouchEnd);
         }

         sliderNode.list.addEventListener('touchmove', handleTouchMove);
         sliderNode.list.addEventListener('touchend', handleTouchEnd);
      };

      sliderNode.list.addEventListener('mousedown', () => {
         document.addEventListener('mousemove', handleMouseMove);
         document.addEventListener('mouseup', handleMouseUp);
      });

      const handleMouseMove = (e) => {
         if (e.clientX - sliderNode.list.offsetLeft < sliderNode.width / 2) {
            sliderNode.previous();
         } else {
            sliderNode.next();
         }
      };

      const handleMouseUp = () => {
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      }

      sliderNode.list.addEventListener('touchstart', handleTouchStart);
      sliderNode.list.addEventListener('click', (e) => e.stopPropagation());
      sliderNode.list.addEventListener('contextmenu', (e) => e.preventDefault());

      return () => {
         sliderNode.list.removeEventListener('mousedown', () => {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
         });
         sliderNode.list.removeEventListener('touchstart', handleTouchStart);
         sliderNode.list.removeEventListener('click', (e) => e.stopPropagation());
         sliderNode.list.removeEventListener('contextmenu', (e) => e.preventDefault());
      }
   }, []);

   return (
       <div className="relative">
          <Slider {...sliderSettings} ref={sliderRef}>
             <div><img src="img1.jpg" alt=""/></div>
             <div><img src="img2.jpg" alt=""/></div>
             <div><img src="img3.jpg" alt=""/></div>
          </Slider>
       </div>
   );
};

export default HeroSlider;
