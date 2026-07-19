import FeaturedWallboard from "@/sections/FeaturedWallboards";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Stats />
      <FeaturedWallboard />
    </div>
  );
}
