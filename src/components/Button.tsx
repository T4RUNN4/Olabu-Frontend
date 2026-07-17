interface ButtonsProps {
  text: string;
  btnType: "button" | "submit"
  type: "primary" | "secondary" | "risk";
  onClick?: () => void;
}

const classNames = {
  primary: "btn text-lg bg-linear-to-r from-[#2d0b3e] to-[#68198e] text-white",
  secondary: "btn btn-ghost text-gray-400 text-lg border-2 border-gray-300",
  risk: "btn btn-error text-lg text-white",
};

export default function Button(props: ButtonsProps) {
  return (
    <button type={props.btnType} onClick={props.onClick} className={`${classNames[props.type]} hover:scale-105 transition-transform duration-200`}>
      {props.text}
    </button>
  );
}
