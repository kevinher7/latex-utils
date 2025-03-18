import { useCallback, useEffect, useState } from "react";

import { FileWithPath, useDropzone } from "react-dropzone";

import FileDataDisplay from "../FileDataDisplay";
import useParseData from "../../hooks/useParseData";

import FileData from "../../types/FileData";
import UploadStatus from "../../types/UploadStatus";

import UploadIcon from "../../assets/upload.svg";

import "./index.css";
import ProcessButton from "../ProcessButton";

const FileDropzone = () => {
    const [fileData, setFileData] = useState<FileData | null>(null);
    const [status, setStatus] = useState<UploadStatus>("idle");

    const [currentFile, setCurrentFile] = useState<File | null>(null);
    const { datapoints, getDatapoints } = useParseData();

    useEffect(() => {
        if (!datapoints || !currentFile) {
            return;
        }

        setFileData({
            name: currentFile.name,
            size: `${currentFile.size} KB`,
            contents: datapoints,
        });
    }, [datapoints]);

    const onDrop = useCallback((acceptedFiles: readonly FileWithPath[]) => {
        const file = acceptedFiles[0];
        setCurrentFile(file);

        const reader = new FileReader();

        reader.onabort = () => {
            console.log("File reading was aborted");
            setStatus("error");
        };

        reader.onerror = () => {
            console.error("File reading has failed");
            setStatus("error");
        };

        reader.onload = () => {
            const csvData = reader.result;

            if (typeof csvData !== "string") {
                throw new TypeError(
                    "File should be read using 'readAsText' method"
                );
            }

            getDatapoints(csvData);
            setStatus("success");
        };

        reader.readAsText(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <>
            <section
                {...getRootProps()}
                className={isDragActive ? "dropzone input_drag" : "dropzone"}
            >
                {fileData ? (
                    <FileDataDisplay data={fileData} />
                ) : (
                    <>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <img
                                src={UploadIcon}
                                alt="Dw, Let the click button go!"
                                className="dropzone__upload-icon"
                            />
                        ) : (
                            <p>
                                Drag and drop some files here, or click browse
                            </p>
                        )}
                    </>
                )}
            </section>
            {currentFile && status !== "uploading" && <ProcessButton />}
        </>
    );
};

export default FileDropzone;
