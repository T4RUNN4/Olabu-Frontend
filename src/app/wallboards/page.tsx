import SectionWrapper from "@/components/SectionWrapper";
import Wallboard from "@/components/Wallboard";
import { fetchWallboards } from "@/lib/fetchWallboards";

export default async function Wallboards() {
  const boards = await fetchWallboards();

  return (
    <SectionWrapper heading="Our Wallboards" subheading="Explore the dynmaic and vibrant list of high quality PVC wallboards from our collection">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {boards.map((board) => (
            <Wallboard key={board._id} id={board._id} image={board.image} code={board.code} name={board.name} description={board.description} />
        ))}
        </div>
    </SectionWrapper>
  );
}
