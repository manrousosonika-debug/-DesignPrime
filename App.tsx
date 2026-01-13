
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import SocialProof from './components/SocialProof';
import AssessmentForm from './components/AssessmentForm';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ValueProp />
        <HowItWorks />
        <div id="assessment-section" className="py-20 bg-white">
           <AssessmentForm />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
