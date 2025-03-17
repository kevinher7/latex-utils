import { useCallback, useState } from "react";

const useParseData = () => {
    const [datapoints, setDatapoints] = useState<string | null>(null);

    const getDatapoints = useCallback((data: string) => {
        data = data.replaceAll(" ", "\n");
        setDatapoints(data);
    }, []);

    return { datapoints, getDatapoints };
};

export default useParseData;
