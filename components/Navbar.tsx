
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">DesignPrime</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="#value-prop" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Benefits</a>
            <a 
              href="#assessment-section" 
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Free Assessment
            </a>
          </div>
          
          <div className="md:hidden">
            <a 
              href="#assessment-section" 
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-full"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
