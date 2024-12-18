import { useState, useEffect } from "react";
import { PDF } from "./PDF";

export const PdfList = ({ onSelectPdf }) => {
  const [pdf, setPdf] = useState([]);
  const [search, setSearch] = useState("");

  const API = "https://api.npoint.io/dee51ea017d20efdfcc8";

  const fetchPDFData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPdf(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPDFData();
  }, []);

  const searchData = pdf.filter((curr) =>
    curr.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pdf-list mt-2 w-full">
      <div>
        <h1>PDF Reader</h1>
        <div>
          <form>
            <input
              type="search"
              placeholder="Search PDFs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              className="search-input"
            />
          </form>
        </div>
      </div>

      <ul className="pdf-items mx-auto flex flex-col gap-10 mt-5">
        {searchData.map((curr, index) => (
          <PDF
            pdfData={curr}
            pdfIndex={index}
            onSelectPdfForLink={onSelectPdf}
          />
        ))}
      </ul>
    </div>
  );
};
