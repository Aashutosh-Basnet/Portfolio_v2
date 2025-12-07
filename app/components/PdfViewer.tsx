"use client";

import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader2 } from "lucide-react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
    file: string;
    width: number;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file, width }) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50 flex justify-center min-h-[500px]">
            <Document
                file={file}
                loading={
                    <div className="flex items-center justify-center h-96 text-gray-400">
                        <Loader2 className="animate-spin mr-2" /> Loading Resume...
                    </div>
                }
                error={
                    <div className="flex items-center justify-center h-96 text-red-400">
                        Failed to load PDF. Please download instead.
                    </div>
                }
            >
                <Page
                    pageNumber={1}
                    width={width}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            </Document>
        </div>
    );
};

export default PdfViewer;
