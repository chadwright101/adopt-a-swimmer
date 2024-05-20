import Image from "next/image";
import ImageComponent from "../../image-component";

const AboutSection2 = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <article className="bg-darkBlue py-15 px-5 -mx-5 relative max-w-[1440px] tablet:px-10 tablet:-mx-10 desktopSmall:mx-auto">
        <Image
          src="/graphics/brush-stroke-10.svg"
          alt="Brush stroke graphic"
          className="absolute h-[50px] tablet:h-[60px] desktopSmall:h-auto object-cover top-0 left-0"
          width={1440}
          height={70}
        />
        <blockquote className="relative grid gap-4 z-10">
          <p className="text-white text-center">
            “Education is the most powerful weapon which you can use to change
            the world.”
          </p>
          <footer className="text-white text-center">— Nelson Mandela</footer>
        </blockquote>
        <Image
          src="/graphics/brush-stroke-9.svg"
          alt="Brush stroke graphic"
          className="absolute h-[50px] tablet:h-[60px] desktopSmall:h-auto object-cover bottom-0 left-0"
          width={1440}
          height={70}
        />
      </article>
      <section>
        <ul className="flex flex-wrap py-15 justify-center gap-[60px] max-w-[1100px] mx-auto desktopSmall:gap-10">
          <li className="max-w-[340px]">
            <Image
              src="/icons/child.svg"
              alt="Adult and child icon"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <p className="text-center">
              A welcoming and inclusive environment where children can learn and
              grow together.
            </p>
          </li>
          <li className="max-w-[340px]">
            <Image
              src="/icons/lifebuoy.svg"
              alt="Lifebuoy icon"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <p className="text-center">
              Increase water safety awareness and drowning prevention.
            </p>
          </li>
          <li className="max-w-[340px]">
            <Image
              src="/icons/river.svg"
              alt="River icon"
              width={100}
              height={100}
              className="mx-auto mb-5"
            />
            <p className="text-center">
              Children learn how to recognise and avoid dangerous situations
              both in and around the water.
            </p>
          </li>
        </ul>
        <div className="bg-brown py-15 -mx-5 px-5 tablet:-mx-10 tablet:px-10">
          <div className="max-w-[1100px] mx-auto desktopSmall:grid grid-cols-[1fr_280px] gap-10">
            <div>
              <p className="text-white">
                All participating children learn free style stroke, survival
                sculling, retrieving objects in 1.8m of water, how to safely
                enter and exit a pool, lagoon and sea, and floating and swimming
                in deep water.
                <br />
                <br />
                Throughout the 12- to 18-month program, swimming lessons are
                accompanied with other life skills to give children greater
                confidence and a sense of power.
                <br />
                <br />
                When we talk about community, we mean it. The program brings so
                much joy, everyone wants to be involved. This means that during
                the program, children also enjoy:
              </p>
              <ul className=" list-disc list-outside ml-10">
                <li className="text-white">
                  an outing to Plett’s NSRI Station
                </li>
                <li className="text-white text-left">
                  snorkelling with The Black Mermaid foundation during the Plett
                  Ocean Festival
                </li>
                <li className="text-white text-left">
                  beach clean ups with Cape Nature
                </li>
                <li className="text-white text-left">
                  a sea trip with Ocean Safaris
                </li>
                <li className="text-white text-left">
                  lessons in the local lagoon
                </li>
                <li className="text-white text-left">
                  a breath holding workshop with world-renowned founder of Ocean
                  Child, John McCarthy
                </li>
                <li className="text-white text-left">
                  an environmental education workshop with Shark Spotters
                </li>
              </ul>
            </div>
            <ImageComponent
              file="Frame%2057.jpg"
              folder="images"
              phoneWidth={10}
              tabletWidth={10}
              desktopWidth={280}
              cssClasses="hidden desktopSmall:block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="max-w-[1100px] h-[730px] relative -mx-5 tablet:-mx-10 desktopSmall:rounded-2xl overflow-hidden desktopSmall:mx-auto desktopSmall:my-15">
        <ImageComponent
          file="IMG-20230719-WA0060.jpg"
          folder="images"
          phoneWidth={1000}
          tabletWidth={1000}
          desktopWidth={1100}
          cssClasses="h-full w-full object-cover rounded-none"
        />
        <blockquote className="flex flex-col w-full gap-4 absolute left-0 bottom-0 py-10 bg-blue/90 px-5 tablet:px-10 desktopSmall:w-[280px] desktopSmall:h-full desktopSmall:justify-center">
          <p className="text-white text-center desktopSmall:text-[40px]">
            “The sea, once it casts its spell, holds one in its net of wonder
            forever.”
          </p>
          <footer className="text-white text-center desktopSmall:text-[40px]">
            — Jacques Cousteau
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutSection2;
