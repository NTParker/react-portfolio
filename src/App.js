import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/react-portfolio" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
