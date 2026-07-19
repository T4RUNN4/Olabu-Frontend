import FeaturedReview from "@/sections/FeaturedReview";
import FeaturedWallboard from "@/sections/FeaturedWallboards";
import Stats from "@/sections/Stats";
import Divider from "../components/Divider";
import FrequentlyAskedQuestions from "@/sections/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
