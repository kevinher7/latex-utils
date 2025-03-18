import { Link } from "react-router-dom";
import "./index.css";

const ProcessButton = () => {
    return (
        <Link to={"/table"} className="process-button">
            Process
        </Link>
    );
};

export default ProcessButton;
