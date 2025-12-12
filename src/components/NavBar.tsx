import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DarkModeAndBurgerIcon from "./DarkModeAndBurgerIcon";

function NavBar() {
  return (
    <header className="grid grid-cols-3 max-md:grid-cols-2 items-center border-b border-(--border-color) bg-(--text-color-2) shadow-lg backdrop-blur-lg px-8 sticky top-0 z-99 delay">
      <Logo />
      <NavLinks />
      <DarkModeAndBurgerIcon />
    </header>
  );
}

export default NavBar;
