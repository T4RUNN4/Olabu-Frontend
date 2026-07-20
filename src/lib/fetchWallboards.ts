export interface Wallboard {
  _id: string;
  name: string;
  code: string;
  image: string;
  description: string;
  tags: string[];
}

export async function fetchWallboards(
  query = "",
  by: "name" | "code" | "tags" = "name",
): Promise<Wallboard[]> {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards`
  );

  if (query) {
    url.searchParams.set("q", query);
    url.searchParams.set("by", by);
  }

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  return res.json();
}

export async function fetchFeaturedWallboards(): Promise<Wallboard[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/featured`,
  );
  console.log(res);
  return res.json();
}

export async function fetchWallboard(id: string): Promise<Wallboard> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/${id}`,
  );

  return res.json();
}
