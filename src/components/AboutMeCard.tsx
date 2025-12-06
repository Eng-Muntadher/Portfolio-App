import type { LucideIcon } from "lucide-react";

interface AboutMeCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

function AboutMeCard({ icon: Icon, title, text }: AboutMeCardProps) {
  return (
    <li className="rounded-[0.875rem] p-6 border border-[#E5E7EB] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]">
      <Icon
        aria-hidden="true"
        size={48}
        className="text-(--orange-text) mb-4"
      />

      <h3 className="text-xl text-(--text-color) mb-3">{title}</h3>

      <p className="text-sm text-(--nav-links-text)">{text}</p>
    </li>
  );
}

export default AboutMeCard;
