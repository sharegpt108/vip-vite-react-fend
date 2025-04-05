import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import MissionSection from './MissionSection';
import CTASection from './CTASection';
import Registration from './Registration';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <HowItWorks />
      <MissionSection />
      <Registration />
      <CTASection />
    </div>
  )
}

export default Home