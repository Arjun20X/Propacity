import { NavLink } from "react-router-dom";

export const PDF = ({ pdfData, pdfIndex, onSelectPdfForLink }) => {
  return (
<<<<<<< HEAD
    <>
      <li className=" flex flex-wrap gap-5  rounded-lg" key={pdfIndex}>
        <div>
          <img
            src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/10/download-10.webp"
            width={150}
          />
        </div>

        <div className=" md:absolute md:left-52 flex flex-col gap-6 ">
          <p className="font-extrabold text-3xl text-yellow-300 ">
            Title:{" "}
            <span className="text-white font-bold underline">
              {pdfData.name}
            </span>{" "}
          </p>
          <p className="font-extrabold text-2xl text-yellow-300  ">
            Authors :{" "}
            <span className="text-white font-bold underline">
              {pdfData.author}
            </span>
          </p>
          <p className="font-extrabold text-xl text-yellow-300  ">
            Published :{" "}
            <span className="text-white font-bold underline">
              {pdfData.published}{" "}
            </span>
          </p>
        </div>
        <div>
          <NavLink to="/reader">
            <button
              class=" text-white bg-[#1c65f2] focus:ring-2 focus:ring-slate-900 font-medium rounded-lg text-sm px-10 py-3 me-2 mb-2 dark:bg-[#1c65f2] focus:outline-none dark:focus:ring-slate-900 hover:bg-blue-700"
              onClick={() => onSelectPdfForLink(pdfData.link)}
            >
              <span className="text-xl font-bold ">READ</span>
            </button>
          </NavLink>
        </div>
      </li>
    </>
=======
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
>>>>>>> 7495c2c504f014888ef577d200f7bb7c9da50ffd
  );
};
