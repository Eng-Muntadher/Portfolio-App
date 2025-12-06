import type { LucideIcon } from "lucide-react";

interface TechnicalNotesProps {
  text: string;
  highlight: string;
  headingId: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  iconFill?: boolean;
  notesList: string[];
}

function TechnicalNotes({
  text,
  highlight,
  icon: Icon,
  headingId,
  iconColor,
  iconBg,
  notesList,
  iconFill = false,
}: TechnicalNotesProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="p-6 rounded-[0.875rem] border border-[#E5E7EB] bg-white shadow-xl"
    >
      <h3
        id={headingId}
        className="text-2xl text-(--text-color) font-semibold mb-6"
      >
        <span className="text-(--orange-text)">{highlight} </span>
        {text}
      </h3>

      <ul className="space-y-4">
        {notesList.map((note) => (
          <li key={note} className="flex items-center gap-3">
            <div
              style={{ backgroundColor: iconBg }}
              className="p-2 rounded-full"
            >
              <Icon
                aria-hidden="true"
                size={14}
                style={{ color: iconColor }}
                fill={iconFill ? iconColor : "none"}
              />
            </div>
            <span className="text-(--text-color-secondary)">{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechnicalNotes;
