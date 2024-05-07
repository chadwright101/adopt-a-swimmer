import Image from "next/image";
import Link from "next/link";

import data from "@/app/_data/navigation.json";

const Footer = () => {
  return (
    <footer className="pb-10 mt-15 border-t-4 border-darkBlue desktop:pt-10">
      <div className="grid desktop:max-w-[1100px] desktop:mx-auto desktop:grid-cols-2">
        <div className="relative desktop:hidden">
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
        <ul className="hidden desktop:grid gap-2">
          {data.map(({ title, url }, index) => (
            <li key={index} className="text-[14px]">
              <Link
                href={url}
                className="desktop:hover:text-orange ease-in-out duration-200"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid place-items-center gap-7 -mt-10 phone:-mt-15 min-[600px]:-mt-20 min-[700px]:-mt-[100px] min-[800px]:-mt-[125px] min-[900px]:-mt-[140px] min-[1000px]:-mt-[155px] desktop:mt-0 desktop:place-items-end">
          <Image
            src="/adopt-a-swimmer-logo.png"
            alt="Logo"
            width={125}
            height={85}
            className="w-[100px] phone:w-[125px]"
          />
          <div className="grid place-items-center gap-5">
            <p className="grid place-items-center desktop:place-items-end">
              Designed & developed by:{" "}
              <Link
                href="https://thewrightdesigns.co.za"
                target="_blank"
                className="p-2 -m-2 text-link desktop:hover:text-orange ease-in-out duration-200"
              >
                The Wright Designs
              </Link>
            </p>
            <hr className="w-[50px] tablet:hidden" />
            <p className="grid place-items-center desktop:hidden">
              © Adopt A Swimmer |{" "}
              <Link
                href="https://adoptaswimmer.co.za"
                className="p-2 -m-2 text-link desktop:hover:text-orange ease-in-out duration-200"
              >
                www.adoptaswimmer.co.za
              </Link>
            </p>
          </div>
        </div>
        <p className="hidden text-center col-span-2 desktop:block">
          © Adopt A Swimmer |{" "}
          <Link
            href="https://adoptaswimmer.co.za"
            className="p-2 -m-2 text-link desktop:hover:text-orange ease-in-out duration-200"
          >
            www.adoptaswimmer.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
