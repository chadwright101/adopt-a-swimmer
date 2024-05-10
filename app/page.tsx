import CardSection from "@/app/_components/home-page/card-section";
import HeroSection from "./_components/home-page/hero-section";
import MakeASplashSection from "./_components/home-page/make-a-splash-section";
import QuoteSection from "./_components/home-page/quote-section";
import ImageSlider from "./_components/home-page/image-slider";

import data from "@/app/_data/general-data.json";
import Image from "next/image";
import TestimonialsSection from "./_components/home-page/testimonials-section";

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
      <HeroSection cssClasses="h-[595px] w-full object-cover -mt-20 max-w-[1440px] desktopSmall:h-[647px] desktopSmall:mx-auto desktopSmall:-mt-[100px]" />
      <MakeASplashSection />
      <QuoteSection />
      <CardSection />
      <div className="relative max-w-[1440px] mx-auto overflow-hidden pb-20 desktopSmall:pb-15">
        <Image
          src="/graphics/brush-stroke-7.svg"
          alt="Brush stroke graphic"
          width={952}
          height={1942}
          className="hidden desktopSmall:block absolute top-0 left-0"
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
      </div>
    </>
  );
}
