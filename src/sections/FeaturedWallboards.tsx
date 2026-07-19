import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Wallboard from "@/components/Wallboard";
import { fetchFeaturedWallboards } from "@/lib/fetchWallboards";

export default async function FeaturedWallboard() {
  const wallboards = await fetchFeaturedWallboards();

  return (
    <SectionWrapper
      heading="Featured Wallboards"
      subheading="Wallboards that are definately worth checking"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {wallboards.map((wallboard) => (
          <Wallboard
            key={wallboard._id}
            id={wallboard._id}
            image={wallboard.image}
            name={wallboard.name}
            code={wallboard.code}
            description={wallboard.description}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button
          text="Explore all Wallboards"
          type="primary"
          task="hyperlink"
          href="/wallboards"
        />
      </div>
    </SectionWrapper>
  );
}
