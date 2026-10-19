import "./App.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { usePortfolioNavigation } from "./hooks/usePortfolioNavigation";

export default function App() {
  const selectedProject = usePortfolioNavigation();
  return (
    <>
      <SiteHeader />
      <main>
        {selectedProject ? (
          <ProjectPage projectKey={selectedProject} />
        ) : (
          <HomePage />
        )}
      </main>
      <SiteFooter />
    </>
  );
}
