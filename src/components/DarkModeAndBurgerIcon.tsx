import { Menu, Moon } from "lucide-react";

const buttonClasses = "p-2 bg-(--gray-bg) rounded-[0.625rem]";
const iconClasses = "w-5 h-5 text-(--nav-links-text)";

function DarkModeAndBurgerIcon() {
  return (
    <div className="flex justify-end gap-4 py-3">
      <button className={buttonClasses} aria-label="Toggle dark mode">
        <Moon className={iconClasses} aria-hidden="true" />
      </button>

      <button
        className={`${buttonClasses} md:hidden`}
        aria-label="Open Mobile window"
      >
        <Menu className={iconClasses} aria-hidden="true" />
      </button>
    </div>
  );
}

export default DarkModeAndBurgerIcon;
