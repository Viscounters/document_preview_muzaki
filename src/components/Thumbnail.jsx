import { useState } from "react";

const fileUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function Thumbnail({ src, title }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="thumb">
      {src && !failed ? (
        <img
          src={fileUrl(src)}
          alt={`Pratinjau halaman pertama: ${title}`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="thumb__fallback" aria-hidden="true">
          PDF
        </span>
      )}
    </div>
  );
}
