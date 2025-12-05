import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl text-(--text-color) space-x-2 w-fit md:space-x-1"
    >
      <span className="md:hidden lg:inline">Muntadher</span>
      <span className="md:inline lg:hidden max-md:hidden">M</span>
      <span className="text-(--orange-text)">
        <span className="md:hidden lg:inline ">Ahmed</span>
        <span className="md:inline lg:hidden max-md:hidden">A</span>
      </span>
    </Link>
  );
}

export default Logo;
