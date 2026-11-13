import { useMemo, useState } from "react";
import { documents, site } from "./data/documents.js";
import { useHashRoute } from "./hooks/useHashRoute.js";
import { useTheme } from "./hooks/useTheme.js";
import SiteHeader from "./components/SiteHeader.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import SearchField from "./components/SearchField.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import DocumentList from "./components/DocumentList.jsx";
import DocumentViewer from "./components/DocumentViewer.jsx";

const ALL = "Semua";

const numbered = documents.map((doc, i) => ({
  ...doc,
  number: String(i + 1).padStart(2, "0"),
}));

function matches(doc, query) {
  const haystack = `${doc.title} ${doc.description} ${doc.category} ${doc.year}`.toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

export default function App() {
  const slug = useHashRoute();
  const [theme, toggleTheme] = useTheme();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...new Set(numbered.map((d) => d.category))],
    []
  );

  const visible = useMemo(
    () =>
      numbered.filter(
        (d) => (category === ALL || d.category === category) && matches(d, query)
      ),
    [query, category]
  );

  const reset = () => {
    setQuery("");
    setCategory(ALL);
  };

  const current = slug ? numbered.find((d) => d.slug === slug) : null;

  return (
    <>
      <a className="skip-link" href="#konten">
        Lompat ke konten
      </a>
      <SiteHeader {...site}>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </SiteHeader>
      <main id="konten" className="page">
        {slug ? (
          <DocumentViewer doc={current} />
        ) : (
          <>
            <div className="toolbar">
              <SearchField value={query} onChange={setQuery} />
              <CategoryFilter
                categories={categories}
                active={category}
                onSelect={setCategory}
              />
            </div>
            <DocumentList documents={visible} total={numbered.length} onReset={reset} />
          </>
        )}
      </main>
    </>
  );
}
