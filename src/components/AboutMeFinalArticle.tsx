function AboutMeFinalArticle() {
  return (
    <section
      aria-labelledby="heading"
      className="px-6 flex flex-col items-center pt-10 pb-6 text-center rounded-[0.875rem] border border-(--border-color) bg-(--custom-bg-2) shadow-lg"
    >
      <h3 id="heading" className="text-3xl text-(--text-color) mb-4">
        <span className="text-(--orange-text)">Always</span> Learning & Growing
      </h3>

      <p className="text-(--text-color-secondary) text-lg max-w-188">
        I'm constantly exploring new technologies and improving my skills. I’m
        currently diving deeper into advanced React patterns, Next.js,
        shadcn/ui, advanced Git workflows, and more. My goal is to become a
        well-rounded developer who can tackle any challenge with confidence and
        creativity.
      </p>
    </section>
  );
}

export default AboutMeFinalArticle;
