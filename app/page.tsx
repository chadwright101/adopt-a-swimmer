import MakeASplashSection from "./_components/home-page/make-a-splash-section";
import Slider from "./_components/slider";

export const metadata = {
  title: "Adopt A Swimmer",
  description: "Coming soon...",
};

export default function Home() {
  return (
    <>
      <Slider cssClasses="h-[595px] -mt-20 max-w-[1440px] desktopSmall:mx-auto desktopSmall:-mt-[100px]" />
      <main>
        <MakeASplashSection />
      </main>
    </>
  );
}
