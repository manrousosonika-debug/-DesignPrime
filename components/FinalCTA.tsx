
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Ready to turn your website into a <span className="text-indigo-600">revenue machine?</span>
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Don't let another day of low conversions pass you by. Get the clarity you need to scale your business.
        </p>
        <a 
          href="#assessment-section" 
          className="inline-block px-10 py-5 bg-indigo-600 text-white font-extrabold text-xl rounded-2xl shadow-2xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-105 transition-all"
        >
          Claim My Free Assessment Now
        </a>
        <div className="mt-8 flex items-center justify-center space-x-4 text-slate-500 font-medium">
           <span className="flex items-center"><svg className="w-5 h-5 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> No Credit Card</span>
           <span className="flex items-center"><svg className="w-5 h-5 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> No Obligations</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
