import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import SectionHeader from "../components/SectionHeader";

function ContactPage() {
  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-20 max-xl:px-8">
      <SectionHeader
        text="Get In"
        highlight="Touch"
        paragraphText="Feel free to reach out for opportunities or just to say hello!"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
