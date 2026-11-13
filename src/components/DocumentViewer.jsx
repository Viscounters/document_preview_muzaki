const fileUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function DocumentViewer({ doc }) {
  if (!doc) {
    return (
      <article className="viewer">
        <a className="viewer__back" href="#/">
          Kembali ke daftar
        </a>
        <p className="empty">Dokumen tidak ditemukan.</p>
      </article>
    );
  }

  const src = fileUrl(doc.file);

  return (
    <article className="viewer">
      <a className="viewer__back" href="#/">
        Kembali ke daftar
      </a>
      <p className="viewer__meta">
        {doc.number} · {doc.category} · {doc.year}
      </p>
      <h2 className="viewer__title">{doc.title}</h2>
      <p className="viewer__description">{doc.description}</p>
      <p className="viewer__actions">
        <a href={src} target="_blank" rel="noopener noreferrer">
          Buka di tab baru
        </a>
        <a href={src} download>
          Unduh
        </a>
      </p>
      <iframe className="viewer__frame" src={src} title={doc.title} />
    </article>
  );
}
