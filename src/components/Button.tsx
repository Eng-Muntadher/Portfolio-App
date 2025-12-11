import { Link } from "react-router-dom";

interface ButtonProps {
  variation: "orange" | "light" | "dark" | "gray" | "red";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  addedClasses?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isLink?: boolean;
  to?: string;
  disabled?: boolean;
}

function Button({
  variation,
  onClick,
  addedClasses = "",
  children,
  isLink = false,
  to = "/",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const styles = "flex items-center gap-2 rounded-[0.625rem]";

  const variations = {
    orange: "text-white bg-(--orange-text) shadow-lg",
    light: "text-(--orange-text) border-2 border-(--orange-text)",
    dark: "text-white bg-(--dark-btn-bg)",
    gray: "text-(--text-color-secondary) border border-[#E5E7EB] bg-[#f9fafb]",
    red: "text-white bg-gradient-to-b from-red-600 to-red-500",
  };

  if (isLink) {
    return (
      <Link
        to={to}
        className={`${styles} ${variations[variation]} ${addedClasses} disabled:opacity-65`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles} ${variations[variation]} ${addedClasses} disabled:opacity-65`}
    >
      {children}
    </button>
  );
}

export default Button;
