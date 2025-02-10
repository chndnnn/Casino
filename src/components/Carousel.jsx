import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

const Carousal = () => {
  let [height, setHeight] = useState();
  useEffect(() => {
    let data = window.innerHeight;
    setHeight(data);
  }, []);

  return (
    <div className="w-full">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        autoPlay={false}
        interval={5000}
        transitionTime={1000}
        stopOnHover={false}
        swipeable={true} // Enable swipe functionality
        emulateTouch={true} // Improve touch experience
        dynamicHeight={false}
      >
        <div className="h-full w-full">
          <img
            src="./Hero slider.png"
            alt="Slide 1"
            className="h-60 md:h-[430px] 2xl:h-[530px] w-full md:object-cover "
          />
          {/* <img src="./Hero slider.png" alt="Slide 1" className="rounded-lg" /> */}
        </div>
        <div className="h-full w-full">
          <img
            src="./Cover10.jpg"
            alt="Slide 2"
            className="h-60 md:h-[430px] 2xl:h-[530px] w-full object-cover "
          />
          {/* <img src="./Hero slider.png" alt="Slide 1" className="rounded-lg" /> */}
        </div>
        <div className="h-full w-full">
          <img
            src="./Cover6.jpg"
            alt="Slide 3"
            className="h-60 md:h-[430px] 2xl:h-[530px] w-full object-cover "
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
