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

   return (
       <div>
          <button onClick={() => carouselRef.current.goLeft()} className="p-8 hover:cursor-crosshair bg-teal-500">Left</button>
          <Carousel
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

   );
};

export default HeroSlider;