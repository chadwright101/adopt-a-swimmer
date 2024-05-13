import Link from "next/link";
import Image from "next/image";

import data from "@/app/_data/navigation.json";
import MenuToggle from "./mobile/menu-toggle";
import classNames from "classnames";

interface Props {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: Props) => {
  return (
    <header
      className={classNames(
        "bg-white z-50 py-6 h-[96px] border-b-4 border-orange desktopSmall:sticky ease-in-out duration-500",
        {
          "desktopSmall:top-0": !isScrolled,
          "desktopSmall:-top-8": isScrolled,
        }
      )}
    >
      <div className="px-5 h-full flex justify-between items-start desktopSmall:items-end desktopSmall:max-w-[1100px] desktopSmall:mx-auto">
        <Link
          href="/"
          className="desktopSmall:self-start hover:desktopSmall:opacity-90 ease-in-out duration-200 z-10 relative"
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/adopt-a-swimmer-logo-header.png"
            priority
            alt="Adopt a Swimmer Logo"
            className={classNames(
              "drop-shadow-default ease-in-out duration-500",
              {
                "desktopSmall:scale-[45%] desktopSmall:-translate-y-3":
                  isScrolled,
              }
            )}
            width={140}
            height={100}
          />
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            id="curve"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              "absolute -top-[30px] -left-4 z-0 w-[167px] h-auto desktopSmall:ease-in-out ",
              {
                "opacity-0 desktopSmall:duration-150": isScrolled,
                "opacity-100 desktopSmall:delay-200 desktopSmall:duration-500":
                  !isScrolled,
              }
            )}
            role="heading"
            aria-level={1}
          >
            <title>Adopt A Swimmer</title>
            <defs>
              <path
                id="myCurvePath"
                d="M100,150 a75,49 0 1,1 0,-98 a75,49 0 1,1 0,98"
              />
            </defs>
            <ellipse cx="100" cy="105" rx="75" ry="49" fill="transparent" />
            <text fill="#ffa500" dy="0" textAnchor="middle">
              <textPath
                href="#myCurvePath"
                startOffset="50%"
                className="font-reenieBeanie text-[29.25px]"
              >
                Adopt A Swimmer
              </textPath>
            </text>
          </svg>
          <h2
            className={classNames(
              "font-roboto uppercase font-bold text-white absolute desktopSmall:ease-in-out desktopSmall:duration-500",
              {
                "text-[2.25px] bottom-[40px] left-[53.5px]": isScrolled,
                "text-[7.65px] bottom-[1px] left-[29.5px]": !isScrolled,
              }
            )}
          >
            Plettenberg Bay
          </h2>
        </Link>
        <MenuToggle />
        <nav className="hidden desktopSmall:block translate-y-3">
          <ul className="flex gap-5">
            {data.map(({ title, url }, index) => (
              <li key={index}>
                <Link
                  className="text-[15px] desktopSmall:hover:text-orange ease-in-out duration-200 font-thin"
                  href={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
