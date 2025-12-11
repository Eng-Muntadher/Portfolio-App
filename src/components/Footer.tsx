import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/Eng-Muntadher",
    label: "Visit my GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/montadar-ahmed-4577b6333",
    label: "Visit my LinkedIn",
  },
  {
    Icon: Youtube,
    href: "/",
    label: "Vist my YouTube chanel",
  },
  {
    Icon: Mail,
    href: "mailto:muntadheralshammari33@gmail.com",
    label: "Email me",
  },
];

const quickLinks = [
  [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
  ],
  [
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
  ],
  [
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ],
];

const linksClasses =
  "rounded-[0.625rem] bg-white p-2 text-[var(--nav-links-text)] flex items-center justify-center";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer
      className="px-20 py-12 mt-20 bg-[#F9FAFB] border border-[#E5E7EB]"
      role="contentinfo"
    >
      <div className="grid grid-cols-3 gap-8 max-[860px]:grid-cols-1">
        <div className="max-[860px]:flex max-[860px]:flex-col max-[860px]:items-center">
          <h3 className="text-(--text-color) mb-4">
            <span>Muntadher </span>
            <span className="text-(--orange-text)">Ahmed</span>
          </h3>

          <p className="text-(--nav-links-text) text-sm max-w-85 max-[860px]:text-center">
            Front-End Developer passionate about creating beautiful and
            functional web applications.
          </p>
        </div>

        <nav
          className="flex flex-col items-center"
          aria-label="Footer Navigation"
        >
          <h3 className="text-(--text-color) mb-4">Quick Links</h3>

          <div className="grid grid-cols-3 w-full max-[430px]:grid-cols-1">
            {quickLinks.map((column, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col items-center gap-2 text-sm text-(--nav-links-text) max-[430px]:mb-2"
              >
                {column.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-end max-[860px]:items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-(--text-color) mb-4">Connect</h3>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={linksClasses}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-8" />

      <p className="text-(--nav-links-text) text-sm text-center mb-2">
        Built by Muntadher Ahmed
      </p>

      <p className="text-[#6A7282] text-sm text-center">
        © {currentYear} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
