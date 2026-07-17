"use client";

import Button from "@/components/Button";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  review: string;
  status: boolean;
};

export default function RateUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <SectionWrapper
      heading="Share Your Thoughts"
      subheading="Share your thoughts, opinion and brutal but honest review to us"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset border-base-300 rounded-box border p-12"
      >
        <div className="flex gap-2 items-center mb-4">
          <input type="checkbox" className="checkbox" 
          {...register("status")}/>
          <FormLabel text="Stay Annonymous" />
        </div>

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
