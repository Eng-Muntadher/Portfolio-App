import Link from "next/link";

const links = ["home", "about", "skills", "projects", "contact"];
const linkClasses =
  "px-4 py-2 text-(--nav-links-text) hover:text-(--orange-text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text)";

function NavLinks() {
  return (
    <nav className="flex justify-center items-center gap-1 py-5 z-10 max-md:hidden focus-visible">
      {links.map((link) => (
        <Link key={link} href={link} className={linkClasses}>
          {/* Same links names, just makes the first letter capitalized */}
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;
