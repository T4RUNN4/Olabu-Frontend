interface FormErrorMessageProps {
  text?: string;
}

export default function FormErrorMessage(props: FormErrorMessageProps) {
  return <span className="text-sm text-red-600">{props.text}</span>;
}
