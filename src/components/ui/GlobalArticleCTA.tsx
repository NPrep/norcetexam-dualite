import React from 'react';

export const GlobalArticleCTA = () => {
  return (
    <div className="not-prose mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 md:p-8">
      <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Prepare for AIIMS NORCET with NPrep</p>
      <a
        href="https://nprep.in"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 hover:underline"
      >
        Start free mock test →
      </a>
    </div>
  );
};
