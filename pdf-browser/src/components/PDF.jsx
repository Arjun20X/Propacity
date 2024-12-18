import {NavLink} from "react-router-dom";

import "./PDF.css";

export const PDF = ({ pdfData,pdfIndex, onSelectPdfForLink}) => {
  return (
    <>
      <li className="rounded-lg" key={pdfIndex}>
        <img
          src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/10/download-10.webp"
          width={150}
        />
        <div className="flex flex-col gap-6 ">
          <p className="font-bold text-3xl ">
            Title: <span className="text-red-700 ">{pdfData.name}</span>{" "}
          </p>
          <p className="font-bold text-2xl ">
            Authors : <span className="text-red-700 ">{pdfData.author}</span>
          </p>
          <p className="font-bold text-xl ">
            Published :{" "}
            <span className="text-red-700 ">{pdfData.published} </span>
          </p>
        </div>
        <NavLink to="/reader">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => onSelectPdfForLink(pdfData.link)}
          >
            READ
          </button>
        </NavLink>
      </li>
    </>
  );
};
