"use client"
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import Button from "./Button";

interface BoardProps {
    image: string;
    name: string;
    code: string;
    description: string;
}

export default function WallBoardDeatilsClient(props: BoardProps) {
    const imageSize = 500;
    const [currSize, setCurrSize] = useState("a4");

    return (
        <SectionWrapper
      heading="Wallboard Details"
      subheading="Get detailed information about the wallboard to see if it's matches your reuqirement"
    >
      <div className="md:flex items-center justify-center md:flex-row gap-16">
        <div className="md:w-1/3">
          <Image
            src={props.image}
            alt={props.name}
            width={imageSize}
            height={imageSize}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 mt-4">
          <p className="text-sm text-gray-400 mb-4">Code: {props.code}</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">{props.name}</h2>
          <p className="text-sm">{props.description}</p>

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

          <div className="flex items-center mt-8">
            <p className="text-lg mr-4">Price:</p>
            <p className="text-green-500 text-2xl font-bold mr-2">
              {currSize === "a5" ? "50" : currSize === "a4" ? "90" : "150"}
            </p>
            <p className="text-lg">BDT</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
    )
}