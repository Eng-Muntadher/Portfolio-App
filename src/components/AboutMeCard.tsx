import type { LucideIcon } from "lucide-react";

interface AboutMeCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

function AboutMeCard({ icon: Icon, title, text }: AboutMeCardProps) {
  return (
    <li className="rounded-[0.875rem] p-6 border border-(--border-color) bg-(--custom-bg-2) shadow-lg">
      <Icon
        aria-hidden="true"
        size={48}
        className="text-(--orange-text) mb-4"
      />

      <h3 className="text-xl text-(--text-color) mb-3">{title}</h3>

      <p className="text-sm text-(--gray-text)">{text}</p>
    </li>
  );
}

export default AboutMeCard;
