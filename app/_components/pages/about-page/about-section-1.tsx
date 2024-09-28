import Image from "next/image";

import Button from "../../button";
import ImageComponent from "../../image-component";

const AboutSection1 = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <div className="py-15 max-w-[1100px] desktopSmall:mx-auto">
        <div className="grid gap-10 desktopSmall:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-heading mb-10">About</h2>
            <p>
              In 2011, Louise Auersberg founded Adopt a Swimmer, a non-profit
              organisation in Plettenberg Bay, as a way to help children at risk
              and facing economic disadvantages. Louise’s own struggles dealing
              with a learning disability and facing many obstacles inspired her
              to use water as a conduit for healing. For Louise, swimming is a
              powerful metaphor for facing challenges head on and pushing
              through adversity. She realised she could take her love for water
              and helping children and combine them.
            </p>
          </div>
          <ImageComponent
            file="DSC_0026.jpg"
            phoneWidth={425}
            tabletWidth={800}
            desktopWidth={1020}
            cssClasses="w-full h-full object-cover aspect-video desktopSmall:aspect-[2/1]"
          />
        </div>
      </div>
      <div className="py-15 px-5 -mx-5 tablet:px-10 tablet:-mx-10 bg-blue border-y-4 border-orange">
        <h3 className="text-center text-white text-quote max-w-[1100px] desktopSmall:mx-auto">
          When you are in the water, you can let go of your insecurities and
          worries and be free. Who wouldn’t want to share that with children who
          could benefit from more light, love, and confidence in their lives?
        </h3>
      </div>
      <div className="py-15 grid gap-10 max-w-[1100px] desktopSmall:mx-auto desktop:grid-cols-[780px_1fr]">
        <div className="grid gap-10 tablet:grid-cols-2 desktop:hidden">
          <ImageComponent
            file="Capture-8.jpg"
            phoneWidth={425}
            tabletWidth={800}
            desktopWidth={1100}
            cssClasses="w-full h-full aspect-video object-cover"
          />
          <ImageComponent
            file="DSC_1509.jpg"
            phoneWidth={425}
            tabletWidth={800}
            desktopWidth={1100}
            cssClasses="w-full h-full aspect-video object-cover"
          />
        </div>
        <div className="hidden desktop:flex gap-10 rounded-2xl overflow-hidden">
          <Image
            src="https://ik.imagekit.io/thewrightdesigns/tr:w-240,q-70/Capture-8-1.jpg"
            alt="Adopt a Swimmer - Plettenberg Bay"
            width={240}
            height={580}
            className="hidden drop-shadow-default desktopSmall:block"
          />
          <Image
            src="https://ik.imagekit.io/thewrightdesigns/tr:w-240,q-70/Capture-8-2.jpg"
            alt="Adopt a Swimmer - Plettenberg Bay"
            width={240}
            height={580}
            className="hidden drop-shadow-default desktopSmall:block"
          />
          <Image
            src="https://ik.imagekit.io/thewrightdesigns/tr:w-240,q-70/Capture-8-3.jpg"
            alt="Adopt a Swimmer - Plettenberg Bay"
            width={240}
            height={580}
            className="hidden drop-shadow-default desktopSmall:block"
          />
        </div>
        <div>
          <p className="mb-10">
            Adopt a Swimmer (AAS) was born from this dream and desire to
            positively impact the local community. The program launched in 2011
            in Plett with two children. By 2012, Louise was helping 30 children
            to find their confidence. The results are inspiring. The
            character-building and life skills baked into the AAS philosophy can
            quickly be seen through the way young swimmers start working harder,
            improving in their schoolwork, and setting goals. <br /> <br />
            Through the support of volunteers and sponsors, AAS has grown from
            strength to strength ever since, continuing to positively impact the
            lives of every child the program has touched over the years.
          </p>
          <Button
            secondaryColor="orange"
            arrowColor="black"
            url="/sponsorships"
          >
            Sponsorships
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AboutSection1;
