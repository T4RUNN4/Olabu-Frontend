interface StatusCardProps {
    heading: string;
    subHeading: string;
}

export default function StatusCard(props: StatusCardProps) {
    return (
      <div className="flex flex-col gap-2 text-center bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent">
        <h2 className="text-4xl font-bold">{props.heading}</h2>
        <p className="text-xs md:text-sm text-gray-400">{props.subHeading}</p>
      </div>
    );
}