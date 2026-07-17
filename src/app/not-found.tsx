import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

export default function NotFound() {
    return (
        <SectionWrapper heading="404 - Not Found" subheading="The page you are looking for is not available">
            <div className="flex gap-4">
                <Button type="primary" task="hyperlink" href="/wallboards" text="Explore our wallboards" />
                <Button type="secondary" task="hyperlink" href="/" text="Go to home" />
            </div>
        </SectionWrapper>
    )
}