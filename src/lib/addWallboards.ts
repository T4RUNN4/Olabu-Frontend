export async function addWallboard(data: object) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
}
