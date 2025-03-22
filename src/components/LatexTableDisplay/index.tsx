import { useEffect } from "react";

import { MathJax } from "better-react-mathjax";

import { useLatexCodeContext } from "../../context/latexCodeContext";

import useParseLatex from "../../hooks/useParseLatex";

import "./index.css";

const LatexTableDisplay = () => {
    const { latexCode } = useLatexCodeContext();

    const { tableMathJax, parseLatexCode } = useParseLatex();

    useEffect(() => {
        if (!latexCode) {
            return;
        }

        parseLatexCode(latexCode);
    }, [latexCode]);

    return (
        <div className="table-preview">
            <h2>Table Preview</h2>
            {tableMathJax ? (
                tableMathJax.contents ? (
                    <div className="table-preview__math-jax">
                        <MathJax>{`\\[\\text{${tableMathJax.caption}}\\]`}</MathJax>
                        <MathJax>
                            {`\
                            \\[ \
                            \\begin{matrix} \
                                ${tableMathJax.contents}
                            \\end{matrix}\\]\
                            `}
                        </MathJax>
                    </div>
                ) : (
                    <p className="table-preview__error">
                        No tabular environment found!
                    </p>
                )
            ) : (
                <p className="table-preview__warning">No code to parse!</p>
            )}
        </div>
    );
};

export default LatexTableDisplay;
