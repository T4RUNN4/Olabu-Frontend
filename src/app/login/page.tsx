import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";

export default function Register() {
  return (
    <SectionWrapper heading="Login Form" subheading="Login to place your order and track your parcels">
      <form className="fieldset border-base-300 rounded-box border p-12">
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Email Address" isRequired />
          <input
            type="email"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Confirm Password" isRequired />
          <input
            type="password"
            className="input w-full focus:border focus:border-gray-500"
            placeholder="*****"
          />
        </div>

        <Button text="Login" type="primary" task="button" btnType="submit" />
      </form>
    </SectionWrapper>
  );
}
