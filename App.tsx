import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;