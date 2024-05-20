import CardSection from "@/app/_components/pages/home-page/card-section";
import HeroSection from "./_components/pages/home-page/hero-section";
import MakeASplashSection from "./_components/pages/home-page/make-a-splash-section";
import QuoteSection from "./_components/pages/home-page/quote-section";
import ImageSlider from "./_components/pages/home-page/image-slider";

import data from "@/app/_data/general-data.json";
import Image from "next/image";
import TestimonialsSection from "./_components/pages/home-page/testimonials-section";
import ContactSection from "./_components/pages/home-page/contact-section";

export const metadata = {
  title: "Adopt A Swimmer",
  description: "Coming soon...",
};

export default function Home() {
  const {
    homePage: { imageSlides },
  } = data;

  return (
    <>
      <HeroSection cssClasses="h-[595px] w-full object-cover max-w-[1440px] desktopSmall:h-[647px] desktopSmall:mx-auto" />
      <MakeASplashSection />
      <QuoteSection />
      <CardSection />
      <div className="relative z-0 max-w-[1440px] mx-auto overflow-hidden pb-20 desktopSmall:pb-15">
        <Image
          src="/graphics/brush-stroke-7.svg"
          alt="Brush stroke graphic"
          width={952}
          height={2258}
          className="hidden desktopSmall:block absolute top-0 left-0 -z-10 h-full object-cover"
        />
        <Image
          src="/graphics/brush-stroke-8.svg"
          alt="Brush stroke graphic"
          width={500}
          height={2000}
          className="desktopSmall:hidden -z-10 absolute -bottom-20 -left-8 h-[2000px] phone:h-[4000px] phone:left-0 tablet:h-[6000px] w-full object-cover"
        />
        <div className="h-[550px] tablet:h-[650px] desktopSmall:hidden">
          <ImageSlider data={imageSlides} cssClasses="h-full w-full" />
        </div>
        <div className="hidden desktopSmall:block max-w-[1100px] mx-auto h-[650px] pt-15">
          <ImageSlider
            desktop
            data={imageSlides}
            cssClasses="h-full w-full rounded-2xl"
          />
        </div>
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
