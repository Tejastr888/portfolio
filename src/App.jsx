import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

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
