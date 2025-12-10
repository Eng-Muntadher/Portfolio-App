interface SkillProps {
  skillName: string;
  isUsedInProjectCard?: boolean;
  addedClasses?: string;
}

function Skill({
  skillName,
  isUsedInProjectCard = false,
  addedClasses,
}: SkillProps) {
  const styles = isUsedInProjectCard
    ? "text-xs text-[#F54900] px-3 py-1 rounded-full border border-[#FFD6A7] bg-[#FFF7ED]"
    : "text-sm text-[#1E2939] px-3 py-2 rounded-[0.625rem] border border-gray-200 bg-gray-50";

  return <li className={styles + " " + addedClasses}>{skillName}</li>;
}

export default Skill;
