import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface NavigationCardItemProps {
  heading: string;
  text: string;
  url: string;
  icon: LucideIcon;
  iconBg: string;
  iconTextColor: string;
}

function NavigationCardItem({
  heading,
  text,
  url,
  icon: Icon,
  iconBg,
  iconTextColor,
}: NavigationCardItemProps) {
  return (
    <li className="p-8 rounded-2xl border border-(--border-color) bg-(--custom-bg) shadow-lg">
      <span
        aria-hidden="true"
        className="block p-4 w-fit rounded-[0.875rem]"
        style={{
          backgroundColor: iconBg,
          color: iconTextColor,
        }}
      >
        <Icon size={32} aria-hidden="true" />
      </span>

      <h3 className="text-(--text-color) text-2xl mt-6 mb-3">{heading}</h3>

      <p className="text-(--gray-text) mb-6">{text}</p>

      <Link to={url} className="text-(--orange-text) flex items-center gap-2">
        Learn More
        <ArrowRight size={20} aria-hidden="true" />
      </Link>
    </li>
  );
}

export default NavigationCardItem;
