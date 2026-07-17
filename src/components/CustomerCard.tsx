import Image from "next/image";

interface CustomerCardProps {
    name: string;
    gender: string;
    date: string;
    review: string;
}

export default function CustomerCard(props: CustomerCardProps) {
    return (
      <div className="flex flex-col items-center md:flex-row gap-4 p-4 border border-gray-300 hover:scale-105 transition-transform duration-200">
        <div className="h-20 w-20 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
          <Image
            alt={props.name}
            src={
              props.gender === "male"
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojCezaZ85X2c7xvbqX_xXln264upnrThXcJcsAbzOHGS1gmA0FbyetAQn&s=10"
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt1akkUB-VZlSAs6v8ptLIdlOwjACEBQo2Qna5fhJNg&s=10"
            }
            height={80}
            width={80}
          />
        </div>
        <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{props.name}</h1>
            <h2 className="text-sm text-gray-500 mb-4">{props.date}</h2>
            <p>{props.review}</p>
        </div>
      </div>
    );
}