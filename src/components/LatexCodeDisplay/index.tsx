import { ChangeEvent, useEffect, useRef } from "react";
import "./index.css";
import { useLatexCodeContext } from "../../context/latexCodeContext";

const LatexCodeDisplay = () => {
    const { latexCode, setLatexCode } = useLatexCodeContext();

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        if (!newValue) {
            setLatexCode("");
            return;
        }

        setLatexCode(newValue);
    };

    useEffect(() => {
        if (!textAreaRef.current) {
            return;
        }
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }, [latexCode]);

    return (
        <div className="latex-code">
            <h2>LaTeX Code</h2>
            <textarea
                className="latex-code__text"
                name="latex-code"
                value={latexCode}
                onChange={handleChange}
                rows={1}
                ref={textAreaRef}
            />
        </div>
    );
};

export default LatexCodeDisplay;
