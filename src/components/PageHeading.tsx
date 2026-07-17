interface PageHeadingProps {
  text: string;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <h1 className="text-6xl font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent">
      {props.text}
    </h1>
  );
}
