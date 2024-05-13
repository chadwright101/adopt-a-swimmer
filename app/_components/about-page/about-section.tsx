import ImageComponent from "../image-component";

const AboutSection = () => {
  return (
    <main className="py-15 px-5 max-w-[1100px] tablet:px-10 desktopSmall:mx-auto">
      <div className="grid gap-10 desktopSmall:grid-cols-[280px_1fr]">
        <div>
          <h2 className="text-heading mb-10">About</h2>
          <p>
            In 2011, Louise Auersberg founded Adopt a Swimmer, a non-profit
            organisation in Plettenberg Bay, as a way to help children at risk
            and facing economic disadvantages. Louise’s own struggles dealing
            with a learning disability and facing many obstacles inspired her to
            use water as a conduit for healing. For Louise, swimming is a
            powerful metaphor for facing challenges head on and pushing through
            adversity. She realised she could take her love for water and
            helping children and combine them.
          </p>
        </div>
        <ImageComponent
          file="DSC_0026.jpg"
          folder="images"
          phoneWidth={425}
          tabletWidth={800}
          desktopWidth={1020}
          cssClasses="w-full h-full object-cover aspect-video desktopSmall:aspect-[2/1]"
        />
      </div>
    </main>
  );
};

export default AboutSection;
