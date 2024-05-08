import Image from "next/image";
import Button from "../button";
import ImageComponent from "../image-component";

const MakeASplashSection = () => {
  return (
    <main className="py-15 bg-lightBlue relative desktopSmall:max-w-[1440px] desktopSmall:px-10 desktop:mx-auto">
      <Image
        src="/graphics/brush-stroke-1.svg"
        alt="Brush stroke graphic"
        className="hidden desktopSmall:block absolute top-0 left-0 w-full max-w-[1440px]"
        width={1738}
        height={294}
      />
      <div className="desktopSmall:grid grid-cols-2 gap-10 max-w-[1100px] desktopSmall:mx-auto">
        <div className="bg-orange aspect-square z-10 w-full min-[600px]:h-[400px] tablet:h-[600px] tablet:p-8 rounded-tl-full rounded-bl-full p-5 ml-auto desktopSmall:p-0 desktopSmall:bg-none desktopSmall:rounded-none desktopSmall:order-2 desktopSmall:aspect-auto desktopSmall:h-full">
          <ImageComponent
            file="/images/DSC_1507.jpg"
            phoneWidth={400}
            tabletWidth={800}
            desktopWidth={800}
            folder="images"
            cssClasses="object-cover w-full h-full rounded-t-full rounded-bl-full desktopSmall:rounded-2xl"
          />
        </div>
        <div className="px-5 -mt-[55px] z-10 min-[600px]:mt-10 desktopSmall:px-0 desktopSmall:mt-0">
          <h2 className=" text-heading text-white">Ready to make a splash?</h2>
          <div className="grid gap-4 my-10">
            <p className="text-white">
              It’s what we love to do and we’re hoping you join us. At Adopt a
              Swimmer, we believe that everyone has the power to make a
              difference, and we do it through one of our greatest loves and
              life’s most vital skills – swimming!
            </p>
            <p className="text-white">
              Being able to swim saves lives, prevents accidents, and gives joy.
              Swimming together creates healthy, active communities that love
              each other, the water and nature.
            </p>
            <p className="text-white">
              Through the support of our sponsors and passionate team-members
              (and that could include you…), AAS has been giving our children a
              lifesaving skill and boosting their confidence since 2011.
            </p>
          </div>
          <Button
            arrowColor="lightBlue"
            cssClasses="w-full desktopSmall:w-auto"
          >
            View More
          </Button>
        </div>
      </div>
      <Image
        src="/graphics/brush-stroke-2.svg"
        alt="Brush stroke graphic"
        className="hidden desktopSmall:block absolute bottom-0 left-0 w-full max-w-[1440px]"
        width={1738}
        height={294}
      />
    </main>
  );
};

export default MakeASplashSection;
