import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationModal from './components/RegistraionModal'; // Adjust the path (Note: typo in "RegistraionModal", should be "RegistrationModal")

// Import screen components (adjust paths if your structure differs)
import Home from './screens/Home/Home';
import HowItWorks from './screens/Home/HowItWorks';
import CareerGuidance from './screens/CareerGuidance';
import MarketResearch from './screens/MarketResearch';
import Jobs from './screens/Jobs';
import Partners from './screens/Partners';
import About from './screens/About';
import Contact from './screens/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to open the modal after 5 seconds (5000ms)
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000); // You can adjust this to 10000 for 10 seconds

    // Cleanup the timeout if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/market-research" element={<MarketResearch />} /> 
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
        <RegistrationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </BrowserRouter>
  );
};

export default App;