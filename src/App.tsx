import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { WorkDetailPage } from "./pages/WorkDetail";
import { CommandPalette } from "./components/CommandPalette";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <CommandPalette />
    </ThemeProvider>
  );
}
