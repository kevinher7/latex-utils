import "./index.css";

interface LatexCodeDisplayProps {
    code: string;
}

const LatexCodeDisplay = (props: LatexCodeDisplayProps) => {
    return (
        <textarea
            className="latex-code"
            name="latex-code"
            defaultValue={props.code}
        />
    );
};

export default LatexCodeDisplay;
