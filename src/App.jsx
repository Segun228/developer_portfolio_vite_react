import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './pages/Projects';
import './App.css';
import './styles/main.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Project from "./pages/Project"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop.js';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>


      <Footer></Footer>
    </Router>
    
    </div>
  );
}

export default App;
