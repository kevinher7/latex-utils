import FileData from "../../types/FileData";

import CSVIcon from "../../assets/csv.svg";

import "./index.css";

interface FileDataDisplayProps {
    data: FileData;
}

const FileDataDisplay = (props: FileDataDisplayProps) => {
    return (
        <div className="file-data-display">
            <img src={CSVIcon} alt="CSV" className="csv" />
            <div className="file-data-display__properties">
                <h2>{props.data.name}</h2>
                <p>{props.data.size}</p>
                <p>Preview</p>
                <p>{props.data.contents}</p>
            </div>
        </div>
    );
};

export default FileDataDisplay;
