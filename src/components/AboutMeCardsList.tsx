import { aboutMeFeatures } from "../data/about";
import AboutMeCard from "./AboutMeCard";

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
