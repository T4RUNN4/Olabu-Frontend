import CustomerCard from "@/components/CustomerCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function CustomerReview() {
  const reviews = [
    {
      date: "June 11, 2026",
      review:
        "The image and board quality is good. Gives a premium vibe. Overally 8.8/10",
      id: "a1"
    },
    {
      date: "June 12, 2026",
      review:
        "Very good quality. Images are really good. I brought some boards previously whch has blurry pictures. But yours are really good in quality.",
      id: "b2"
    },
    {
      date: "June 12, 2026",
      review:
        "Boards are really good in quality. Colors are really vibrant too.",
      id: "c3"
    },
  ];

  const proflePicture = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5uyN1gxdNOtHvg9lzEJv4h6__3vp65KH8rQ103eyeA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkkrDlGuxlbDQzF-nzIsy1r0IciQ95V8gzZQwLwkaU15bz9lXUtLAi4ds&s=10",
    "https://cdn.freepixel.com/thumb/free-PNG-graphics-cheerful-cartoon-coconut-character-on-png-background-th-1004413114.jpg",
    "https://img.magnific.com/free-vector/kawaii-strawberry-fruits-flat-style_1951-778.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  return (
    <SectionWrapper
      heading="Customer Reviews"
      subheading="What our beloved customers says about US"
    >
      <div className="flex flex-col justify-center gap-4 mt-8">
        {reviews.map((review) => (
          <CustomerCard
            key={review.id}
            image={
              proflePicture[Math.floor(Math.random() * proflePicture.length)]
            }
            date={review.date}
            review={review.review}
          />
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-20">
        All of this reviews are collected from customers. We hide customers
        identity unless they share it publicly. We recieve reviews in Bengali
        and English both languages. But they are translated here better
        integration.
      </p>
    </SectionWrapper>
  );
}
