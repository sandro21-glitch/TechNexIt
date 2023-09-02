import heroOne from "/images/hero-1.png";
import heroTwo from "/images/hero-2.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

const Hero = () => {
  return (
    <div className="pb-10">
      <Splide
        options={{
          arrows: false,
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          resetProgress: true,
          rewind: true,
        }}
      >
        <SplideSlide>
          <img
            src={heroOne}
            alt="Image 1"
            className="w-full h-auto max-h-[50vh] object-cover"
          />
        </SplideSlide>

        <SplideSlide>
          <img
            src={heroTwo}
            alt="Image 2"
            className="w-full h-auto max-h-[50vh] object-cover"
          />
        </SplideSlide>
        <div className="splide__progress mt-[15rem] lg:mt-[30rem]">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  );
};

export default Hero;
