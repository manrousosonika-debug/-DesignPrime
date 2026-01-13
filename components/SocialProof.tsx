
import React from 'react';

const SocialProof: React.FC = () => {
  const logos = ["TechCorp", "Innovate", "GrowthLab", "BrandUp", "WebFlow"];
  
  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Trusted by businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-black text-slate-400 select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
