
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">DesignPrime</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Helping businesses convert more visitors into customers through data-driven design and high-performance development.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">X (Twitter)</a>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© 2024 DesignPrime. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
