"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  backgroundColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  secondaryColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  arrowColor?:
    | "blue"
    | "darkBlue"
    | "lightBlue"
    | "orange"
    | "black"
    | "white"
    | "brown";
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: string;
  noArrow?: boolean;
  normalButton?: boolean;
  disabled?: boolean;
}

const Button = ({
  backgroundColor,
  secondaryColor,
  onClick,
  typeSubmit,
  children,
  arrowColor = "black",
  cssClasses,
  url = "#",
  target,
  noArrow,
  normalButton,
  disabled,
}: Props) => {
  const { pending } = useFormStatus();

  if (!normalButton) {
    return (
      <Link
        href={url}
        target={target}
        className={classNames(
          `flex gap-3 items-center justify-center rounded drop-shadow-md uppercase ease-in-out duration-300 ${cssClasses}`,
          {
            "bg-white desktopSmall:hover:px-[44px] desktopSmall:hover:-mx-1 desktopSmall:hover:bg-white/90":
              !backgroundColor,
            "px-10 py-3": !noArrow && !secondaryColor,
            "desktopSmall:hover:px-[44px] desktopSmall:hover:-mx-1":
              backgroundColor,
            "desktopSmall:hover:px-10 desktopSmall:hover:-mx-1": secondaryColor,
            "px-9 py-2": secondaryColor && !noArrow,
            "py-2": noArrow,
            "text-black bg-white": !backgroundColor,
            "text-white": backgroundColor && !secondaryColor,
            "bg-orange desktopSmall:hover:bg-orange/90":
              backgroundColor === "orange",
            "bg-blue desktopSmall:hover:bg-blue/90": backgroundColor === "blue",
            "bg-darkBlue desktopSmall:hover:bg-darkBlue/90":
              backgroundColor === "darkBlue",
            "bg-lightBlue desktopSmall:hover:bg-lightBlue/90":
              backgroundColor === "lightBlue",
            "bg-white border-4 border-orange desktopSmall:hover:bg-orange":
              secondaryColor === "orange",
            "bg-white border-4 border-blue desktopSmall:hover:bg-blue":
              secondaryColor === "blue",
            "bg-white border-4 border-darkBlue desktopSmall:hover:bg-darkBlue":
              secondaryColor === "darkBlue",
            "bg-white border-4 border-lightBlue desktopSmall:hover:bg-lightBlue":
              secondaryColor === "lightBlue",
            "text black": secondaryColor,
          }
        )}
      >
        {children}
        {!noArrow && (
          <div className=" -translate-y-[1.5px]">
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g mask="url(#mask0_5_372)">
                <path
                  d="M2.53247 12.8839V0.116089L13.2468 6.50002L2.53247 12.8839Z"
                  fill={classNames("", {
                    "#1b1b1b": arrowColor === "black",
                    "#fff": arrowColor === "white",
                    "#0082C8": arrowColor === "blue",
                    "#005696": arrowColor === "darkBlue",
                    "#00b5cb": arrowColor === "lightBlue",
                    "#f68428": arrowColor === "orange",
                    "#9C5A36": arrowColor === "brown",
                  })}
                />
              </g>
            </svg>
          </div>
        )}
      </Link>
    );
  } else {
    return (
      <button
        className={classNames(
          `flex gap-3 items-center justify-center rounded drop-shadow-md uppercase ease-in-out duration-300 ${cssClasses}`,
          {
            "bg-white desktopSmall:hover:px-[44px] desktopSmall:hover:-mx-1 desktopSmall:hover:bg-white/90":
              !backgroundColor,
            "px-10 py-3": !noArrow && !secondaryColor,
            "desktopSmall:hover:px-[44px] desktopSmall:hover:-mx-1":
              backgroundColor,
            "desktopSmall:hover:px-10 desktopSmall:hover:-mx-2": secondaryColor,
            "px-9 py-2": secondaryColor && !noArrow,
            "py-2": noArrow,
            "text-black bg-white": !backgroundColor,
            "text-white": backgroundColor && !secondaryColor,
            "bg-orange desktopSmall:hover:bg-orange/90":
              backgroundColor === "orange",
            "bg-blue desktopSmall:hover:bg-blue/90": backgroundColor === "blue",
            "bg-darkBlue desktopSmall:hover:bg-darkBlue/90":
              backgroundColor === "darkBlue",
            "bg-lightBlue desktopSmall:hover:bg-lightBlue/90":
              backgroundColor === "lightBlue",
            "bg-white border-4 border-orange desktopSmall:hover:bg-orange":
              secondaryColor === "orange",
            "bg-white border-4 border-blue desktopSmall:hover:bg-blue":
              secondaryColor === "blue",
            "bg-white border-4 border-darkBlue desktopSmall:hover:bg-darkBlue":
              secondaryColor === "darkBlue",
            "bg-white border-4 border-lightBlue desktopSmall:hover:bg-lightBlue":
              secondaryColor === "lightBlue",
            "text black": secondaryColor,
          }
        )}
        type={typeSubmit ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {pending ? (
          <div className="spinner"></div>
        ) : (
          <>
            {children}
            {!noArrow && (
              <div className=" -translate-y-[1.5px]">
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g mask="url(#mask0_5_372)">
                    <path
                      d="M2.53247 12.8839V0.116089L13.2468 6.50002L2.53247 12.8839Z"
                      fill={classNames("", {
                        "#1b1b1b": arrowColor === "black",
                        "#fff": arrowColor === "white",
                        "#0082C8": arrowColor === "blue",
                        "#005696": arrowColor === "darkBlue",
                        "#00b5cb": arrowColor === "lightBlue",
                        "#f68428": arrowColor === "orange",
                        "#9C5A36": arrowColor === "brown",
                      })}
                    />
                  </g>
                </svg>
              </div>
            )}
          </>
        )}
      </button>
    );
  }
};

export default Button;
