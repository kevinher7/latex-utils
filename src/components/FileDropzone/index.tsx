import { useCallback, useState } from "react";

import { FileWithPath, useDropzone } from "react-dropzone";

import FileDataDisplay from "../FileDataDisplay";

import FileData from "../../types/FileData";

import UploadIcon from "../../assets/upload.svg";
import "./index.css";

const FileDropzone = () => {
    const [fileData, setFileData] = useState<FileData | null>(null);
    const onDrop = useCallback((acceptedFiles: readonly FileWithPath[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
            // Do whatever you want with the file contents
            const csvData = reader.result;
            if (typeof csvData !== "string") {
                throw new TypeError(
                    "File should be read using 'readAsText' method"
                );
            }

            setFileData({
                name: file.name,
                size: `${file.size} KB`,
                contents: csvData,
            });
        };
        reader.readAsText(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
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
                            alt="Upload!"
                            className="dropzone__upload-icon"
                        />
                    ) : (
                        <p> Drag and drop some files here, or click browse</p>
                    )}
                </>
            )}
        </section>
    );
};

export default FileDropzone;
