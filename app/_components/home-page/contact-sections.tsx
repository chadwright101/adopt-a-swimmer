import ContactForm from "../contact-form";
import ImageComponent from "../image-component";

const ContactSection = () => {
  return (
    <section className="px-5 py-20 tablet:px-10 max-w-[1100px] desktopSmall:pb-0 desktopSmall:mx-auto">
      <h3 className="text-heading mb-10">Get in touch</h3>
      <div className="desktopSmall:grid grid-cols-2 gap-10">
        <ContactForm />
        <ImageComponent
          file="/DSC_1501.jpg"
          folder="images"
          phoneWidth={10}
          tabletWidth={10}
          desktopWidth={840}
          cssClasses="hidden desktopSmall:block h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;
