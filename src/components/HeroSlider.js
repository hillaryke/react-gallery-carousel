import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

function HeroSlider() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const images = [
      {
         url: 'https://source.unsplash.com/featured/?nature',
         alt: 'Nature image 1',
      },
      {
         url: 'https://source.unsplash.com/featured/?landscape',
         alt: 'Landscape image 1',
      },
      {
         url: 'https://source.unsplash.com/featured/?travel',
         alt: 'Travel image 1',
      },
      {
         url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
         alt: 'Travel image 1',
      },
      {
         url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
         alt: 'Travel image 1',
      },
   ];

   const handleSwipe = (direction) => {
      if (direction === 'left') {
         setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      } else {
         setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      }
   };

   return (
       <div className="relative w-full h-screen">
          <Carousel
              emulateTouch={true}
              autoPlay
              infiniteLoop
              interval={5000}
              swipeable={true}
              transitionTime={1000}
              onSwipe={(direction) => handleSwipe(direction)}
              selectedItem={currentIndex}
              showArrows={false}
              showThumbs={false}
              className="w-full h-screen"
          >
             {images.map((image) => (
                 <div key={image.alt}>
                    <img src={image.url} alt={image.alt} className="w-full h-screen object-cover" />
                 </div>
             ))}
          </Carousel>
          <div
              className="absolute top-0 left-0 z-10 w-1/2 h-full cursor-pointer"
              onClick={() => handleSwipe('right')}
          ></div>
          <div
              className="absolute top-0 right-0 z-10 w-1/2 h-full cursor-pointer"
              onClick={() => handleSwipe('left')}
          ></div>
       </div>
   );
}

export default HeroSlider;
