import { Menu, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const buttonClasses =
  "p-2 hover:bg-(--gray-bg) cursor-pointer rounded-[0.625rem]";
const iconClasses = "w-5 h-5 text-(--nav-links-text)";

function DarkModeAndBurgerIcon() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex justify-end gap-4 py-3">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className={buttonClasses}
      >
        {darkMode ? (
          <Sun className={iconClasses} aria-hidden="true" />
        ) : (
          <Moon className={iconClasses} aria-hidden="true" />
        )}
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
