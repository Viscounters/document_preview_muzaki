export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === "dark" ? "terang" : "gelap";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Ganti ke tema ${next}`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      <span>Tema {next}</span>
    </button>
  );
}
