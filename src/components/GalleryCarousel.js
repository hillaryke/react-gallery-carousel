import React, { useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import imagearr from "../images";

const HeroSlider = () => {
   // useEffect(() => {
   //    play();
   // }, [])

   const images = imagearr.map((img) => ({
      src: img,
   }));

   const carouselRef = React.useRef(null);

   const isLeftOrRightScreenClicked = (event) => {
      if (event.clientX < window.innerWidth / 2) {
         // Left side of screen is clicked
         console.log('Left side of screen clicked');
      } else {
         // Right side of screen is clicked
         console.log('Right side of screen clicked');
      }
   }

   return (
       <div className="relative bg-teal-500">
          {/*<div className="absolute flex opacity-90 bg-orange-500 w-full h-1/6 z-[99999] top-0 left-0">*/}
          {/*   <div onClick={() => {console.log(carouselRef.current); console.log("LEFT DIV CLICK")}} className="w-1/2 bg-emerald-900 h-full"></div>*/}
          {/*   <div onClick={() => {carouselRef.current.goRight(); console.log("LEFT DIV CLICK")}} className="w-1/2 bg-blue-800 h-full"></div>*/}
          {/*</div>*/}
          <button onClick={() => carouselRef.current.goLeft()} className="p-8 hover:cursor-crosshair bg-teal-500">Left</button>

          <div className="h-full w-full" onClick={isLeftOrRightScreenClicked}>
             <Carousel
                 onTap={() => {}}
                 ref={carouselRef}
                 isMaximized={true}
                 canAutoPlay={true}
                 autoPlayInterval={2000}
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
                 images={images} style={{ height: 500, width: 800 }} />
          </div>
          </div>


   );
};

export default HeroSlider;