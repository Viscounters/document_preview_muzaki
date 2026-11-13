import DocumentRow from "./DocumentRow.jsx";

export default function DocumentList({ documents, total, onReset }) {
  return (
    <section aria-labelledby="daftar-judul">
      <h2 id="daftar-judul" className="visually-hidden">
        Daftar dokumen
      </h2>
      <p className="count" aria-live="polite">
        {documents.length} dari {total} dokumen
      </p>
      {documents.length === 0 ? (
        <div className="empty">
          <p>Tidak ada dokumen yang cocok.</p>
          <button type="button" className="link-button" onClick={onReset}>
            Hapus pencarian dan filter
          </button>
        </div>
      ) : (
        <ul className="list">
          {documents.map((doc, index) => (
            <DocumentRow key={doc.slug} doc={doc} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
}
