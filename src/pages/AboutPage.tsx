import AboutMeCardsList from "../components/AboutMeCardsList";
import AboutMeFinalArticle from "../components/AboutMeFinalArticle";
import MyStoryArticle from "../components/MyStoryArticle";
import SectionHeader from "../components/SectionHeader";

function AboutPage() {
  return (
    <div className="px-20 max-xl:px-8">
      <SectionHeader
        text="About"
        highlight="Me"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <p className="text-(--nav-links-text) text-xl text-center mb-16">
        Learn more about my journey and what drives me
      </p>

      <div className="grid grid-cols-2 gap-12 mb-16 max-lg:grid-cols-1">
        <MyStoryArticle />
        <AboutMeCardsList />
      </div>

      <AboutMeFinalArticle />
    </div>
  );
}

export default AboutPage;
