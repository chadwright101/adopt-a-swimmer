import CardSection from "@/app/_components/home-page/card-section";
import HeroSection from "./_components/home-page/hero-section";
import MakeASplashSection from "./_components/home-page/make-a-splash-section";
import QuoteSection from "./_components/home-page/quote-section";

export const metadata = {
  title: "Adopt A Swimmer",
  description: "Coming soon...",
};

export default function Home() {
  return (
    <>
      <HeroSection cssClasses="h-[595px] w-full object-cover -mt-20 max-w-[1440px] desktopSmall:h-[647px] desktopSmall:mx-auto desktopSmall:-mt-[100px]" />
      <MakeASplashSection />
      <QuoteSection />
      <CardSection />
    </>
  );
}
