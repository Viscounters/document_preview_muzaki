export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="filter" role="group" aria-label="Filter kategori">
      {categories.map((name) => (
        <button
          key={name}
          type="button"
          className="filter__button"
          aria-pressed={name === active}
          onClick={() => onSelect(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
