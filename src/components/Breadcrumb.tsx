import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  text: string;
  to: string;
  ariaLabel: string;
}

function Breadcrumb({ text, to, ariaLabel }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <Link
        to={to}
        aria-label={ariaLabel}
        className="flex items-center gap-2 text-(--orange-text) cursor-pointer mb-8"
      >
        <span>
          <ArrowLeft size={20} aria-hidden="true" />
        </span>
        <span>{text}</span>
      </Link>
    </nav>
  );
}

export default Breadcrumb;
