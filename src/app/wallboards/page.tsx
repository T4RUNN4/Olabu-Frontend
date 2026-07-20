import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Wallboard from "@/components/Wallboard";
import { fetchWallboards } from "@/lib/fetchWallboards";

export default async function Wallboards({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    by?: "name" | "code" | "tags";
  }>;
}) {
  const { q = "", by = "name" } = await searchParams;
  const boards = await fetchWallboards(q, by);

  return (
    <SectionWrapper
      heading="Our Wallboards"
      subheading="Explore the dynmaic and vibrant list of high quality PVC wallboards from our collection"
    >
      <form className="flex items-center gap-4 mb-8">
        <input
          name="q"
          defaultValue={q}
          type="text"
          placeholder="Search wallboards..."
          className="input w-full max-w-xl"
        />

        <select name="by" defaultValue={by} className="select">
          <option value="name">Name</option>
          <option value="code">Code</option>
          <option value="tags">Tags</option>
        </select>

        <Button text="Search" type="primary" task="button" btnType="submit" />
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Wallboard
            key={board._id}
            id={board._id}
            image={board.image}
            code={board.code}
            name={board.name}
            description={board.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
