import Link from "next/link";
import Button from "../../button";
import Image from "next/image";

const CardSection = () => {
  return (
    <section className="bg-[#E1B88A]/[35%] py-15 px-5 flex flex-col items-center tablet:px-10 max-w-[1440px] desktopSmall:mx-auto">
      <ul className="w-full flex flex-wrap gap-10 justify-center desktopSmall:justify-between max-w-[1100px]">
        <li className="bg-brown max-w-[280px] min-h-[400px] px-5 py-8 rounded-2xl border-[12px] border-white flex flex-col justify-between relative">
          <Image
            src="/graphics/brush-stroke-4.svg"
            alt="Brush stroke graphic"
            width={280}
            height={101}
            className="absolute top-2 left-0"
          />
          <div className="grid gap-5 z-10">
            <h3 className="text-center text-white">For our children</h3>
            <p className="text-center text-white">
              Help us share the gift of swimming. The carefree joy of jumping
              into water. Let’s improve the quality of lives, together.
            </p>
          </div>
          <Button
            secondaryColor="lightBlue"
            arrowColor="brown"
            cssClasses="w-full text-[15px] desktopSmall:hover:px-0 desktopSmall:hover:mx-0"
            noArrow
            url="/about"
          >
            About us
          </Button>
        </li>

        <li className="bg-blue max-w-[280px] min-h-[400px] px-5 py-8 rounded-2xl border-[12px] border-white flex flex-col justify-between relative">
          <Image
            src="/graphics/brush-stroke-5.svg"
            alt="Brush stroke graphic"
            width={280}
            height={101}
            className="absolute top-2 left-0"
          />
          <div className="grid gap-5 z-10">
            <h3 className="text-center text-white">Creating community</h3>
            <p className="text-center text-white">
              We take our cues from dolphins and flock together, creating a
              welcoming and inclusive environment that connects our students,
              volunteers, and sponsors.
            </p>
          </div>
          <Link
            className="py-2 bg-white text-center border-4 rounded uppercase ease-in-out duration-300 border-orange w-full text-[15px] desktopSmall:hover:bg-white/90"
            href="/sponsorships"
          >
            Become a sponsor
          </Link>
        </li>

        <li className="bg-orange max-w-[280px] min-h-[400px] px-5 py-8 rounded-2xl border-[12px] border-white flex flex-col justify-between relative">
          <Image
            src="/graphics/brush-stroke-6.svg"
            alt="Brush stroke graphic"
            width={280}
            height={101}
            className="absolute top-2 left-0"
          />
          <div className="grid gap-5 z-10">
            <h3 className="text-center text-white">Passionate people</h3>
            <p className="text-center text-white">
              The only thing our team of volunteers love more than water is
              watching children fall in love with swimming and the ocean. Join
              us at the beach and you’ll see us in action.
            </p>
          </div>
          <Button
            secondaryColor="blue"
            arrowColor="orange"
            cssClasses="w-full text-[15px] desktopSmall:hover:px-1 desktopSmall:hover:mx-0"
            noArrow
            url="/meet-the-team"
          >
            Meet the team
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default CardSection;
