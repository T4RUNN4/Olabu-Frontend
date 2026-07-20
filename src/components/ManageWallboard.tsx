"use client";

import Image from "next/image";
import Button from "./Button";
import { deleteWallboards } from "@/lib/deleteWallboards";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ManageWallboardProps {
  name: string;
  code: string;
  description: string;
  image: string;
  id: string;
}

export default function ManageWallboard(props: ManageWallboardProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const res = await deleteWallboards(id);
    console.log(res);

    if (res.deletedCount === 1) {
      toast.success("Wallboard deleted from the list");
      router.refresh();
    } else {
      toast.error(res);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between hover:scale-105 transition-transform duration-300 py-4 px-8 border border-gray-300">
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div>
          <div className="hidden md:flex">
            <Image
            height={100}
            width={100}
            src={props.image}
            alt={props.name}
            className="rounded-lg"
          />
          </div>
          <div className="md:hidden">
            <Image
            height={300}
            width={300}
            src={props.image}
            alt={props.name}
            className="rounded-lg"
          />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">{props.name}</h3>
          <p className="text-xs">{props.code}</p>
          <p className="text-sm md:text-base my-4 text-justify">{props.description}</p>
        </div>
      </div>
      <div className="flex gap-4 justify-self-end">
        <Button
          text="Delete"
          type="risk"
          task="button"
          onClick={() => handleDelete(props.id)}
        />
      </div>
    </div>
  );
}
