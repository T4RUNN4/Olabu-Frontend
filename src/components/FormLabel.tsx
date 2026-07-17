interface FormLabelProps {
    text: string;
    isRequired?: boolean
}

export default function FormLabel(props: FormLabelProps) {
    return (
      <label className="label text-xl text-gray-700 font-semibold">
        {props.text}{" "}
        {props.isRequired && <span className="text-sm text-red-500">*</span>}
      </label>
    );
}