import { Briefcase, Code, Mail, History } from "lucide-react";
import NavigationCardItem from "./NavigationCardItem";

const cardData = [
  {
    heading: "My Experience",
    text: "See my professional journey",
    icon: History,
    iconBg: "rgba(255, 105, 0, 0.20)",
    iconTextColor: "var(--orange-text)",
    url: "/experience",
  },
  {
    heading: "View My Work",
    text: "Explore my portfolio projects",
    icon: Code,
    iconBg: "rgba(255, 105, 0, 0.20)",
    iconTextColor: "var(--orange-text)",
    url: "/projects",
  },
  {
    heading: "My Skills",
    text: "See my technical Skills",
    icon: Briefcase,
    iconBg: "rgba(43, 127, 255, 0.20)",
    iconTextColor: "#2B7FFF",
    url: "/skills",
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
    <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
      {cardData.map((card, i) => (
        <NavigationCardItem
          key={i}
          index={i}
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
