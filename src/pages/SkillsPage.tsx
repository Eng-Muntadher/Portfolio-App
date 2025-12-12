import { Circle, Stars } from "lucide-react";
import { coreStrengths, currentlyExploring } from "../data/skills";
import SectionHeader from "../components/SectionHeader";
import SkillCardsContainer from "../components/SkillCardsContainer";
import TechnicalNotes from "../components/TechnicalNotes";
import { useEffect } from "react";

function SkillsPage() {
  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-20 max-xl:px-8">
      <SectionHeader
        text="Technical"
        highlight="Skills"
        paragraphText="Technologies and expertise I bring to every project"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <SkillCardsContainer />

      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <TechnicalNotes
          highlight="Core"
          text="Strengths"
          headingId="core-strengths"
          icon={Circle}
          iconBg="#FF690033"
          iconColor="#FF6900"
          notesList={coreStrengths}
          iconFill={true}
        />
        <TechnicalNotes
          highlight="Currently"
          text="Exploring"
          headingId="currently-exploring"
          icon={Stars}
          iconBg="#2B7FFF33"
          iconColor="#2B7FFF"
          notesList={currentlyExploring}
        />
      </div>
    </div>
  );
}

export default SkillsPage;
