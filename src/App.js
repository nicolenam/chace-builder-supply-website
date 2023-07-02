import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './styles/Resets.scss';

const About = lazy(() => import( './components/About'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
