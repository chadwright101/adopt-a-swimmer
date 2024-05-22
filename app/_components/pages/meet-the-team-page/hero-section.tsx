import ImageComponent from "../../image-component";

const HeroSection = () => {
  return (
    <section className="max-w-[1100px] w-full desktopSmall:rounded-b-2xl tablet:overflow-hidden tablet:px-10 desktopSmall:px-0 desktopSmall:mx-auto tablet:grid grid-cols-3 gap-10">
      <div className="hidden tablet:block">
        <ImageComponent
          file="DSC_0222.jpg"
          folder="images"
          phoneWidth={10}
          tabletWidth={10}
          desktopWidth={340}
          priority
          cssClasses="rounded-none h-[470px] tablet:h-[400px] desktopSmall:h-[667px] w-full object-cover tablet:rounded-bl-2xl desktopSmall:rounded-none"
        />
      </div>
      <ImageComponent
        file="20220703_134106.jpg"
        folder="images"
        phoneWidth={550}
        tabletWidth={800}
        desktopWidth={910}
        priority
        cssClasses="rounded-none h-[470px] tablet:h-[400px] desktopSmall:h-[667px] w-full object-cover"
      />
      <div className="bg-blue/90 w-full py-10 px-5 tablet:grid place-items-center tablet:h-full tablet:relative tablet:rounded-br-2xl desktopSmall:rounded-none">
        <h2 className="py-5 border-y-4 border-orange text-center text-white max-w-[937px] desktopSmall:mx-auto desktopSmall:py-6">
          Here’s where the magic happens – in and out of the water
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
