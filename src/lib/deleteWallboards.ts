export async function deleteWallboards(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/delete/${id}`, {
    method: "DELETE",
  });

  return res.json();
}