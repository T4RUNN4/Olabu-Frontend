import PageHeading from "@/components/PageHeading";
import PageSubHeading from "@/components/PageSubheading";

interface SectionWrapperProps {
    heading: string;
    subheading: string;
    children: React.ReactNode;
}

export default function SectionWrapper(props: SectionWrapperProps) {
  return (
    <section className="flex flex-col mt-24 min-h-screen">
      <PageHeading text={props.heading} />
      <PageSubHeading text={props.subheading} />

      <div className="mt-20">
        {props.children}
      </div>
    </section>
  );
}
