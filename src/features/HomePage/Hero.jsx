import heroOne from "/images/hero-1.png";
import heroTwo from "/images/hero-2.png";
import logo from "/images/logo-no-background.png";

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
            className="relative w-full h-[30vh] md:h-[50vh] object-cover"
          />
          <span className="absolute top-5 right-5">
            <img src={logo} alt="" loading="lazy" className="w-32 md:w-52" />
          </span>
        </SplideSlide>
        <SplideSlide>
          <img
            src={heroTwo}
            alt="Image 2"
            loading="lazy"
            className="w-full h-[30vh] md:h-[50vh] object-cover"
          />
        </SplideSlide>
        <div className="splide__progress mt-[15rem]">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  );
};

export default Hero;
