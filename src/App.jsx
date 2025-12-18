import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ThemeProvider } from "./utils/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="App dark:bg-background-dark transition-colors duration-300">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
