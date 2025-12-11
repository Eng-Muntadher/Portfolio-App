function ProjectOverViewCard({ description }: { description: string }) {
  return (
    <section
      aria-labelledby="project-overview"
      className="rounded-xl border border-gray-200 bg-white shadow-xl p-6"
    >
      <h2 id="project-overview" className="text-(--text-color) text-2xl mb-4">
        <span className="text-(--orange-text)">Project </span>
        <span>Overview</span>
      </h2>

      <p className="text-lg text-(--text-color-secondary) leading-7">
        {description}
      </p>
    </section>
  );
}

export default ProjectOverViewCard;
