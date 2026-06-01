'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real site this would connect to a form service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-16">
      <div className="max-w-xl mx-auto px-6 py-16">
        <a href="/" className="text-sm hover:underline">← Back to home</a>

        <h1 className="text-5xl font-semibold tracking-tight mt-8 mb-4">Let’s talk</h1>
        <p className="text-[#6B5F52] mb-10">We’re always open to meaningful conversations and collaborations.</p>

        {submitted ? (
          <div className="p-8 border border-[#C45C3B]/30 rounded-2xl text-center">
            <p className="text-lg">Thank you. We’ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <input type="text" required className="w-full border border-[#3F2E1E]/20 px-4 py-3 rounded-xl bg-white" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input type="email" required className="w-full border border-[#3F2E1E]/20 px-4 py-3 rounded-xl bg-white" />
            </div>
            <div>
              <label className="block text-sm mb-2">What are you reaching out about?</label>
              <textarea required rows={5} className="w-full border border-[#3F2E1E]/20 px-4 py-3 rounded-xl bg-white resize-y" />
            </div>
            <button 
              type="submit"
              className="w-full py-4 rounded-full bg-[#3F2E1E] text-[#F9F6F0] hover:bg-[#C45C3B] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 text-sm text-[#6B5F52]">
          You can also reach us directly at <a href="mailto:hello@apptahualpa.com" className="underline">hello@apptahualpa.com</a>
        </div>
      </div>
    </div>
  );
}
