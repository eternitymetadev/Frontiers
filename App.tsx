import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import OurBusinesses from './components/OurBusinesses'; // Import new component
import Services from './components/Services';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import LifeAtFrontiers from './components/LifeAtFrontiers';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <OurBusinesses /> 
        <Services />
        <Stats />
        <TechStack />
        <LifeAtFrontiers />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;