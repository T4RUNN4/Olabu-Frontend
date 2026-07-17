import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import SectionWrapper from "@/components/SectionWrapper";

export default function Register() {
  return (
    <SectionWrapper
      heading="Registration Form"
      subheading="Join the OLABU community and place and track your orders"
    >
      <form className="fieldset border-base-300 rounded-box border p-12">
        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Full Name" isRequired />
          <input type="text" className="input w-full focus:border focus:border-gray-500" placeholder="John Doe" />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Email Address" isRequired />
          <input type="email" className="input w-full focus:border focus:border-gray-500" placeholder="johndoe@example.com" />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Password" isRequired />
          <input type="password" className="input w-full focus:border focus:border-gray-500" placeholder="*****" />
        </div>

        <div className="flex flex-col gap-2 justify-center mb-4">
          <FormLabel text="Confirm Password" isRequired />
          <input type="password" className="input w-full focus:border focus:border-gray-500" placeholder="*****" />
        </div>

        <Button text="Register" type="primary" task="button" btnType="submit" />
      </form>
    </SectionWrapper>
  );
}
