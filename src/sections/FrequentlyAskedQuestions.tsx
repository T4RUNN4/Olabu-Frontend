import FAQCard from "@/components/FAQCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function FrequentlyAskedQuestions() {
  const qna = [
    {
      qus: "What type of finishing do you offer?",
      ans: "We offer Premium Glossy Finishing in our every wallboards",
    },
    {
      qus: "What size do you offer?",
      ans: "We offer every size starting from the A5 (6 inch * 8 inch)",
    },
    {
      qus: "What is the return/excahnge policy",
      ans: "We offer 10 years color guarantee for every boards that is used under natural home condition",
    },
  ];

  return (
    <SectionWrapper
      heading="Frequently Asked Questions"
      subheading="Questions we receive often from our customers"
    >
      <div className="flex flex-col gap-2">
        {qna.map((each) => (
          <FAQCard qus={each.qus} ans={each.ans} />
        ))}
      </div>
    </SectionWrapper>
  );
}
