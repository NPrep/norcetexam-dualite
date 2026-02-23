import React from 'react';

export const TestimonialTicker = () => {
  return (
    <section className="bg-[var(--bg-light)] p-12 text-center rounded-2xl border border-[var(--border)]">
      <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">Hear from real students</h2>
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
