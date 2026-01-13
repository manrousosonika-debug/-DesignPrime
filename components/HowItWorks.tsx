
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Details",
      description: "Fill out the simple form below with your website URL and contact info."
    },
    {
      number: "02",
      title: "Professional Audit",
      description: "We manually analyze your site's design, speed, SEO, and conversion path."
    },
    {
      number: "03",
      title: "Growth Roadmap",
      description: "Receive a customized PDF report with clear, actionable improvements."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <div className="absolute top-10 left-10 w-64 h-64 border-4 border-indigo-400 rounded-full"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-indigo-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto">
            Three simple steps to a website that actually works for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-7xl font-black text-indigo-800/50 absolute -top-10 -left-4 group-hover:text-indigo-700/50 transition-colors">
                {step.number}
              </div>
              <div className="relative pt-6">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-indigo-100/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-indigo-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
