import { Github, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfoCard from "./ContactInfoCard";

const contactInfo = [
  {
    title: "Email",
    contactInfo: "muntadheralshammari33@gmail.com",
    icon: Mail,
  },
  { title: "Phone", contactInfo: "+964 0780 498 0811", icon: Phone },
  { title: "Location", contactInfo: "Baghdad, Iraq", icon: MapPin },
];

const links = [
  {
    icon: Github,
    url: "https://github/eng-muntadher",
    label: "Visit my GitHub",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/montadar-ahmed-4577b6333",
    label: "Visit my Linkedin",
  },
  {
    icon: Youtube,
    url: "https://youtube.com",
    label: "Visit my YouTube channel",
  },
];

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section
        aria-labelledby="contact-info"
        className="space-y-6 p-6 rounded-xl border border-(--border-color) bg-(--custom-bg-2) shadow-lg h-fit mb-8 delay"
      >
        <h2 id="contact-info" className="text-3xl text-(--text-color)">
          <span>Let's </span>
          <span className="text-(--orange-text)">Connect</span>
        </h2>

        <p className="text-lg text-(--text-color-secondary) leading-[1.8rem]">
          I'm currently looking for new opportunities and would love to hear
          from you. Whether you have a question or just want to say hi, I'll do
          my best to get back to you!
        </p>

        <ul className="space-y-4">
          {contactInfo.map((el) => (
            <ContactInfoCard
              key={el.title}
              title={el.title}
              text={el.contactInfo}
              icon={el.icon}
            />
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="contact-links"
        className="p-6 rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-lg delay"
      >
        <h2 id="contact-links" className="text-xl text-(--text-color) mb-6">
          <span>Find me on </span>
          <span className="text-(--orange-text)">Social Media</span>
        </h2>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className="block text-(--text-color) bg-(--skill-bg) rounded-xl border border-(--border-color) shadow-lg p-4 
                   transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {<link.icon aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}

export default ContactInfo;
