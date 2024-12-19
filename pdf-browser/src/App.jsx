import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PDFReader } from "./components/PDFReader";
import { useState } from "react";
import { PdfList } from "./components/PDFList";

const App = () => {

  const [pdfLink, setPdfLink] = useState("");

  

  // Function to handle the pdf selection
  const handleSelectPdf = (link) => {
    console.log(link);
    setPdfLink(link);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PdfList onSelectPdf={handleSelectPdf} />} />
          <Route path="/reader" element={<PDFReader PdfLink={pdfLink} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
