import { useCallback, useState } from "react";

interface LatexTable {
    caption: string;
    contents: string | null;
}

const useParseLatex = () => {
    const [tableMathJax, setTableMathJax] = useState<LatexTable | null>(null);

    const parseLatexCode = useCallback((latexCode: string) => {
        const captionRegex = /\\caption\{([^}]+)\}/;
        const tabularRegex =
            /\\begin\{tabular\}.*?\n(.*)\n.*?\\end\{tabular\}/s;

        const captionMatch = latexCode.match(captionRegex);
        const tabularMatch = latexCode.match(tabularRegex);

        if (!captionMatch) {
            console.log("No caption provided!");
            return;
        }

        if (!tabularMatch) {
            setTableMathJax({
                caption: captionMatch[1] ?? "",
                contents: null,
            });

            return;
        }

        const rows = tabularMatch[1].split("\n").map((row) => {
            if (row.includes("&")) {
                return `${row}\n`;
            }
            return "";
        });

        let tableContents = "";
        for (const row of rows) {
            tableContents += row;
        }

        setTableMathJax({
            caption: captionMatch[1] ?? "",
            contents: tableContents,
        });
    }, []);

    return { tableMathJax, parseLatexCode };
};

export default useParseLatex;
