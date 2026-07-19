import CustomerCard from "@/components/CustomerCard";
import PageHeading from "@/components/PageHeading";
import PageSubHeading from "@/components/PageSubheading";
import SectionWrapper from "@/components/SectionWrapper";
import { fetchFeaturedReviews } from "@/lib/fetchReviews";

export default async function FeaturedReview() {
  const reviews = await fetchFeaturedReviews();

  return (
    <div className="flex flex-col py-24">
      <PageHeading text="Featured Review" />
      <PageSubHeading text="Words that touched our hearts from deep inside" />

      <div className="mt-20">
        {reviews.map((review) => (
          <CustomerCard
            key={review._id}
            image={review.proflePicture}
            date={review.date}
            review={review.CustomerReview}
          />
        ))}
      </div>
    </div>
  );
}
