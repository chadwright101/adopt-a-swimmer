import Link from "next/link";

import Button from "../../button";
import ImageComponent from "../../image-component";

const TeamSection2 = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <section className="py-15 max-w-[1100px] desktopSmall:mx-auto">
        <h4 className="mb-15">Collaborators</h4>
        <div className="grid gap-y-[60px] tablet:grid-cols-2 tablet:gap-x-10 desktopSmall:grid-cols-3">
          <div className="grid gap-8 place-content-between">
            <div className="grid gap-8">
              <div>
                <h4 className="text-[20px] font-roboto font-bold uppercase mb-5">
                  Media & marketing
                </h4>
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  Roxanne Churchyard
                </h5>
                <h6 className="text-paragraph font-thin font-roboto tracking-wide italic">
                  Carved Media
                </h6>
              </div>
              <p className="-mt-4">
                <ImageComponent
                  file="/collaborators/carved-media.jpg"
                  folder="images"
                  phoneWidth={103}
                  tabletWidth={103}
                  desktopWidth={103}
                  cssClasses="w-[103px] aspect-square float-start mr-4 mb-1 rounded-none"
                />
                Carved Media’s collaboration with Adopt a Swimmer runs deep,
                with our team honoured to entrusted with the responsibility of
                handling AAS’s social media marketing, content creation, and
                photography and editing needs, particularly during the pivotal
                Friday afternoon sessions. Through our lens and words, we strive
                to capture the essence of these sessions, highlighting the
                dedication, perseverance, and joy that radiates from every
                swimmer. Our goal is to not only showcase the incredible work
                being done by Adopt a Swimmer but also to inspire others to join
                in their support.
              </p>
            </div>
            <Button
              secondaryColor="lightBlue"
              arrowColor="black"
              url="https://carvedmedia.com/"
              target="_blank"
              cssClasses="mt-auto"
            >
              View Website
            </Button>
          </div>
          <div className="grid gap-8">
            <div>
              <h4 className="text-[20px] font-roboto font-bold uppercase mb-5">
                Web design & development
              </h4>
              <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                Chad Wright
              </h5>
              <h6 className="text-paragraph font-thin font-roboto tracking-wide italic">
                The Wright Designs
              </h6>
            </div>
            <p className="-mt-4">
              <ImageComponent
                file="/collaborators/the-wright-designs.jpg"
                folder="images"
                phoneWidth={103}
                tabletWidth={103}
                desktopWidth={103}
                cssClasses="w-[103px] aspect-square float-start mr-4 mb-1 rounded-none"
              />
              The Wright Designs is proud to support Adopt a Swimmer&apos;s
              mission by crafting a custom website to elevate their online
              presence. This bespoke solution, designed and developed entirely
              by our team, will serve as a powerful tool to spread awareness
              about their cause and attract potential sponsors. By creating a
              visually appealing and user-friendly website, we hope to empower
              Adopt a Swimmer to reach a wider audience and achieve even greater
              success. With our ongoing maintenance and support services, we
              stand by Adopt a Swimmer every step of the way, ensuring their
              online presence continues to flourish and make a meaningful
              difference in the lives of swimmers in need.
            </p>
            <Button
              secondaryColor="lightBlue"
              arrowColor="black"
              url="https://thewrightdesigns.co.za"
              target="_blank"
            >
              View Website
            </Button>
          </div>
          <div className="grid gap-8 place-content-start tablet:col-span-2 desktopSmall:col-span-1">
            <div>
              <h4 className="text-[20px] font-roboto font-bold uppercase mb-5">
                Copy editor
              </h4>
              <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                Nadine von Moltke
              </h5>
              <h6 className="text-paragraph font-thin font-roboto tracking-wide italic">
                NadineWrites
              </h6>
            </div>
            <p className="-mt-4">
              Nadine loves supporting local South African businesses and causes
              that help, inspire, and strive to build stronger South African
              communities, particularly for our country’s most precious
              resource: our children. Assisting Louise and Adopt a Swimmer
              through strategic web content that shares AAS’s passion and
              purpose has been an honour.
            </p>
          </div>
          <div className="grid gap-[60px] tablet:grid-cols-2 tablet:col-span-2 desktopSmall:grid-cols-3 desktopSmall:col-span-3">
            <div>
              <h4 className="text-[20px] font-roboto font-bold uppercase mb-5">
                Photography
              </h4>
              <div className="grid gap-5">
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  Julia Evan{" "}
                  <span className="font-thin">
                    (
                    <Link
                      href="https://www.dailymaverick.co.za/"
                      target="_blank"
                      className="font-thin text-link desktopSmall:hover:text-orange ease-in-out duration-150"
                      aria-label="Daily Maverick"
                    >
                      Daily Maverick
                    </Link>
                    )
                  </span>
                </h5>
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  <Link
                    href="https://carvedmedia.com/"
                    target="_blank"
                    className="font-regular text-link desktopSmall:hover:text-orange ease-in-out duration-150"
                    aria-label="Carved Media"
                  >
                    Carved Media
                  </Link>
                </h5>
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  Matt Leppan
                </h5>
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  Gustav Schlechter
                </h5>
              </div>
            </div>
            <div>
              <h4 className="text-[20px] font-roboto font-bold uppercase mb-5">
                Videography
              </h4>
              <div className="grid gap-5 desktopSmall:flex justify-between">
                <h5 className="text-paragraph font-regular font-roboto mb-1 tracking-wider">
                  <Link
                    href="https://deliciousbokeh.com/"
                    target="_blank"
                    className="font-regular text-link desktopSmall:hover:text-orange ease-in-out duration-150"
                    aria-label="Delicious Bokeh"
                  >
                    Delicious Bokeh
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-black/25" />
      <article className="py-15 max-w-[1100px] desktopSmall:mx-auto">
        <h4 className="mb-15">Volunteers</h4>
        <div className="grid gap-10 tablet:grid-cols-2 desktopSmall:grid-cols-3">
          <div>
            <h6 className="font-roboto font-regular text-paragraph mb-4">
              Lize van Rooyen
            </h6>
            <p>
              The patience, care and never-ending belief of Louise in each of
              the pupils is something I strive towards. Her ability to
              understand the needs and skill level of each individual, teach
              them how to swim, and foster a love for water is remarkable. There
              have been many moments of joy in the pool. One that I will cherish
              forever was when a new pupil who had never been in a pool before
              climbed into the water fearful and uncertain. Once a noodle was
              fastened around his waist and he realized he was able to float, he
              burst out laughing in disbelief; a laughter of pure enjoyment from
              deep within. His fear faded, and this youngster has made immense
              progress with swimming. It is a genuine privilege to work
              alongside Louise, the legacy of AAS is great and has changed many
              lives.
            </p>
          </div>
          <div>
            <h6 className="font-roboto font-regular text-paragraph mb-4">
              Grace Ash
            </h6>
            <p>
              It’s been nothing short of fulfilling to dedicate my available
              time to such a meaningful cause. As someone who’s always had a
              strong connection to the water, sharing my love for it with the
              brave and passionate kids in the program has been an absolute joy.
              AAS is truly one of a kind, and I feel incredibly blessed to be
              part of it. From witnessing their first strokes to seeing their
              confidence soar, every moment spent with these amazing kids
              reinforces the value of this experience.
            </p>
          </div>
          <div>
            <h6 className="font-roboto font-regular text-paragraph mb-4">
              Arianne Bauer
            </h6>
            <p>
              Joining ASS as a volunteer has been such an amazing journey. To
              see how the children’s relationship with water changes over time
              as they grow more and more confident is life-changing. Whenever I
              think about AAS I feel overwhelmingly blessed to have had the
              opportunity to impact the swimmers’ lives and experience their joy
              in the water.
            </p>
          </div>
        </div>
      </article>
      <hr className="text-black/25" />
      <article className="py-15 max-w-[1100px] desktopSmall:mx-auto">
        <h4 className="mb-15">Memory wall</h4>
        <div className="grid tablet:gap-10 tablet:grid-cols-2 pb-15">
          <figure>
            <ImageComponent
              file="20170513_135156.jpg"
              folder="images"
              phoneWidth={425}
              tabletWidth={425}
              desktopWidth={530}
              cssClasses="h-full w-full aspect-video object-top object-cover"
            />
            <figcaption className="text-center mt-4 font-thin italic">
              In loving memory of{" "}
              <span className="font-regular">Peter Auersperg</span> (middle
              right) who was an original founder of the AAS Program, and{" "}
              <span className="font-regular">Keegan Till</span> (far right) who
              was part of our swimming program.
            </figcaption>
          </figure>
        </div>
      </article>
    </div>
  );
};

export default TeamSection2;
