import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Portfolio />
              <Process />
              <Team />
              <Contact />
            </main>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;