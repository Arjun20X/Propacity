
import { useState, useEffect } from "react";
import { PDF } from "./PDF";

export const PdfList = ({onSelectPdf}) => {

    const [pdf, setPdf] = useState([]);
    const [search, setSearch] = useState("");

  const API = "https://api.npoint.io/dee51ea017d20efdfcc8";

  const fetchPDFData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log("Consoling data....");
      console.log(data);
      setPdf(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPDFData();
  }, []);

  const searchData = pdf.filter((curr) =>
    curr.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mt-2 w-full ">
        <div className="w-full">
            <div>
                <h1>PDF Reader</h1>
            </div>
          <div>
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="+ block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search PDFs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-1 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <ul className=" mx-auto flex flex-col gap-10 mt-5">
          {searchData.map((curr, index) => {
            return (
              <PDF
                pdfData={curr}
                pdfIndex={index}
                onSelectPdfForLink={onSelectPdf}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};


{/* <input
  type="search"
  id="default-search"
  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="Search PDFs..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  required
/>; */}