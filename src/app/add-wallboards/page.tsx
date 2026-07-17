import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";

export default function AddWallboards() {
  return (
    <SectionWrapper
      heading="Add Wallboards"
      subheading="Add wallboards to your collection"
    >
      <form className="fieldset border-base-300 rounded-box border p-12">
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Wallboard Name" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="Everything in time"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Order Code" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="lm10-wc-01"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Wallboard Image" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="https://example.com"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Short Description" isRequired />
          <input
            type="text"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="The wallboards features the iconic moment of Lionel Messi receiving Fifa World Cup 2022."
          />
        </div>

        <Button text="Add to the Collection" type="primary" task="button" btnType="submit" />
      </form>
    </SectionWrapper>
  );
}
