
import React, { useState } from 'react';
import { getQuickInsight } from '../services/gemini';

const AssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [insight, setInsight] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Call our Gemini service for a "First Impression" to add immediate value
    const aiResponse = await getQuickInsight(formData.website, formData.name);
    setInsight(aiResponse);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto p-10 bg-indigo-50 rounded-3xl border border-indigo-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Awesome, {formData.name}!</h3>
        <p className="text-slate-600 mb-6 italic leading-relaxed">
          "{insight}"
        </p>
        <p className="text-sm text-slate-500">
          Our team is now conducting a comprehensive deep dive. Keep an eye on your inbox (<strong>{formData.email}</strong>) within the next 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-indigo-600 font-semibold text-sm hover:underline"
        >
          Submit another site
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Analyze My Website Now</h2>
        <p className="text-slate-500">Enter your details below and we'll send your free growth report in 24h.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-slate-700">Full Name</label>
            <input 
              required
              type="text"
              placeholder="Jane Doe"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-slate-700">Work Email</label>
            <input 
              required
              type="email"
              placeholder="jane@company.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-slate-700">Website URL</label>
          <input 
            required
            type="url"
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
            value={formData.website}
            onChange={e => setFormData({...formData, website: e.target.value})}
          />
        </div>

        <button 
          disabled={status === 'loading'}
          type="submit"
          className={`w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition-all active:scale-[0.98] ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
               Starting Analysis...
            </span>
          ) : 'Get My Free Assessment'}
        </button>

        <p className="text-center text-xs text-slate-400">
           We respect your privacy. No spam, ever. By submitting, you agree to our terms.
        </p>
      </form>
    </div>
  );
};

export default AssessmentForm;
