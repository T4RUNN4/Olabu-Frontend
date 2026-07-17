"use client";

import Button from "@/components/Button";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <SectionWrapper
      heading="Login Form"
      subheading="Login to place your order and track your parcels"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset border-base-300 rounded-box border p-12"
      >
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Email Address" isRequired />
          <input
            type="email"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="johndoe@example.com"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && <FormErrorMessage text={errors.email.message} />}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Confirm Password" isRequired />
          <input
            type="password"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="*****"
            {...register("password", { required: "Password is Required" })}
          />
          {errors.password && (
            <FormErrorMessage text={errors.password.message} />
          )}
        </div>

        <Button text="Login" type="primary" task="button" btnType="submit" />
      </form>
    </SectionWrapper>
  );
}
