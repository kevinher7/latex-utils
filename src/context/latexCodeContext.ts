import { createContext, useContext } from "react";

interface LatexCodeContextProps {
    latexCode: string | undefined;
    setLatexCode: React.Dispatch<React.SetStateAction<string | undefined>>; // Include the setter function
}

export const LatexCodeContext = createContext<
    LatexCodeContextProps | undefined
>(undefined);

export const useLatexCodeContext = () => {
    const latexCode = useContext(LatexCodeContext);

    if (latexCode === undefined) {
        throw new Error(
            "useLatexCodeContext must be used with a LatexCodeContext.Provider"
        );
    }

    return latexCode;
};
