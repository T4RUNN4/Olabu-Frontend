import Link from "next/link";

type ButtonProps =
  | {
      text: string;
      type: "primary" | "secondary" | "risk";
      task: "hyperlink";
      href: string;
    }
  | {
      text: string;
      type: "primary" | "secondary" | "risk";
      task?: "button";
      btnType?: "submit" | "button";
      onClick?: () => void;
    };

const classNames = {
  primary: "btn bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white",
  secondary: "btn btn-ghost text-gray-400 border-2 border-gray-300",
  risk: "btn btn-error text-white",
};

export default function Button(props: ButtonProps) {
  if (props.task === "hyperlink") {
    return (
      <Link
        href={props.href}
        className={`${classNames[props.type]} hover:scale-105 transition-transform duration-200`}
      >
        {props.text}
      </Link>
    );
  }

  return (
    <button
      type={props.btnType}
      onClick={props.onClick}
      className={`${classNames[props.type]} hover:scale-105 transition-transform duration-200`}
    >
      {props.text}
    </button>
  );
}
