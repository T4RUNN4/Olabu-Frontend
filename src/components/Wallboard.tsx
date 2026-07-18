import Button from "./Button";

interface WallboardProps {
    id: string;
    image: string;
    name: string;
    code: string;
    description: string;
}

export default function Wallboard(props: WallboardProps) {
  return (
    <div className="flex flex-col border-2 border-solid border-gray-300 p-4 hover:scale-105 transition-transform duration-200">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-auto"
      />
      <p className="text-xs text-gray-500 mt-7">Code: {props.code}</p>
      <h3 className="text-xl font-bold">{props.name}</h3>

      <p className="text-xs text-gray-700 mt-2 text-justify">{props.description}</p>

      <div className="flex flex-col mt-8">
        <p className="text-sm text-gray-700">Size: 08 inch * 12 inch</p>
        <div className="flex items-center gap-4">
          <p className="text-red-400 text-lg line-through">
            {Math.floor(Math.random() * 31) + 100} bdt
          </p>
          <p className="text-green-500 text-2xl font-bold">90 bdt</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8">
        <Button text="View Details" type="primary" task="hyperlink" href={`/wallboards/${props.id}`} />
      </div>
    </div>
  );
}
