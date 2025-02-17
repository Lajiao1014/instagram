"use client";

import React, { useRef, useState } from 'react';

export const uploadStyle = {
    headImage: "text-2xl w-40 h-40 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer mb-2 bg-gray-400 hover:bg-gray-500",
    new: "text-2xl w-16 h-16 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer mb-2 bg-gray-400 hover:bg-gray-500",
}

interface UploadProps {
    style?: string;
    onFileSelect?: (file: File) => void;
    defaultText?: string;
}

const Upload: React.FC<UploadProps> = ({
    style = uploadStyle.headImage || uploadStyle.new,
    onFileSelect,
    defaultText = "+"
}) => {

    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setFileName(file.name);
            onFileSelect?.(file);
        }
    };

    return (
        <div >
            <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <div className={style} onClick={() => fileInputRef.current?.click()}>
                {fileName ? <p>{fileName}</p> : <p>{defaultText}</p>}
            </div>
        </div>
    );
};

export default Upload; 