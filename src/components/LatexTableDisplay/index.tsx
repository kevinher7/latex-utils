import { MathJax } from "better-react-mathjax";

const LatexTableDisplay = () => {
    return (
        <div>
            <MathJax>{"\\[\\textbf{I'm a caption for test.csv} \\]"}</MathJax>
            <MathJax>
                {
                    "\
                    \\[ \
                    \\begin{matrix} \
                        x     & y      \\\\ \
                        1.0   & 0.2234 \\\\ \
                        3     & 42.32  \\\\ \
                        1     & 2      \\\\ \
                        3     & 4      \\\\ \
                        1     & 2      \\\\ \
                        3     & 4      \\\\ \
                        1     & 2      \\\\ \
                        3     & 4      \
                    \\end{matrix}\\]\
                    "
                }
            </MathJax>
        </div>
    );
};

export default LatexTableDisplay;
