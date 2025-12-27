
import React from 'react';
import MusicFloatButton from './components/MusicFloatButton';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import GeminiAI from './pages/GeminiAI';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/ai-assistant" element={<GeminiAI />} />
          </Routes>
        </main>
        <Footer />
        <MusicFloatButton />
      </div>
    </Router>
  );
};

export default App;
