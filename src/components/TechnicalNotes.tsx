import { motion } from "framer-motion";
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
    <motion.section
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-[0.875rem] border border-(--border-color) bg-(--custom-bg-2) shadow-xl delay"
    >
      <h3
        id={headingId}
        className="text-2xl text-(--text-color) font-semibold mb-6"
      >
        <span className="text-(--orange-text)">{highlight} </span>
        {text}
      </h3>

      <ul className="space-y-4">
        {notesList.map((note, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
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
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default TechnicalNotes;
