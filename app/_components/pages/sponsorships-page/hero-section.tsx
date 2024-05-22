import ImageComponent from "../../image-component";

const HeroSection = () => {
  return (
    <section className="max-w-[1100px] h-[716px] tablet:h-[470px] min-[950px]:h-[550px] desktopSmall:h-[470px] w-full bg-[url('https://ik.imagekit.io/thewrightdesigns/adopt-a-swimmer/images/tr:h-716,q-70/DSC_0160.jpg')] bg-cover bg-no-repeat bg-center relative tablet:bg-none desktopSmall:rounded-b-2xl tablet:overflow-hidden tablet:px-10 desktopSmall:px-0 desktopSmall:mx-auto tablet:grid grid-cols-3 desktopSmall:grid-cols-4 gap-10">
      <div>
        <ImageComponent
          file="DSC_1658.jpg"
          folder="images"
          phoneWidth={10}
          tabletWidth={10}
          desktopWidth={320}
          priority
          cssClasses="hidden rounded-none h-[716px] tablet:h-[470px] min-[950px]:h-[550px] desktopSmall:h-[470px] tablet:block w-full object-cover tablet:rounded-bl-2xl desktopSmall:rounded-none"
        />
      </div>
      <div className="hidden desktopSmall:block">
        <ImageComponent
          file="DSC_0072.jpg"
          folder="images"
          phoneWidth={10}
          tabletWidth={10}
          desktopWidth={320}
          priority
          cssClasses="rounded-none h-[470px] w-full object-cover"
        />
      </div>
      <ImageComponent
        file="DSC_1542.jpg"
        folder="images"
        phoneWidth={10}
        tabletWidth={10}
        desktopWidth={320}
        priority
        cssClasses="hidden rounded-none tablet:block h-[716px] tablet:h-[470px] min-[950px]:h-[550px] desktopSmall:h-[470px] w-full object-cover"
      />
      <div className="bg-beige/90 drop-shadow-default w-full py-10 px-5 absolute bottom-0 desktopSmall:bottom-0 tablet:grid place-items-center tablet:h-full tablet:relative tablet:rounded-br-2xl desktopSmall:rounded-none">
        <h2 className="py-5 border-y-4 border-lightBlue text-center max-w-[937px] desktopSmall:mx-auto desktopSmall:py-6">
          The power is in your hands
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
