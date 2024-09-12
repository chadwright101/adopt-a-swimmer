import ImageComponent from "../../image-component";

const TeamSection1 = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-5 tablet:px-10 desktop:px-0">
      <div className="pt-15 pb-10 desktopSmall:pb-5 max-w-[1100px] desktopSmall:mx-auto">
        <div className="grid gap-10 tablet:grid-cols-[1.5fr_2fr]">
          <div>
            <h2 className="mb-10 text-heading">Meet the team</h2>
            <p>
              Adopt a Swimmer has two qualified coaches and eight volunteers, as
              well as additional supports who work together to make the
              programme a success.
              <br />
              <br />
              <span className="font-semiBold">
                It’s true: Teamwork makes the dream work!
              </span>
            </p>
          </div>
          <ImageComponent
            file="DSC_0151.jpg"
            phoneWidth={425}
            tabletWidth={400}
            desktopWidth={720}
            cssClasses="h-full w-full object-cover aspect-video object-bottom"
          />
        </div>
        <section className="bg-blue py-15 -mx-5 mt-15 tablet:-mx-10 px-5 tablet:px-10 desktopSmall:-mx-[170px] desktopSmall:px-[170px]">
          <h3 className="text-white mb-10">Board Members</h3>
          <ul className="gap-10 grid min-[540px]:grid-cols-2 desktopSmall:grid-cols-1">
            <li className="desktopSmall:grid grid-cols-[340px_1fr] max-w-[500px] gap-10 desktopSmall:max-w-full">
              <ImageComponent
                file="louise-adopt-a-swimmer.jpg"
                phoneWidth={425}
                tabletWidth={500}
                desktopWidth={500}
                cssClasses="h-auto object-cover aspect-square w-full mb-10 desktopSmall:mb-0 min-[540px]:-scale-x-100"
              />
              <div>
                <h4 className="text-paragraph font-roboto font-bold grid gap-1 text-white mb-4">
                  Louise Auersperg
                  <span className="text-paragraph italic font-thin text-white">
                    Founder
                  </span>
                </h4>
                <p className="text-white">
                  A Transkei native, Louise’s life is a testament to resilience,
                  compassion, and unwavering determination. From her early years
                  to her current endeavours, Louise’s journey has been shaped by
                  her passion for helping others and her deep connection to the
                  water. From conquering learning disabilities and severe
                  epilepsy to pursuing her passion for hair fashion at a
                  technical college, Louise has refused to let challenges define
                  her. She has studied preaching, volunteered with Lifeline, and
                  dedicated herself to working with children and the less
                  fortunate. She has been an activist, risking her safety to
                  reach out to those in need and speak out against injustice,
                  and travelled across Mozambique with her husband. Throughout
                  her life journey, Louise has always been drawn back to the
                  water, which she believes is healing and transformative. Her
                  certifications in lifesaving and coaching include LTS,
                  Coaching Level 1, Red Cross Rescue USA, and First Aid Level.
                  She even taught swimming in the USA for six weeks in Atlanta,
                  further spreading her message of empowerment and resilience.
                </p>
              </div>
            </li>
            <hr className="hidden desktopSmall:block text-white/25" />
            <li className="desktopSmall:grid grid-cols-[340px_1fr] max-w-[500px] gap-10 desktopSmall:max-w-full">
              <ImageComponent
                file="Francois.jpg"
                phoneWidth={425}
                tabletWidth={500}
                desktopWidth={500}
                cssClasses="h-auto object-cover aspect-square w-full mb-10 desktopSmall:mb-0"
              />
              <div>
                <h4 className="text-paragraph font-roboto font-bold grid gap-1 text-white mb-4">
                  Francois Geldenhuys
                  <span className="text-paragraph italic font-thin text-white">
                    Financial director and advisor
                  </span>
                </h4>
                <p className="text-white">
                  From humble beginnings, Francois has carved a career business,
                  embarking on his professional journey at a remarkably young
                  age and setting the stage for a career defined by proficiency
                  in financial management and astute decision-making. Francois’s
                  journey has been shaped by a steadfast commitment to
                  identifying and resolving challenges. Having benefited from
                  the guidance of mentors who helped shape his own trajectory,
                  Francois understands the importance of mentorship and is ready
                  to pay it forward, offering his knowledge and insights by
                  mentoring others as they embark on their own entrepreneurial
                  journeys. Whether it’s providing guidance to small rural
                  enterprises or navigating corporate complexities in urban
                  settings, Francois is sharing his passion for resolving
                  business woes and unlocking the potential for growth and
                  prosperity.
                </p>
              </div>
            </li>
            <hr className="hidden desktopSmall:block text-white/25" />
            <li className="desktopSmall:grid grid-cols-[340px_1fr] max-w-[500px] gap-10 desktopSmall:max-w-full">
              <ImageComponent
                file="clayton.jpg"
                phoneWidth={425}
                tabletWidth={500}
                desktopWidth={500}
                cssClasses="h-auto object-cover aspect-square w-full mb-10 desktopSmall:mb-0"
              />
              <div>
                <h4 className="text-paragraph font-roboto font-bold grid gap-1 text-white mb-4">
                  Clayton Bischoff
                  <span className="text-paragraph italic font-thin text-white">
                    Partner
                  </span>
                </h4>
                <p className="text-white">
                  Local business owner, chef, surfer, surf coach, world
                  traveller, nature lover and philanthropist, Clayton has made
                  it his mission in life to positively change the lives of
                  people around him, whether it’s mentoring a student,
                  counselling a friend or staff member, advising a business
                  associate, or just answering a call from someone in need.
                  Currently the owner of Surf Café Plett, Clayton has launched
                  surfing schools and local surf brands. His philanthropic
                  journey began in 2006 when he launched a surfing outreach
                  program that gives street kids and local disadvantaged youths
                  the opportunity to discover a different lifestyle through
                  surfing. Today, his non-for-profit organisation, Adopt a
                  Surfer, is a close collaborator of Adopt a Swimmer.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default TeamSection1;
