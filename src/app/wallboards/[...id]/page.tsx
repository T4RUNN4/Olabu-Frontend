import WallBoardDeatilsClient from "@/components/WallboardDetailsClient";
import { fetchWallboard } from "@/lib/fetchWallboards";

interface GameDetailsProps {
  params: Promise<{
    id: string;
  }>
}

export default async function WallboardDetails({ params }: GameDetailsProps) {
  const { id } = await params;
  const wallboard = await fetchWallboard(id);

  return (
    <WallBoardDeatilsClient
      name={wallboard.name}
      image={wallboard.image}
      code={wallboard.code}
      description={wallboard.description}
    />
  );
}
