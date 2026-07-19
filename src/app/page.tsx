import FeaturedReview from "@/sections/FeaturedReview";
import FeaturedWallboard from "@/sections/FeaturedWallboards";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Stats />
      <hr className="border border-gray-200" />
      <FeaturedWallboard />
      <hr className="border border-gray-200" />
      <FeaturedReview />
    </div>
  );
}
