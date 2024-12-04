import "./App.css";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
