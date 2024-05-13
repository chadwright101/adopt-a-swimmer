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
        "bg-white z-50 mb-20 py-6 h-[96px] border-b-4 border-orange desktopSmall:mb-25 desktopSmall:sticky ease-in-out duration-500",
        {
          "desktopSmall:top-0": !isScrolled,
          "desktopSmall:-top-8": isScrolled,
        }
      )}
    >
      <div className="px-5 h-full flex justify-between items-start desktopSmall:items-end desktopSmall:max-w-[1100px] desktopSmall:mx-auto">
        <Link
          href="/"
          className="desktopSmall:self-start hover:desktopSmall:opacity-90 ease-in-out duration-200 z-10"
        >
          <Image
            src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/adopt-a-swimmer-logo.png"
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
