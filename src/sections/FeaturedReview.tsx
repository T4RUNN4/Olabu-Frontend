import CustomerCard from "@/components/CustomerCard";
import SectionWrapper from "@/components/SectionWrapper";
import { fetchFeaturedReviews } from "@/lib/fetchReviews";

export default async function FeaturedReview() {
  const reviews = await fetchFeaturedReviews();

  return (
    <SectionWrapper
      heading="Featured Review"
      subheading="Words that touched our hearts from deep inside"
    >
      {reviews.map((review) => (
        <CustomerCard
            key={review._id}
            image={review.proflePicture}
            date={review.date}
            review={review.CustomerReview}
        />
        ))}
    </SectionWrapper>
  );
}
