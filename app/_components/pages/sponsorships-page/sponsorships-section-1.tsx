import Button from "../../button";
import ImageComponent from "../../image-component";

const SponsorshipsSection1 = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <div className="pt-15 pb-10 desktopSmall:pb-5 max-w-[1100px] desktopSmall:mx-auto">
        <div className="grid desktopSmall:grid-cols-2 gap-10">
          <div className="flex flex-col gap-10 row-span-2">
            <h2 className="text-heading">Sponsorships</h2>
            <p>
              Every Adopt a Swimmer (AAS) program aims to teach swimming lessons
              and water safety to 36 children at risk and 14 shark spotters in
              our local community. It takes between 12 to 18 months for children
              to learn these like skills, depending on the student’s development
              and progress.
              <br /> <br />
              The Shark Spotters are included in our programme, and there are
              many children on the waiting list from outlying areas and from
              Born in Africa. These are all children we would love to support.
            </p>
            <div className="grid">
              <p>
                Our programme is age–appropriate and includes the following over
                and above learning to swim:
              </p>
              <ul className="list-disc list-outside ml-10">
                <li>A visit to the NSRI Station</li>
                <li>
                  An educational trip out to sea sponsored by Ocean Safaris
                </li>
                <li>Lessons at the lagoon and central beach</li>
                <li>
                  Collaboration with Plett Tourism, Shark Spotters and The Black
                  Mermaid Foundation
                </li>
              </ul>
              <Button
                backgroundColor="orange"
                arrowColor="white"
                cssClasses="mt-10 desktopSmall:place-self-start"
                url="/contact"
              >
                Become a sponsor
              </Button>
            </div>
          </div>
          <div className="grid gap-10 tablet:grid-cols-2 desktopSmall:grid-cols-1 desktopSmall:grid-rows-[250px_250px]">
            <ImageComponent
              file="DSC_0048.jpg"
              phoneWidth={425}
              tabletWidth={800}
              desktopWidth={530}
              cssClasses="w-full h-full object-cover aspect-video desktopSmall:aspect-auto"
            />
            <ImageComponent
              file="DSC_1494.jpg"
              phoneWidth={425}
              tabletWidth={800}
              desktopWidth={530}
              cssClasses=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="py-15 px-5 -mx-5 tablet:px-10 tablet:-mx-10 bg-lightBlue border-y-4 border-beige">
        <blockquote className="relative grid gap-4 z-10 max-w-[1100px] mx-auto">
          <p className="text-white text-center">
            “I am only one, but still I am one. I cannot do everything. But
            still, I can do something; And because I cannot do everything, I
            will not refuse to do the something I can do.”
          </p>
          <footer className="text-white text-center">— Helen Keller</footer>
        </blockquote>
      </div>
    </main>
  );
};

export default SponsorshipsSection1;
