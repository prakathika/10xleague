import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Architect from './components/Architect';
import WinsWall from './components/WinsWall';
import Podcasts from './components/Podcasts';
import GetInside from './components/GetInside';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Architect />
        <Podcasts />
        <WinsWall />
        <GetInside />
      </main>
      <Footer />
    </>
  );
}

export default App;

