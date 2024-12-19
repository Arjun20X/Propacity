import React from "react";

export const PDFReader = ({ PdfLink }) => {
  return (
    <div>
      {PdfLink ? (
        <div>
          <h2>Reading PDF</h2>
          <iframe
            src={PdfLink}
            title="PDF Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          ></iframe>
        </div>
      ) : (
        <p>Select a PDF to view it here.</p>
      )}
    </div>
  );
};
