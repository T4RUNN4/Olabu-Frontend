import FeaturedReview from "@/sections/FeaturedReview";
import FeaturedWallboard from "@/sections/FeaturedWallboards";
import Stats from "@/sections/Stats";
import Divider from "../components/Divider";
import FrequentlyAskedQuestions from "@/sections/FrequentlyAskedQuestions";
import Hero from "@/sections/Hero";

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
    </div>
  );
}
