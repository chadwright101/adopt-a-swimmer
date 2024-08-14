import ImageComponent from "../../image-component";
import Button from "../../button";
import Link from "next/link";

const AboutSection3 = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <section className="py-15 max-w-[1100px] desktopSmall:mx-auto desktopSmall:pt-0">
        <div className="grid gap-10 tablet:grid-cols-2">
          <h3 className="tablet:col-span-2">How AAS programs work</h3>
          <p className="tablet:col-span-2 desktopSmall:col-auto">
            AAS has two qualified instructors and 8 volunteers (six of which are
            junior lifesavers and one senior lifesaver). We have secured the use
            of the pool at the Health and Fitness Centre in Piesang Valley and a
            private heated outdoor pool for winter months.
            <br />
            <br />
            Swim caps are donated by Ocean Safaris, and towels and swimming
            costumes are donated by the community when needed, so participating
            children do not need to supply their own.
            <br />
            <br />
            Periodic evaluations are conducted and recorded to track the
            progress of the participants. This data is used to report on
            outcomes and results to stakeholders and donors. We are a
            results-orientated organisation.
          </p>
          <div className="p-10 bg-lightBlue rounded-2xl drop-shadow-default tablet:grid place-items-center desktopSmall:order-3 desktopSmall:-mx-[170px] desktopSmall:col-span-2 desktopSmall:rounded-none desktopSmall:drop-shadow-none">
            <p className=" text-white text-[18px] font-bold max-w-[1100px] desktopSmall:mx-auto desktopSmall:text-center desktopSmall:text-[20px]">
              Our goal is to save lives, improve lives, and give our children a
              love of swimming and slaying goals. We can’t manage (and achieve)
              what we can’t measure.
            </p>
          </div>
          <div className="w-full h-full">
            <ImageComponent
              file="DSC_1464.jpg"
              folder="images"
              phoneWidth={425}
              tabletWidth={800}
              desktopWidth={530}
              cssClasses="aspect-video object-cover h-full w-full"
            />
          </div>
        </div>
        <hr className="my-10 text-black/25 desktopSmall:hidden" />
        <div className="desktopSmall:grid gap-10 grid-cols-2 desktopSmall:mt-15">
          <h3 className="mb-10 desktopSmall:col-span-2 desktopSmall:mb-0">
            Why we need partners and sponsors
          </h3>
          <div className="grid gap-10 tablet:grid-cols-2 desktopSmall:grid-cols-1">
            <div className="grid gap-10">
              <div>
                <p>
                  We have all the love, passion, skills, and experience in the
                  world – but we can’t do this alone. We need equally passionate
                  partners and sponsors who can see how much good we can achieve
                  in these communities together.
                  <br />
                  <br />
                  Through partnerships with local government agencies and
                  corporate donors, AAS is building a sense of ownership and
                  investment in our program, which includes our own swimming
                  pool for our local community. Our children are our greatest
                  advocates. They share their experiences with their
                  communities. The joy of our children is infectious and the
                  fact that we are teaching underprivileged children the life
                  skill of swimming is inspiring.
                  <br />
                  <br />
                  Sponsorship investments help us to:
                </p>
                <ul className="list-disc list-outside ml-10">
                  <li className="text-left">
                    outline the necessary steps and stages to ensure the
                    successful implementation of our project plan
                  </li>
                  <li className="text-left">monitor the program</li>
                  <li className="text-left">
                    achieve our goals of promoting wellbeing while empowering
                    children with an essential life skill
                  </li>
                </ul>
              </div>
              <Button
                secondaryColor="lightBlue"
                arrowColor="black"
                cssClasses="desktopSmall:place-self-start hover:desktopSmall:-mx-2"
                url="/sponsorships"
              >
                Become a Sponsor
              </Button>
            </div>
            <ImageComponent
              file="IMG-20231119-WA0007.jpg"
              folder="images"
              phoneWidth={425}
              tabletWidth={800}
              desktopWidth={800}
              cssClasses=" aspect-video h-full w-full object-cover desktopSmall:hidden"
            />
          </div>
          <div className="hidden desktopSmall:grid gap-10 max-w-[530px] aspect-square rounded-2xl overflow-hidden">
            <ImageComponent
              file="Capture-10-2.jpg"
              folder="images"
              phoneWidth={10}
              tabletWidth={10}
              desktopWidth={530}
              cssClasses="h-full w-full object-cover rounded-none"
            />
            <ImageComponent
              file="Capture-10-3.jpg"
              folder="images"
              phoneWidth={10}
              tabletWidth={10}
              desktopWidth={530}
              cssClasses="h-full w-full object-cover rounded-none"
            />
            <ImageComponent
              file="Capture-10-4.jpg"
              folder="images"
              phoneWidth={10}
              tabletWidth={10}
              desktopWidth={530}
              cssClasses="h-full w-full object-cover rounded-none"
            />
          </div>
        </div>
        <hr className="my-10 text-black/25" />
        <article id="documentation">
          <h4 className="mb-10">Documentation</h4>
          <ul className=" list-disc list-outside ml-10 grid gap-5 desktopSmall:gap-2">
            <li>
              <Link
                href="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/documents/Adopt-a-swimmer-ngo-npo.jpg"
                target="_blank"
                className="font-thin text-link hover:desktopSmall:text-orange ease-in-out duration-150"
                aria-label="Certificate of Registration NPO"
              >
                Certificate of Registration NPO
              </Link>
            </li>
            <li>
              <Link
                href="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/adopt-a-swimmer/documents/sasfin-3rd-term-report-no-6.pdf"
                target="_blank"
                className="font-thin text-link hover:desktopSmall:text-orange ease-in-out duration-150"
                aria-label="Sasfin 3rd term report on AAS"
              >
                Sasfin 3rd term report on AAS
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default AboutSection3;
