import Image from "next/image";
import Link from "next/link";

import data from "@/app/_data/navigation.json";

const Footer = () => {
  return (
    <footer className="pb-10 border-t-4 border-darkBlue desktopSmall:pt-10 desktopSmall:pb-5">
      <div className="grid desktopSmall:gap-5 desktopSmall:max-w-[1100px] desktopSmall:mx-auto desktopSmall:grid-cols-2">
        <div className="relative desktopSmall:hidden">
          <Image
            src="/images/ocean-wave.png"
            alt="Ocean wave"
            width={1140}
            height={400}
          />
          <p className="py-[6px] px-1 bg-white/80 absolute top-4 left-0 text-[12px]">
            © Matt Leppan
          </p>
        </div>
        <ul className="hidden desktopSmall:grid gap-2">
          {data.map(({ title, url }, index) => (
            <li key={index} className="text-[14px]">
              <Link
                href={url}
                className="desktopSmall:hover:text-orange ease-in-out duration-200"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid place-items-center gap-7 -mt-10 phone:-mt-15 min-[600px]:-mt-20 min-[700px]:-mt-[100px] min-[800px]:-mt-[125px] min-[900px]:-mt-[140px] min-[1000px]:-mt-[155px] desktopSmall:mt-0 desktopSmall:place-items-end">
          <Image
            src="/adopt-a-swimmer-logo.png"
            alt="Logo"
            width={125}
            height={85}
            className="w-[100px] phone:w-[125px]"
          />
          <div className="grid place-items-center gap-5">
            <p className="grid place-items-center desktopSmall:place-items-end">
              Designed & developed by:{" "}
              <Link
                href="https://thewrightdesigns.co.za"
                target="_blank"
                className="p-2 -m-2 text-link desktopSmall:hover:text-orange ease-in-out duration-200"
              >
                The Wright Designs
              </Link>
            </p>
            <hr className="w-[50px] tablet:hidden" />
            <p className="grid place-items-center desktopSmall:hidden">
              © Adopt A Swimmer |{" "}
              <Link
                href="https://adoptaswimmer.co.za"
                className="p-2 -m-2 text-link desktopSmall:hover:text-orange ease-in-out duration-200"
              >
                www.adoptaswimmer.co.za
              </Link>
            </p>
          </div>
        </div>
        <p className="hidden text-center col-span-2 desktopSmall:block">
          © Adopt A Swimmer |{" "}
          <Link
            href="https://adoptaswimmer.co.za"
            className="p-2 -m-2 text-link desktopSmall:hover:text-orange ease-in-out duration-200"
          >
            www.adoptaswimmer.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
