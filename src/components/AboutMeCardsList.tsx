import { Award, Code, Heart, Rocket } from "lucide-react";
import AboutMeCard from "./AboutMeCard";

const aboutMeFeatures = [
  {
    icon: Code,
    title: "Clean Code",
    text: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Performance",
    text: "Building fast and optimized applications for the best user experience",
  },
  {
    icon: Heart,
    title: "Passion",
    text: "Love for creating beautiful interfaces that users enjoy",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Committed to continuous improvement and learning",
  },
];

function AboutMeCardsList() {
  return (
    <ul className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
      {aboutMeFeatures.map((feature) => (
        <AboutMeCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </ul>
  );
}

export default AboutMeCardsList;
