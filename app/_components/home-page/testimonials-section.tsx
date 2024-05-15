"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import data from "@/app/_data/general-data.json";

interface Props {
  cssClasses?: string;
}

const TestimonialsSection = ({ cssClasses }: Props) => {
  const {
    homePage: { testimonials },
  } = data;

  const [showFullQuote, setShowFullQuote] = useState<Array<boolean>>(
    new Array(testimonials.length).fill(false)
  );

  const [windowWidth, setWindowWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      setShowFullQuote(
        new Array(testimonials.length).fill(window.innerWidth >= 1100)
      );

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [testimonials.length]);

  const toggleFullQuote = () => {
    setShowFullQuote(new Array(testimonials.length).fill(true));

    const element = document.getElementById("testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article
      id="testimonials"
      className="py-15 bg-lightBlue px-5 max-w-[1100px] desktopSmall:rounded-2xl m-auto desktopSmall:px-10 desktopSmall:mt-15"
    >
      <div className="py-10 border-y-4 border-white/80">
        <h3 className="text-center text-white mb-15 desktopSmall:mb-10">
          Testimonials
        </h3>
        <Swiper
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 10000,
          }}
          spaceBetween={16}
          speed={750}
          modules={[Autoplay, Pagination, Navigation]}
          className={cssClasses}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map(({ quote, name }, index) => (
            <SwiperSlide key={index} className="pb-15 desktopSmall:pb-10">
              <blockquote className="text-paragraph text-center grid gap-6">
                <p className="text-paragraph font-roboto text-white text-center">
                  {showFullQuote[index] || windowWidth >= 1100
                    ? quote
                    : quote.length > 300
                    ? quote.substring(0, 200) + "..."
                    : quote}{" "}
                  {quote.length > 300 &&
                    !showFullQuote[index] &&
                    windowWidth < 1100 && (
                      <button
                        onClick={toggleFullQuote}
                        className="text-link italic font-thin p-2 -m-2"
                      >
                        Read more
                      </button>
                    )}
                </p>
                <cite className="text-white not-italic">{name}</cite>
              </blockquote>
            </SwiperSlide>
          ))}
          <button
            className={`swiper-button-prev hidden desktopSmall:grid absolute top-[75%] z-10 left-10 cursor-pointer place-items-center p-2 rounded-full bg-white/[80%] hover:bg-white/90 ease-in-out duration-300 border-2 border-lightBlue ${
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
            className={`swiper-button-next hidden desktopSmall:grid absolute top-[75%] z-10 right-10 cursor-pointer place-items-center p-2 rounded-full bg-white/[80%] hover:bg-white/90 ease-in-out duration-300 border-2 border-lightBlue ${
              currentIndex === testimonials.length - 1
                ? "opacity-50 cursor-default"
                : ""
            }`}
            aria-label="Show next image"
            disabled={currentIndex === testimonials.length - 1}
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
      </div>
    </article>
  );
};

export default TestimonialsSection;
