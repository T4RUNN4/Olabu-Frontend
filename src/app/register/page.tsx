"use client";

import Button from "@/components/Button";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormLabel from "@/components/FormLabel";
import GoogleLogin from "@/components/GoogleLogin";
import SectionWrapper from "@/components/SectionWrapper";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  image: string;
  password: string;
};

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { error } = await authClient.signUp.email({
      ...data,
      role: "customer",
    });

    if(!error) {
      toast.success("Welcome to the OLABU Family");
      reset();
      router.push("/")
    } else {
      toast.error(error.message);
    }
  };

  return (
    <SectionWrapper
      heading="Registration Form"
      subheading="Join the OLABU community and place and track your orders"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset border-base-300 rounded-box border p-12"
      >
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Full Name" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="John Doe"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <FormErrorMessage text={errors.name.message} />}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Profile Image" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="John Doe"
            {...register("image", { required: "Image is Required" })}
          />
          {errors.image && <FormErrorMessage text={errors.image.message} />}
        </div>

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
          <FormLabel text="Password" isRequired />
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

        <Button text="Register" type="primary" task="button" btnType="submit" />

        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-base text-gray-400">
            Already Registered? <Link href="/login" className="bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent">Sign-in Now</Link>{" "}
          </p>
          <div className="divider">OR</div>
          <GoogleLogin />
        </div>
      </form>
    </SectionWrapper>
  );
}
