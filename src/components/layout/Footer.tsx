import React from 'react';
import { Link } from 'react-router-dom';
import { NPREP_LINKS } from '../../data/links';
import { Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-aiims-blue mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">About norcetexam.com</h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              norcetexam.com is the leading informational authority for the AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET). We provide up-to-date notifications, syllabus breakdowns, and preparation strategies for nursing aspirants.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Updated for NORCET 2026 Cycle</span>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/norcet-notification" className="hover:text-white transition-colors">Latest Notification</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center group">
             <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold">In Association With</span>
             <a 
               href={NPREP_LINKS.home} 
               target="_blank" 
               rel="noreferrer" 
               className="flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all"
             >
                <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-none group-hover:text-blue-400 transition-colors">NPrep</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide">India's Top Nursing Institute</span>
                </div>
             </a>
          </div>

          <p className="text-xs text-slate-500 mb-2 text-center max-w-2xl">
            Disclaimer: norcetexam.com is an independent informational website and is not affiliated with AIIMS. Official updates are published on aiimsexams.ac.in.
          </p>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} norcetexam.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
