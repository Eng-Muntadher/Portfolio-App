import HeroSection from "@/app/_components/HeroSection";
import QuickNavigation from "@/app/_components/QuickNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

function Home() {
  return (
    <>
      <HeroSection />
      <QuickNavigation />
    </>
  );
}

export default Home;
