// src/App.jsx
import React from 'react';
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CustomerSupport from './components/CustomerSupport';
import Welcome from './components/Welcome';
import GamePartners from './components/GamePartners';
import HowItWorks from './components/HowItWorks';
import Celebrities from './components/Celebrities';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <CustomerSupport />
        <Welcome />
        <GamePartners />
        <HowItWorks />
        <Celebrities />
        <WhyChooseUs />
        <Footer />
      </main>
    </div>
  );
};

export default App;