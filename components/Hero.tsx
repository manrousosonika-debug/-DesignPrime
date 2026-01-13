
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background blobs for visual interest */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span>Now accepting 5 new businesses for free audits this month</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Website Should Be Your <span className="text-indigo-600">Best Salesperson</span>. Is It Failing You?
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Stop losing customers to slow loading times and confusing layouts. Get a professional conversion audit that reveals exactly how to turn visitors into loyal clients.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <a 
              href="#assessment-section" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get My Free Website Assessment
            </a>
            <p className="text-sm text-slate-500 font-medium italic">
              100% Free. No obligation.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-6 text-slate-400">
             <div className="flex items-center space-x-1">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Testimonial user" />
                   ))}
                </div>
                <span className="text-xs font-semibold text-slate-600 ml-2">450+ websites audited</span>
             </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://picsum.photos/seed/webdesign/1200/800" 
                alt="Modern Website Design Interface" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              {/* Dynamic Overlay Elements for CRO vibe */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg border border-slate-100 flex items-center space-x-3 scale-90 sm:scale-100">
                 <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Conversion rate</p>
                    <p className="text-lg font-bold text-slate-900">+124% Improvement</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
