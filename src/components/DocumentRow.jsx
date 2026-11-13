import { documentHref } from "../hooks/useHashRoute.js";
import Thumbnail from "./Thumbnail.jsx";

export default function DocumentRow({ doc, index }) {
  return (
    <li className="row" style={{ "--i": index }}>
      <span className="row__number" aria-hidden="true">
        {doc.number}
      </span>
      <Thumbnail src={doc.preview} title={doc.title} />
      <div className="row__body">
        <p className="row__meta">
          {doc.year} · {doc.category}
        </p>
        <h2 className="row__title">
          <a href={documentHref(doc.slug)}>{doc.title}</a>
        </h2>
        <p className="row__description">{doc.description}</p>
      </div>
      <svg className="row__arrow" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </li>
  );
}
