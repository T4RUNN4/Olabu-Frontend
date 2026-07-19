export async function addReviews(data: object) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/add`,
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
