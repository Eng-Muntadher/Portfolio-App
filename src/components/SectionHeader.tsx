interface SectionTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  highlight: string;
  addedClasses?: string;
  // subHeaderText
}

export default function SectionHeader({
  level = 1,
  text,
  highlight,
  addedClasses = "",
}: SectionTitleProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`text-5xl text-(--text-color) text-center relative ${addedClasses}`}
    >
      <span>{text} </span>
      <span className="text-(--orange-text)">{highlight}</span>

      <span
        aria-hidden="true"
        className="absolute bg-(--orange-text) w-20 h-1 -bottom-5 left-1/2 -translate-x-1/2"
      ></span>
    </Tag>
  );
}
