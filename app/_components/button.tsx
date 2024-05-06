import classNames from "classnames";
import Image from "next/image";

interface Props {
  backgroundColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  secondaryColor?: "blue" | "darkBlue" | "lightBlue" | "orange";
  onClick?: () => void;
  typeSubmit?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  backgroundColor,
  secondaryColor,
  onClick,
  typeSubmit,
  children,
}: Props) => {
  return (
    <button
      className={classNames(
        "flex gap-3 items-center justify-center rounded drop-shadow-md uppercase hover:px-10 hover:-mx-1 ease-in-out duration-300",
        {
          "px-9 py-4": backgroundColor,
          "px-8 py-3": !backgroundColor,
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
      {backgroundColor ? (
        <Image
          src="/icons/arrow_right-white.svg"
          alt="Arrow right"
          width={15}
          height={13}
          className="-translate-y-[1.5px]"
        />
      ) : (
        <Image
          src="/icons/arrow_right-black.svg"
          alt="Arrow right"
          width={15}
          height={13}
          className="-translate-y-[1.5px]"
        />
      )}
    </button>
  );
};

export default Button;
