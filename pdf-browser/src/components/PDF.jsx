import { NavLink } from "react-router-dom";

export const PDF = ({ pdfData, pdfIndex, onSelectPdfForLink }) => {
  return (
    <li className="pdf-item rounded-lg" key={pdfIndex}>
      <img
        src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/10/download-10.webp"
        alt="PDF Thumbnail"
        width={150}
      />
      <div className="details flex flex-col gap-6">
        <p className="font-bold text-3xl">
          Title: <span className="text-red-700">{pdfData.name}</span>
        </p>
        <p className="font-bold text-2xl">
          Authors: <span className="text-red-700">{pdfData.author}</span>
        </p>
        <p className="font-bold text-xl">
          Published: <span className="text-red-700">{pdfData.published}</span>
        </p>
      </div>
      <NavLink to="/reader">
        <button
          className="read-btn text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5"
          onClick={() => onSelectPdfForLink(pdfData.link)}
        >
          READ
        </button>
      </NavLink>
    </li>
  );
};
