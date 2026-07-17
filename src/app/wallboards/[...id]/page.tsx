"use client";

import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useState } from "react";

export default function WallboardDetails() {
  const imageSize = 500;
  const [currSize, setCurrSize] = useState("a4");

  const board = {
    image:
      "https://scontent.fcgp37-1.fna.fbcdn.net/v/t39.30808-6/733309621_122107350375294826_1753807513447775702_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7Ak-TEfk8JVOu8OMxSEQ7Q9rvIXAiOaxD2u8hcCI5rKRrjOdwrOd8cWEhzzPpO5eIArI5kdfTtZj_wgjqd451&_nc_ohc=2bdQv7FzOmYQ7kNvwGEljOF&_nc_oc=Adr2e2aCbcnee_Iwvst5jFuGaXp_1w8cKSlL2rA-Ys0g7FlwCoxn8S9AfirH3oTHFu0&_nc_zt=23&_nc_ht=scontent.fcgp37-1.fna&_nc_gid=D4Fo3qqxZZfZOd1Rvkt28g&_nc_ss=7b2a8&oh=00_AQAJUgch2qiJ0pUm-00-gxh_cr06ww1Og-dQY_LMHK8OTQ&oe=6A5FF0AB",
    name: "Everything In Time",
    code: "lm10-wc-01",
    description:
      "The wallboards features the iconic moment of Lionel Messi receiving Fifa World Cup 2022.",
    _id: "a1",
  };

  return (
    <SectionWrapper
      heading="Wallboard Details"
      subheading="Get detailed information about the wallboard to see if it's matches your reuqirement"
    >
      <div className="md:flex items-center justify-center md:flex-row gap-16">
        <div className="md:w-1/3">
          <Image
            src={board.image}
            alt={board.name}
            width={imageSize}
            height={imageSize}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 mt-4">
          <p className="text-sm text-gray-400 mb-4">Code: {board.code}</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">{board.name}</h2>
          <p className="text-sm">{board.description}</p>

          <div className="my-12 flex gap-4 text-lg">
            <div className="flex flex-col gap-2 text-gray-700">
              <p>Material</p>
              <p>Finishing</p>
              <p>Thickness</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>: Poly-vinyl Chloride (PVC)</p>
              <p>: Glossy Finishing</p>
              <p>: 3 mm</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <p className="text-lg mr-4">Sizes:</p>
            <Button
              text="6`` * 8``"
              type={currSize === "a5" ? "primary" : "secondary"}
              task="button"
              onClick={() => setCurrSize("a5")}
            />
            <Button
              text="8`` * 12``"
              type={currSize === "a4" ? "primary" : "secondary"}
              task="button"
              onClick={() => setCurrSize("a4")}
            />
            <Button
              text="12`` * 16``"
              type={currSize === "a3" ? "primary" : "secondary"}
              task="button"
              onClick={() => setCurrSize("a3")}
            />
          </div>

          <div className="flex items-center gap-4 mt-8">
            <p className="text-lg mr-4">Price:</p>
            <p className="text-green-500 text-2xl font-bold">
              {currSize === "a5" ? "50" : currSize === "a4" ? "90" : "150"}
            </p>
            <p className="text-lg">BDT</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
