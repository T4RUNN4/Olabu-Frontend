interface PageSubheadingProps {
    text: string;
}

export default function PageSubHeading(props: PageSubheadingProps) {
    return(
        <p className="text-lg mt-2 text-gray-700">
            {props.text}
        </p>
    )
}