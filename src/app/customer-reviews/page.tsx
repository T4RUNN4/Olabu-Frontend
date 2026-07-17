import CustomerCard from "@/components/CustomerCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function CustomerReview() {
  const reviews = [
    {
      name: "Satisfied Customer",
      gender: "male",
      date: "June 11, 2026",
      review:
        "The image and board quality is good. Gives a premium vibe. Overally 8.8/10",
      id: "a1"
    },
    {
      name: "Satisfied Customer",
      gender: "female",
      date: "June 12, 2026",
      review:
        "Very good quality. Images are really good. I brought some boards previously whch has blurry pictures. But yours are really good in quality.",
      id: "b2"
    },
    {
      name: "Satisfied Customer",
      gender: "female",
      date: "June 12, 2026",
      review:
        "Boards are really good in quality. Colors are really vibrant too.",
      id: "c3"
    },
  ];

  return (
    <SectionWrapper
      heading="Customer Reviews"
      subheading="What our beloved customers says about US"
    >
      <div className="flex flex-col justify-center gap-4 mt-8">
        {reviews.map((review) => (
            <CustomerCard key={review.id} name={review.name} gender={review.gender} date={review.date} review={review.review} />
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-20">
        All of this reviews are collected from customers. We
        hide customers identity unless they share it publicly. We recieve
        reviews in Bengali and English both languages. But they are translated
        here better integration.
      </p>
    </SectionWrapper>
  );
}
