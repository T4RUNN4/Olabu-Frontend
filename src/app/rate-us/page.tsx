"use client";

import Button from "@/components/Button";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { addReviews } from "@/lib/addReviews";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Inputs = {
  review: string;
};

export default function RateUs() {
  const router = useRouter();

  const proflePicture = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5uyN1gxdNOtHvg9lzEJv4h6__3vp65KH8rQ103eyeA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkkrDlGuxlbDQzF-nzIsy1r0IciQ95V8gzZQwLwkaU15bz9lXUtLAi4ds&s=10",
    "https://cdn.freepixel.com/thumb/free-PNG-graphics-cheerful-cartoon-coconut-character-on-png-background-th-1004413114.jpg",
    "https://img.magnific.com/free-vector/kawaii-strawberry-fruits-flat-style_1951-778.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formattedData = {
      CustomerReview: data.review,
      date: new Date(),
      proflePicture:
        proflePicture[Math.floor(Math.random() * proflePicture.length)],
    };

    const res = await addReviews(formattedData);

    if(res.acknowledged) {
      toast.success("Thanks for your feedback");
      reset();
      router.push("/customer-reviews");
    } else {
      toast.error(res);
    }

  };

  return (
    <SectionWrapper
      heading="Share Your Thoughts"
      subheading="Share your thoughts, opinion and brutal but honest review to us"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset border-base-300 rounded-box border p-12"
      >
        <p className="text-xs text-gray-400 text-center mb-4">Your identity will be hidden in order to honor your privacy</p>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Your Review" isRequired />
          <textarea
            className="textarea w-full focus:border focus:border-gray-500"
            placeholder="your thougts"
            {...register("review", { required: "Review is Required" })}
          />
          {errors.review && <FormErrorMessage text={errors.review.message} />}
        </div>

        <Button
          text="Share Your thoughts"
          type="primary"
          task="button"
          btnType="submit"
        />
      </form>
    </SectionWrapper>
  );
}
