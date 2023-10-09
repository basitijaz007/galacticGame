import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './components/Footer/Footer';
import ItService from './pages/Itservices/ItService';
import ScrollToTopButton from './pages/ScrollToTopButton';
import Resources from './pages/resources/Resource';
import Contact from './pages/contact/Contact';
import Circle from './pages/Circle';
import Loading from './pages/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <ScrollToTopButton />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Circle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/itservice" element={<ItService />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
