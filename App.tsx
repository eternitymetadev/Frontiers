import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import OurBusinesses from './components/OurBusinesses';
import Services from './components/Services';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import ImpactStories from './components/LifeAtFrontiers'; // This is the renamed component
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <Hero />
        <About />
        <OurBusinesses /> 
        <Stats />
        <ImpactStories />
        <TechStack />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;