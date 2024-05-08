import classNames from "classnames";
import Image from "next/image";

interface Props {
  backgroundColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  secondaryColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  arrowColor?: "blue" | "darkBlue" | "lightBlue" | "orange" | "black" | "white";
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
  cssClasses?: string;
}

const Button = ({
  backgroundColor,
  secondaryColor,
  onClick,
  typeSubmit,
  children,
  arrowColor = "black",
  cssClasses,
}: Props) => {
  return (
    <button
      className={classNames(
        `flex gap-3 items-center justify-center rounded drop-shadow-md uppercase  ease-in-out duration-300 ${cssClasses}`,
        {
          "bg-white px-10 py-3 hover:px-[44px] hover:-mx-1": !backgroundColor,
          "px-10 py-3 hover:px-[44px] hover:-mx-1": backgroundColor,
          "px-[36px] py-2 hover:px-[40px] hover:-mx-1": secondaryColor,
          "text-black bg-white": !backgroundColor,
          "text-white": backgroundColor && !secondaryColor,
          "bg-orange hover:bg-orange/90": backgroundColor === "orange",
          "bg-blue hover:bg-blue/90": backgroundColor === "blue",
          "bg-darkBlue hover:bg-darkBlue/90": backgroundColor === "darkBlue",
          "bg-lightBlue hover:bg-lightBlue/90": backgroundColor === "lightBlue",
          "bg-white border-4 border-orange hover:bg-orange":
            secondaryColor === "orange",
          "bg-white border-4 border-blue hover:bg-blue":
            secondaryColor === "blue",
          "bg-white border-4 border-darkBlue hover:bg-darkBlue":
            secondaryColor === "darkBlue",
          "bg-white border-4 border-lightBlue hover:bg-lightBlue":
            secondaryColor === "lightBlue",
          "text black": secondaryColor,
        }
      )}
      type={typeSubmit ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
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
                "#fff": arrowColor === "black",
                "#1b1b1b": arrowColor === "white",
                "#0082C8": arrowColor === "blue",
                "#005696": arrowColor === "darkBlue",
                "#00b5cb": arrowColor === "lightBlue",
                "#f68428": arrowColor === "orange",
              })}
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Button;
