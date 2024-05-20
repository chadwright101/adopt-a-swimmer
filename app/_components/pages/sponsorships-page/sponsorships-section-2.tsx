import Button from "../../button";
import ImageComponent from "../../image-component";
import ActiveSponsorsSlider from "./active-sponsors-slider";

const SponsorshipsSection2 = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <div className="py-15 max-w-[1100px] desktopSmall:mx-auto desktopSmall:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <div className="mb-10 desktopSmall:mb-0 desktopSmall:order-last">
            <h3 className="mb-10">Active Sponsors</h3>
            <ActiveSponsorsSlider />
          </div>
          <div className="tablet:grid grid-cols-[1fr_2.5fr] desktopSmall:grid-cols-[164px_1fr] desktopSmall:mb-10">
            <ImageComponent
              file="DSC_0075.jpg"
              folder="images"
              phoneWidth={425}
              tabletWidth={759}
              desktopWidth={728}
              cssClasses=" aspect-[3/4] w-full tablet:aspect-auto object-cover rounded-b-none tablet:rounded-r-2xl tablet:rounded-l-none tablet:h-[700px] desktopSmall:h-[563px]"
            />
            <div className="bg-darkBlue grid gap-5 px-5 py-10 rounded-b-2xl tablet:order-first tablet:rounded-r-none tablet:rounded-l-2xl tablet:flex flex-col tablet:justify-center">
              <p className="text-center text-white text-[20px]">
                The cost of sponsoring a student is{" "}
                <span className="font-semiBold text-white text-[20px]">
                  R7000.00 per year
                </span>
                .
              </p>
              <hr className="text-white/25" />
              <p className="text-center text-white text-[20px] italic">
                A breakdown of funding is available from our accountants.
              </p>
            </div>
          </div>
        </div>
        <article className="pt-15 grid gap-10 desktopSmall:pt-0">
          <h3>This funding covers:</h3>
          <p>
            <span className="font-semiBold">Coaching staff support:</span> A
            significant portion of the funds is dedicated to compensating our
            qualified coaching staff. These individuals play a pivotal role in
            teaching, coaching, and guiding the students through their swimming
            journey. It is essential to note that our coaches are highly
            qualified and undergo annual continued professional development to
            stay informed about the latest techniques and technologies in
            swimming instruction.
          </p>
          <p>
            <span className="font-semiBold">Transportation assistance:</span>{" "}
            Recognising the unique challenges faced by underprivileged children,
            we understand the importance of providing reliable transportation. A
            portion of funds are allocated to cover the costs associated with
            collecting the students from their respective homes and ensuring
            their safe return after each session. This not only enhances
            accessibility to our program but also ensures the well-being and
            safety of the children involved.
          </p>
          <p>
            <span className="font-semiBold">Equipment:</span> A percentage of
            funding enables us to purchase essential equipment needed to conduct
            swimming lessons such as kick boards, flippers, and noodles. These
            items are essential for beginner swimmers to gain confidence and
            coordination in the water.
          </p>
          <p>
            <span className="font-semiBold">Clothing:</span> Every year AAS
            purchases T-shirts with our logo on for the students and volunteers.
            When we have a big event, extra T-shirts are purchased for the many
            volunteers and presenters that participate.
          </p>
          <p>
            <span className="font-semiBold">General running costs:</span> This
            includes media engagements, administration, coach support stipends,
            bookkeeping and all equipment and clothing listed.
          </p>
          <p>
            <span className="font-semiBold">Accounting:</span> Bizrev runs our
            books and financials, auditing the NGO every year.
          </p>
        </article>
        <div className="grid gap-10 mt-10 desktopSmall:col-span-2 desktopSmall:grid-cols-[280px_1fr]">
          <ImageComponent
            file="DSC_0335.jpg"
            folder="images"
            phoneWidth={425}
            tabletWidth={800}
            desktopWidth={1100}
            cssClasses="h-full w-full object-cover aspect-video desktopSmall:h-[472px]"
          />
          <div className="grid desktopSmall:order-first">
            <p>
              By contributing to the Adopt a Swimmer program, you are directly
              impacting the lives of these children, giving them access to
              quality coaching, mentorship, and a chance to develop valuable
              life skills through swimming.
              <br />
              <br />
              We are committed to transparency and accountability in the use of
              funds, and we will provide regular updates on the progress and
              impact of the program.
              <br />
              <br />
              Together, let’s make a meaningful difference in the lives of these
              young swimmers.
            </p>
            <Button
              secondaryColor="lightBlue"
              arrowColor="black"
              cssClasses="mt-10 "
              url="/contact"
            >
              Find out More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipsSection2;
