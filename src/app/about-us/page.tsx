import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export default function AboutUs() {
  return (
    <SectionWrapper
      heading="About Us"
      subheading="Who are we and what do we do"
    >
      <div className="flex flex-col gap-8 text-lg text-justify">
        <p>
          OLABU is a customized PVC wallboards brand from Bangladesh. We offer
          customized PVC wallboard for our customers in various size range
          starting from 6inch * 8 inch. Each board has a very high quality image
          print. Also, with each order, they provide free double-sided tape to
          stick the wallboards on the surface.
        </p>

        <p>The two unqiue features or Unique Selling Points of OLABU are:</p>

        <ol className="ml-4">
          <li>
            1. We offer premium glossy lamination which is offered by no one in
            Bangladesh right Now. This makes our boards waterproof and
            UV-resistant; also best in the quality.
          </li>
          <li>
            2. We offer a 10 year guarentee card which will replace any
            wallboard that is faded color in a 10 year-span with a normal
            condition used.
          </li>
        </ol>
      </div>

      <div className="text-lg mt-12">
        <p>
          Facebook Page:-{" "}
          <Link
            className="font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent"
            href="https://www.facebook.com/profile.php?id=61588844795333"
          >
            @/olabu
          </Link>{" "}
        </p>
        <p>
          Email Address:-{" "}
          <Link
            className="font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent"
            href="mailto:theolabu67@gmail.com"
          >
            theolabu67@gmail.com
          </Link>{" "}
        </p>
        <p>
          Contact Number:-{" "}
          <Link
            className="font-bold bg-linear-to-r from-[#2d0b3e] to-[#68198e] bg-clip-text text-transparent"
            href="tel:+8801870850906"
          >
            +880 1870 850906
          </Link>
        </p>
      </div>
    </SectionWrapper>
  );
}
