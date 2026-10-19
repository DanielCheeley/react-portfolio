import { useEffect, useState } from "react";
import { projects, type ProjectKey } from "../data/projects";

// Keep hash navigation, document titles, and scrolling together.
export function usePortfolioNavigation() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => {
      setHash(window.location.hash);
      if (window.location.hash.startsWith("#/")) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const key = hash.replace("#/projects/", "");
  const selected = Object.hasOwn(projects, key)
    ? (key as ProjectKey)
    : undefined;
  useEffect(() => {
    document.title = selected
      ? `${projects[selected].name} — Daniel Cheeley`
      : "Daniel Cheeley — Full-stack developer";
  }, [selected]);
  useEffect(() => {
    if (!selected && hash.startsWith("#") && !hash.startsWith("#/")) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, selected]);
  return selected;
}
