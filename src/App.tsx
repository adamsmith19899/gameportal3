import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { GamePage } from './pages/Game';
import { CategoryPage } from './pages/Category';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { DMCA } from './pages/DMCA';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-violet-950">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dmca" element={<DMCA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}