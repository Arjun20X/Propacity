import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export const PDFReader = ({ PdfLink }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      {PdfLink ? (
        <div>
          <h2>Reading PDF</h2>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={PdfLink} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      ) : (
        <p>Select a PDF to view it here.</p>
      )}
    </div>
  );
};
