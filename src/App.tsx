import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <main>
              <Hero />
              <Services />
              <Portfolio />
              <Process />
              <Team />
              <Contact />
            </main>
          </Layout>
        } />
        <Route path="/privacy" element={
          <Layout>
            <Privacy />
          </Layout>
        } />
        <Route path="/terms" element={
          <Layout>
            <Terms />
          </Layout>
        } />
        <Route path="/faq" element={
          <Layout>
            <FAQ />
          </Layout>
        } />
        <Route path="/careers" element={
          <Layout>
            <Careers />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;