"use client";

import classNames from "classnames";

import useScrollPosition from "@/app/_utils/scroll-position";

const ScrollUpButton = () => {
  const scrollPosition = useScrollPosition();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isNearBottom =
    typeof window !== "undefined" &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "fixed desktopSmall:hidden right-8 bg-white/[85%] border-[3px] border-darkBlue rounded-full p-[6px] ease-in-out duration-300 delay-[600ms] z-50 drop-shadow-md",
        {
          "-bottom-20": scrollPosition <= 750 || isNearBottom,
          "bottom-10": scrollPosition > 750 && !isNearBottom,
        }
      )}
      aria-label="Scroll to top of page"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g mask="url(#mask0_646_2444)">
          <path
            d="M7.4 18.4L6 17L12 11L18 17L16.6 18.4L12 13.825L7.4 18.4ZM7.4 12.4L6 11L12 5L18 11L16.6 12.4L12 7.825L7.4 12.4Z"
            fill="#005696"
          />
        </g>
      </svg>
    </button>
  );
};

export default ScrollUpButton;
