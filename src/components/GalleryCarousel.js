import React, { useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import imagearr from "../images";

const HeroSlider = () => {
   const images = imagearr.map((img) => ({
      src: img,
   }));

   const carouselRef = React.useRef(null);

   const isLeftOrRightScreenClicked = (event) => {
      if (event.clientX < window.innerWidth / 2) {
         return 'left';
      } else {
         return 'right';
      }
   };

   const slideImage = (event) => {
      if (isLeftOrRightScreenClicked(event) === 'left') {
         carouselRef.current.goLeft();
         } else {
         carouselRef.current.goRight();
      }
   }

   return (
       <div className="relative bg-teal-500">
          {/*<div className="absolute flex opacity-90 bg-orange-500 w-full h-1/6 z-[99999] top-0 left-0">*/}
          {/*   <div onClick={() => {console.log(carouselRef.current); console.log("LEFT DIV CLICK")}} className="w-1/2 bg-emerald-900 h-full"></div>*/}
          {/*   <div onClick={() => {carouselRef.current.goRight(); console.log("LEFT DIV CLICK")}} className="w-1/2 bg-blue-800 h-full"></div>*/}
          {/*</div>*/}

          <div className="h-full w-full"
               onTouchStart={slideImage}
               onClick={slideImage}>
             <Carousel
                 ref={carouselRef}
                 isMaximized={true}
                 canAutoPlay={true}
                 autoPlayInterval={5000}
                 isAutoPlaying={true}
                 hasRightButton={false}
                 hasLeftButton={false}
                 hasMediaButton={false}
                 hasSizeButton={false}
                 hasIndexBoard={false}
                 hasDotButtons={false}
                 hasThumbnails={false}
                 objectFit={'cover'}
                 objectFitAtMax={'cover'}
                 images={images} style={{ height: 500, width: 800 }}/>
          </div>
       </div>


   );
};

export default HeroSlider;