import Image from "next/image";
import ImageComponent from "../../image-component";

const QuoteSection = () => {
  return (
    <article className="bg-darkBlue py-15 px-5 relative max-w-[1440px] tablet:grid grid-cols-2 place-items-center gap-5 desktopSmall:block desktopSmall:mx-auto">
      <div className="relative w-full aspect-[1.5/2] mb-10 z-10 tablet:-mb-4 desktopSmall:m-0 desktopSmall:hidden">
        <ImageComponent
          file="/DSC_1549.jpg"
          phoneWidth={400}
          tabletWidth={750}
          desktopWidth={427}
          folder="images"
          cssClasses="w-full h-full object-cover"
        />
      </div>
      <blockquote className="relative grid gap-4 z-10">
        <p className="text-white text-center tablet:text-left desktopSmall:text-center">
          “The only difference between try and triumph is a little umph.”
        </p>
        <footer className="text-white text-center tablet:text-left desktopSmall:text-center">
          — Anonymous
        </footer>
      </blockquote>
      <Image
        src="/graphics/brush-stroke-3.svg"
        alt="Brush stroke graphic"
        className="tablet:hidden absolute h-full top-0 left-0"
        width={1196}
        height={324}
      />
    </article>
  );
};

export default QuoteSection;
