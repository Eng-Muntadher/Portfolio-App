interface ButtonProps {
  variation: "orange" | "light" | "dark";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  addedClasses?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

function Button({
  variation,
  onClick,
  addedClasses = "",
  children,
  type = "button",
}: ButtonProps) {
  const classes = "px-6 py-3 flex items-center gap-2 rounded-[0.625rem] ";

  const variations = {
    orange: "text-white bg-(--orange-text) shadow-lg ",
    light: "text-(--orange-text) border border-(--orange-text) ",
    dark: "text-white bg-(--dark-btn-bg) ",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes + variations[variation] + { addedClasses }}
    >
      {children}
    </button>
  );
}

export default Button;
