import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Aside />
        <div className="content">
          <Nav />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
