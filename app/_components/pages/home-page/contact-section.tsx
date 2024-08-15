import ContactForm from "../../contact-form";
import ImageComponent from "../../image-component";

const ContactSection = () => {
  return (
    <section className="px-5 pt-20 tablet:px-10 max-w-[1100px] desktopSmall:pb-0 desktopSmall:mx-auto">
      <h3 className="text-heading mb-10">Get in touch</h3>
      <div className="desktopSmall:grid grid-cols-2 gap-10">
        <ContactForm />
        <div className="hidden desktopSmall:block">
          <ImageComponent
            file="DSC_0098.jpg"
            folder="images"
            phoneWidth={10}
            tabletWidth={10}
            desktopWidth={1100}
            cssClasses="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
