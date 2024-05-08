import Link from "next/link";
import Image from "next/image";

import data from "@/app/_data/navigation.json";
import MenuToggle from "./mobile/menu-toggle";

const Header = () => {
  return (
    <header className="mb-20 py-6 h-[96px] border-b-4 border-orange desktop:mb-25">
      <div className="mx-5 h-full flex justify-between items-start desktop:items-end desktop:max-w-[1100px] desktop:mx-auto">
        <Link
          href="/"
          className="desktop:self-start hover:desktop:opacity-90 ease-in-out duration-200 z-10"
        >
          <Image
            src="/adopt-a-swimmer-logo.png"
            alt="Adopt a Swimmer Logo"
            className="drop-shadow-default"
            width={140}
            height={100}
          />
        </Link>
        <MenuToggle />
        <nav className="hidden desktop:block translate-y-3">
          <ul className="flex gap-5">
            {data.map(({ title, url }, index) => (
              <li key={index}>
                <Link
                  className="text-[15px] desktop:hover:text-orange ease-in-out duration-200"
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
