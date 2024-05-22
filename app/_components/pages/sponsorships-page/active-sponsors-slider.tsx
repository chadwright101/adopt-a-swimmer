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
      slidesPerView={2}
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
      speed={1000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
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
                aria-label="Sponsor link"
              >
                <Image
                  src={imgUrl}
                  width={160}
                  height={160}
                  alt={alt}
                  className="w-[120px] min-[380px]:w-[160px] h-auto rounded-none"
                />
              </Link>
            </SwiperSlide>
          </li>
        ))}
        <li>
          <SwiperSlide className="my-auto pb-15">
            <p className="aspect-square w-[160px] flex flex-col justify-center font-caveat text-[28px] text-center bg-white border-2 border-orange rounded-2xl">
              Kate & Alex Fortune
              <span className="font-caveat text-[20px]">(Ireland)</span>
            </p>
          </SwiperSlide>
        </li>
        <li>
          <SwiperSlide className="my-auto pb-15">
            <p className="aspect-square w-[160px] flex flex-col justify-center font-caveat text-[28px] text-center bg-white border-2 border-lightBlue rounded-2xl">
              Susan Davies
              <span className="font-caveat text-[20px]">(Ireland)</span>
            </p>
          </SwiperSlide>
        </li>
      </ul>
    </Swiper>
  );
};

export default ActiveSponsorsSlider;
