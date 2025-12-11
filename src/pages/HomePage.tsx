import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import QuickNavigation from "../components/QuickNavigation";

function Home() {
  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <QuickNavigation />
    </>
  );
}

export default Home;
