
import React from 'react';

const ValueProp: React.FC = () => {
  const benefits = [
    {
      title: "Discover Hidden Leaks",
      description: "We pinpoint exactly where visitors are dropping off your site and why they aren't converting into customers.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      title: "Speed & SEO Analysis",
      description: "Search engines hate slow sites. We'll show you how to shave seconds off your load time and rank higher.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Actionable Roadmap",
      description: "No vague advice. You get a clear, step-by-step checklist of what to fix, redesign, or remove today.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "User Experience (UX) Audit",
      description: "We evaluate your navigation and copy to ensure your message is landing and your paths are clear.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <section id="value-prop" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Why get an assessment?</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900">Unlock your website's hidden potential</p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A beautiful website means nothing if it doesn't pay for itself. We look under the hood to see what's really happening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
