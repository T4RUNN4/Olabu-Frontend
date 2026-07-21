export async function generateWallboardContent(data: {
  name: string;
  code: string;
  length: "short" | "medium" | "long";
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wallboards/generate-content`,
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
