const HeroSection = () => {
  return (
    <section className="h-[656px] max-w-[1440px] w-full bg-[url('https://ik.imagekit.io/thewrightdesigns/adopt-a-swimmer/images/tr:h-656,q-70/Capture-7.jpg')] bg-cover bg-no-repeat bg-center relative phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/adopt-a-swimmer/images/tr:h-656,q-70/Capture-7.jpg')] desktopSmall:bg-[url('https://ik.imagekit.io/thewrightdesigns/adopt-a-swimmer/images/tr:w-1440,q-70/Capture-7.jpg')] desktopSmall:h-[787px] desktopSmall:mx-auto">
      <div className="bg-lightBlue/90 w-full py-10 px-5 absolute bottom-0 desktopSmall:bottom-[93px] desktopSmall:py-6">
        <h2 className="py-5 border-y-4 border-orange text-white text-center max-w-[937px] desktopSmall:mx-auto desktopSmall:py-6">
          We are on a mission to save lives and create a love for swimming
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
