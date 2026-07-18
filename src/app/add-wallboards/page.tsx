"use client";

import Button from "@/components/Button";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";
import { addWallboard } from "@/lib/addWallboards";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  code: string;
  image: string;
  description: string;
  tags: string;
};

export default function AddWallboards() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formattedData = {
      ...data,
      tags: data.tags.split(",").map((tag) => tag.trim()),
    };

    const res = await addWallboard(formattedData);

    if (res.acknowledged) {
      console.log(res);
      toast.success("Wallboard added to the collection");
      reset();
      router.push("/wallboards");
    } else {
      toast.error(res);
    }
  };

  return (
    <SectionWrapper
      heading="Add Wallboards"
      subheading="Add wallboards to your collection"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset border-base-300 rounded-box border p-12"
      >
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Wallboard Name" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="Everything in time"
            {...register("name", { required: "Wallboard name is Required" })}
          />
          {errors.name && <FormErrorMessage text={errors.name.message} />}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Order Code" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="lm10-wc-01"
            {...register("code", { required: "Wallboard code is Required" })}
          />
          {errors.code && <FormErrorMessage text={errors.code.message} />}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Wallboard Image" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="https://example.com"
            {...register("image", { required: "Wallboard image is Required" })}
          />
          {errors.image && <FormErrorMessage text={errors.image.message} />}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Short Description" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="The wallboards features the iconic moment of Lionel Messi receiving Fifa World Cup 2022."
            {...register("description", {
              required: "Wallboard description is Required",
            })}
          />
          {errors.description && (
            <FormErrorMessage text={errors.description.message} />
          )}
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="WallBoard Tags" isRequired />
          <p className="text-sm text-gray-600">Seperate tags by comma</p>
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="Football, Messi, Sports, Ronaldo"
            {...register("tags", {
              required: "Wallboard tags are Required",
            })}
          />
          {errors.tags && <FormErrorMessage text={errors.tags.message} />}
        </div>

        <Button
          text="Add to the Collection"
          type="primary"
          task="button"
          btnType="submit"
        />
      </form>
    </SectionWrapper>
  );
}
