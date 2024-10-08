"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import ImageComponent from "../../image-component";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
  data: string[];
}

const Slider = ({ cssClasses, desktop, data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (desktop) {
    return (
      <>
        <Swiper
          onSlideChange={handleSlideChange}
          autoplay={{ delay: 4000 }}
          speed={1000}
          effect="fade"
          modules={[Autoplay, EffectFade, Navigation]}
          className={cssClasses}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <ImageComponent
                file={slide}
                phoneWidth={825}
                tabletWidth={825}
                desktopWidth={1100}
                cssClasses="rounded-none w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
          <button
            className={`swiper-button-prev absolute top-[48%] z-10 left-10 cursor-pointer grid place-items-center p-2 rounded-full bg-white/[80%] hover:bg-white/90 ease-in-out duration-300 border-2 border-lightBlue ${
              currentIndex === 0 ? "opacity-50 cursor-default" : ""
            }`}
            aria-label="Show previous image"
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
              className=" rotate-180 -translate-x-[1px]"
              fill="#00b5cb"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
          <button
            className={`swiper-button-next absolute top-[48%] z-10 right-10 cursor-pointer grid place-items-center p-2 rounded-full bg-white/[80%] hover:bg-white/90 ease-in-out duration-300 border-2 border-lightBlue ${
              currentIndex === data.length - 1
                ? "opacity-50 cursor-default"
                : ""
            }`}
            aria-label="Show next image"
            disabled={currentIndex === data.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
              fill="#00b5cb"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
        </Swiper>
      </>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={16}
        speed={1000}
        modules={[Autoplay, Pagination]}
        className={cssClasses}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <ImageComponent
              file={slide}
              phoneWidth={825}
              tabletWidth={825}
              desktopWidth={1100}
              cssClasses="rounded-none w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default Slider;
