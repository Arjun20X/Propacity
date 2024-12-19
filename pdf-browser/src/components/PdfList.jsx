import { useState, useEffect } from "react";
import { PDF } from "./PDF";
import Pdf from "../assets/Pdf.png"; // Adjust relative path
import { BeatLoader } from "react-spinners"; // Import a spinner (install react-spinners if needed)

export const PdfList = ({ onSelectPdf }) => {
  const [pdf, setPdf] = useState([]);
  const [search, setSearch] = useState("");
<<<<<<< HEAD
  const [loading, setLoading] = useState(true); // Loading state
=======
>>>>>>> 7495c2c504f014888ef577d200f7bb7c9da50ffd

  const API = "https://api.npoint.io/dee51ea017d20efdfcc8";

  const fetchPDFData = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(API);
      const data = await res.json();
<<<<<<< HEAD
      console.log("Fetched data:", data);
      setPdf(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // End loading
=======
      setPdf(data);
    } catch (error) {
      console.error(error);
>>>>>>> 7495c2c504f014888ef577d200f7bb7c9da50ffd
    }
  };

  useEffect(() => {
    fetchPDFData();
  }, []);

  const searchData = pdf.filter((curr) =>
    curr.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
<<<<<<< HEAD
    <>
      <div className="mt-2 w-full">
        <div className="w-full">
          <nav className="bg-white shadow-2xl dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-col gap-4 md:flex-row md:max-w-full md:flex md:flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex justify-end items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-10"
                  alt="Flowbite Logo"
                />
                <span className="cursor-default self-center text-4xl font-bold whitespace-nowrap dark:text-white">
                  PDF READER
                </span>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-500"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-[20rem] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search PDFs..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>

        {loading ? (
          // Loader spinner
          <div className="flex justify-center items-center h-screen">
            <BeatLoader color="#3498db" size={15} />
          </div>
        ) : (
          <ul className="mx-auto flex flex-col gap-7 mt-40 md:mt-28 mb-10">
            {Array.isArray(searchData) && searchData.length > 0 ? (
              searchData.map((curr, index) => (
                <PDF
                  key={curr.id || index} // Use unique ID if available
                  pdfData={curr}
                  pdfIndex={index}
                  onSelectPdfForLink={onSelectPdf}
                />
              ))
            ) : (
              <div className="text-center h-lvh my-auto text-3xl text-white">
                No Such Pdf Found
              </div>
            )}
          </ul>
        )}
=======
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
>>>>>>> 7495c2c504f014888ef577d200f7bb7c9da50ffd
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
