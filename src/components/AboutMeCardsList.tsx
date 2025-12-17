import { motion } from "framer-motion";
import { aboutMeFeatures } from "../data/about";
import AboutMeCard from "./AboutMeCard";

function AboutMeCardsList() {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-6 max-md:grid-cols-1 delay"
    >
      {aboutMeFeatures.map((feature, i) => (
        <AboutMeCard
          key={i}
          index={i}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </motion.ul>
  );
}

export default AboutMeCardsList;
