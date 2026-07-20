import FeaturedReview from "@/sections/FeaturedReview";
import FeaturedWallboard from "@/sections/FeaturedWallboards";
import Stats from "@/sections/Stats";
import Divider from "../components/Divider";
import FrequentlyAskedQuestions from "@/sections/FrequentlyAskedQuestions";
import Hero from "@/sections/Hero";
import AIChat from "../components/AIChat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Divider />
      <Stats />
      <Divider />
      <FeaturedWallboard />
      <Divider />
      <FeaturedReview />
      <Divider />
      <FrequentlyAskedQuestions />
      <AIChat />
    </div>
  );
}
