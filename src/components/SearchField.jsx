export default function SearchField({ value, onChange }) {
  return (
    <div className="search">
      <label className="search__label" htmlFor="cari">
        Cari dokumen
      </label>
      <input
        id="cari"
        className="search__input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Judul, kategori, atau tahun"
        autoComplete="off"
      />
    </div>
  );
}
