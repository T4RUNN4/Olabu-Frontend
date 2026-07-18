export interface Wallboard {
  _id: string;
  name: string;
  code: string;
  image: string;
  description: string;
  tags: string;
}

export async function fetchWallboards(): Promise<Wallboard[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards`);
  return res.json();
}

export async function fetchWallboard(id: string): Promise<Wallboard> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/${id}`);

  return res.json();
}