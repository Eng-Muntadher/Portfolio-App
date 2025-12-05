import { Briefcase, Code, Mail } from "lucide-react";
import NavigationCardItem from "./NavigationCardItem";

const cardData = [
  {
    heading: "View My Work",
    text: "Explore my portfolio of projects",
    icon: Code,
    iconBg: "rgba(255, 105, 0, 0.20)",
    iconTextColor: "var(--orange-text)",
    url: "/projects",
  },
  {
    heading: "My Experience",
    text: "Education and achievements",
    icon: Briefcase,
    iconBg: "rgba(43, 127, 255, 0.20)",
    iconTextColor: "#2B7FFF",
    url: "/Experience",
  },
  {
    heading: "Get In Touch",
    text: "Let's work together",
    icon: Mail,
    iconBg: "rgba(0, 201, 80, 0.20)",
    iconTextColor: "#00C950",
    url: "/contact",
  },
];

function NavigationCardList() {
  return (
    <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 px-20 max-xl:px-8">
      {cardData.map((card) => (
        <NavigationCardItem
          key={card.url}
          heading={card.heading}
          text={card.text}
          url={card.url}
          icon={card.icon}
          iconBg={card.iconBg}
          iconTextColor={card.iconTextColor}
        />
      ))}
    </ul>
  );
}

export default NavigationCardList;
