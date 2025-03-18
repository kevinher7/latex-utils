import LatexCodeDisplay from "../../components/LatexCodeDisplay";
import LatexTableDisplay from "../../components/LatexTableDisplay";

import "./index.css";

const c =
    " \
\\begin{table}[H]\n\
    \\centering\n\
    \\caption{I'm a caption for test.csv}\n\
    \\label{tab:test}\n\
    \\begin{tabular}{c|c}\n\
        \\toprule\n\
            1.0 & 0.2234\\\\\n\
        \\midrule\n\
            3 & 42.32\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
            1 & 2\\\\\n\
            3 & 4\\\\\n\
        \\bottomrule\n\
    \\end{tabular}\n\
\\end{table}\
    ";

const TableUtilPage = () => {
    return (
        <>
            <h1>Processing Result</h1>
            <section className="latex-display">
                <LatexCodeDisplay code={c} />
                <LatexTableDisplay />
            </section>
        </>
    );
};

export default TableUtilPage;
