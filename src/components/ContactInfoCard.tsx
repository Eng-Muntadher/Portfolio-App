import type { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  title: string;
  text: string;
  icon: LucideIcon;
}

function ContactInfoCard({ title, text, icon: Icon }: ContactInfoCardProps) {
  return (
    <li className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 overflow-x-auto scrollbar-custom">
      <span
        aria-hidden="true"
        className="p-3 bg-(--contact-card-text) rounded-[0.625rem]"
      >
        <Icon size={24} aria-hidden="true" className="text-(--orange-text)" />
      </span>

      <div>
        <h3 className="text-sm text-(--nav-links-text)">{title}</h3>
        <p className="text-lg text-(--text-color)">{text}</p>
      </div>
    </li>
  );
}

export default ContactInfoCard;
