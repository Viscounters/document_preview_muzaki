import { useEffect, useState } from "react";

const PREFIX = "#/dokumen/";

function readSlug() {
  const { hash } = window.location;
  return hash.startsWith(PREFIX) ? decodeURIComponent(hash.slice(PREFIX.length)) : null;
}

export function useHashRoute() {
  const [slug, setSlug] = useState(readSlug);

  useEffect(() => {
    const onChange = () => {
      setSlug(readSlug());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return slug;
}

export function documentHref(slug) {
  return `${PREFIX}${encodeURIComponent(slug)}`;
}
