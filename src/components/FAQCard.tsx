interface FAQCardProps {
  qus: string;
  ans: string;
}

export default function FAQCard(props: FAQCardProps) {
  return (
    <details
      className="collapse border border-gray-300"
      name="my-accordion-det-1"
      open
    >
      <summary className="collapse-title text-xl">{props.qus}</summary>
      <div className="collapse-content">{props.ans}</div>
    </details>
  );
}
