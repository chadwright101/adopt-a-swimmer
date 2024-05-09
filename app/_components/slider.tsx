"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import ImageComponent from "./image-component";

import "swiper/css";
import "swiper/css/effect-fade";

interface Props {
  cssClasses?: string;
  data: string[];
}

const Slider = ({ cssClasses, data }: Props) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={16}
        loop={true}
        speed={1500}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className={cssClasses}
      >
        {data &&
          data.map((slide, index) => (
            <SwiperSlide key={index}>
              <ImageComponent
                file={slide}
                folder="images"
                priority={index === 0 ? true : false}
                cssClasses="rounded-none object-cover w-full h-full"
                phoneWidth={900}
                tabletWidth={900}
                desktopWidth={1440}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
