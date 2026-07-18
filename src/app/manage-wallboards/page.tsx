import Button from "@/components/Button";
import ManageWallboard from "@/components/ManageWallboard";
import SectionWrapper from "@/components/SectionWrapper";
import { fetchWallboards } from "@/lib/fetchWallboards";

export default async function ManageWallboards() {
  const boards = await fetchWallboards();
  
  return (
    <SectionWrapper
      heading="Manage Wallboards"
      subheading="Manage or Delete your Wallboards accordingly"
    >
      <div className="flex items-center justify-end">
        <Button
          type="primary"
          text="Add Wallboards"
          task="hyperlink"
          href="/add-wallboards"
        />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {boards.map((board) => (
          <ManageWallboard key={board._id} id={board._id} image={board.image} name={board.name} code={board.code} description={board.description} />
        ))}
      </div>
    </SectionWrapper>
  );
}
