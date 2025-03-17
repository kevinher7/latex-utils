import FileData from "../../types/FileData";

import CSVIcon from "../../assets/csv.svg";

import "./index.css";
import PreviewTable from "../PreviewTable";

interface FileDataDisplayProps {
    data: FileData;
}

const FileDataDisplay = (props: FileDataDisplayProps) => {
    return (
        <div className="file-data-display">
            <div className="file-data-display__properties">
                <img src={CSVIcon} alt="CSV" className="csv" />
                <h2>{props.data.name}</h2>
                <p>{props.data.size}</p>
            </div>
            <div className="file-data-display__preview">
                <h3>Data Preview</h3>
                <PreviewTable datapoints={props.data.contents} />
            </div>
        </div>
    );
};

export default FileDataDisplay;
