"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import data from "@/app/_data/general-data.json";

import "swiper/css";
import "swiper/css/pagination";

const {
  sponsorshipsPage: { activeSponsors },
} = data;

const ActiveSponsorsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        425: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 2,
        },
      }}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: false }}
      modules={[Autoplay, Pagination]}
    >
      <ul>
        {activeSponsors.map(({ imgUrl, alt, link }, index) => (
          <li key={index}>
            <SwiperSlide className="pb-15 my-auto">
              <Link
                href={link}
                target="_blank"
                className="hover:desktopSmall:opacity-90 ease-in-out duration-150"
              >
                <Image
                  src={imgUrl}
                  width={160}
                  height={160}
                  alt={alt}
                  className="w-[160px] h-auto rounded-none"
                />
              </Link>
            </SwiperSlide>
          </li>
        ))}
      </ul>
    </Swiper>
  );
};

export default ActiveSponsorsSlider;
