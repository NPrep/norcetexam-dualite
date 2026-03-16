import React from 'react';

export const TestimonialTicker = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 text-center rounded-2xl border border-blue-200 shadow-sm">
      <h2 className="text-3xl font-semibold text-slate-900 mb-4">Hear from real students</h2>
      <a
        href="https://nprep.in/blogs?filter=NORCET+Success+Story"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-hover)]"
      >
        Read verified success stories on NPrep
      </a>
    </section>
  );
};
