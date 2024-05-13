"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import data from "@/app/_data/navigation.json";
import classNames from "classnames";

const MenuToggle = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <>
      <button
        className="relative px-4 py-5 -m-3 z-50 translate-y-4 ease-in-out duration-300 desktopSmall:hidden"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Open and close navigation menu"
      >
        <div className="grid gap-1.5 -mb-1">
          <div
            className={classNames(
              "w-[26px] h-[3px] rounded ease-in-out duration-[400ms] transform origin-center",
              {
                "rotate-[225deg] translate-x-[0px] translate-y-[4px] bg-white":
                  showMenu,
                "bg-black": !showMenu,
              }
            )}
          ></div>
          <div
            className={classNames(
              "w-[26px] h-[3px] rounded ease-in-out duration-[400ms] transform origin-center",
              {
                "rotate-[135deg] translate-x-[0px] -translate-y-[5px] bg-white":
                  showMenu,
                "bg-black": !showMenu,
              }
            )}
          ></div>
        </div>
      </button>
      <nav
        className={classNames(
          "fixed top-0 left-0 bg-blue w-full h-full ease-in-out duration-300 z-20 desktopSmall:hidden",
          {
            "translate-x-full": !showMenu,
            "translate-x-0": showMenu,
          }
        )}
      >
        <ul className="flex flex-col gap-14 px-8 py-20">
          {data.map(({ title, url }, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${(index + 1) * 55}ms` }}
              className={classNames(`ease-in-out duration-300`, {
                "translate-x-full": !showMenu,
                "translate-x-0": showMenu,
              })}
            >
              <Link className="text-subheading text-white font-thin" href={url}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuToggle;
