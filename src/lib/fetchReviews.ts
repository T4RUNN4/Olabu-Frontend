export interface Reviews {
  _id: string;
  proflePicture: string;
  CustomerReview: string;
  date: string;
}

export async function fetchReviews(): Promise<Reviews[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`);
  return res.json();
}

export async function fetchFeaturedReviews(): Promise<Reviews[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/featured`);
  return res.json();
}