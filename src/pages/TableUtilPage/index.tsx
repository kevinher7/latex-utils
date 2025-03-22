import { useState } from "react";
import LatexCodeDisplay from "../../components/LatexCodeDisplay";
import LatexTableDisplay from "../../components/LatexTableDisplay";
import { LatexCodeContext } from "../../context/latexCodeContext";

import "./index.css";

const c =
    " \
\\begin{table}[H]\n\
    \\centering\n\
    \\caption{I'm a caption for test.csv}\n\
    \\label{tab:test}\n\
    \\begin{tabular}{c|c}\n\
            1.0 & 0.2234\\\\\n\
            3 & 42.32\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
    \\end{tabular}\n\
\\end{table}\
    ";

const TableUtilPage = () => {
    const [latexCode, setLatexCode] = useState<string | undefined>(c);

    return (
        <>
            <h1>Processing Result</h1>
            <section className="latex-display">
                <LatexCodeContext.Provider value={{ latexCode, setLatexCode }}>
                    <LatexCodeDisplay />
                    <LatexTableDisplay />
                </LatexCodeContext.Provider>
            </section>
        </>
    );
};

export default TableUtilPage;
