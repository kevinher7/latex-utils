import "./index.css";

interface PreviewTableProps {
    datapoints: string;
}

const PreviewTable = (props: PreviewTableProps) => {
    return (
        <table className="preview-table">
            <thead>
                <tr>
                    <th className="preview-table__head_x">x</th>
                    <th className="preview-table__head_y">y</th>
                </tr>
            </thead>
            <tbody>
                {props.datapoints
                    .split("\n")
                    .slice(0, 4)
                    .map((dataPair, rowIndex) => {
                        // Split the dataPair into individual cells assuming a comma separates them.
                        const [x, y] = dataPair.split(",");
                        return (
                            <tr key={rowIndex}>
                                <td>{x}</td>
                                <td>{y}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default PreviewTable;
