import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/home"
      className="text-2xl text-(--text-color) space-x-2 w-fit md:space-x-1"
    >
      <span className="md:hidden lg:inline max-[400px]:hidden">Muntadher</span>
      <span className="md:inline lg:hidden max-md:hidden max-[400px]:inline!">
        M
      </span>
      <span className="text-(--orange-text)">
        <span className="md:hidden lg:inline max-[400px]:hidden">Ahmed</span>
        <span className="md:inline lg:hidden max-md:hidden max-[400px]:inline!">
          A
        </span>
      </span>
    </Link>
  );
}

export default Logo;
