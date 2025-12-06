function Skill({ skillName }: { skillName: string }) {
  return (
    <li className="text-sm text-[#1E2939] px-3 py-2 rounded-[0.625rem] border border-gray-200 bg-gray-50">
      {skillName}
    </li>
  );
}

export default Skill;
