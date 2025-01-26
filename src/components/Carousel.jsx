import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <div className="w-full">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        stopOnHover={false}
        swipeable={true} // Enable swipe functionality
        emulateTouch={true} // Improve touch experience
        dynamicHeight={false}
      >
        <div className="h-full w-full">
          <img
            src="./Cover.jpg"
            alt="Slide 1"
            className="h-60 w-full object-cover rounded-lg"
          />
        </div>
        <div className="h-full w-full">
          <img
            src="./Cover10.jpg"
            alt="Slide 2"
            className="h-60 w-full object-cover rounded-lg"
          />
        </div>
        <div className="h-full w-full">
          <img
            src="./Cover6.jpg"
            alt="Slide 3"
            className="h-60 w-full object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
