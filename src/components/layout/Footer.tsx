import React from 'react';
import { Link } from 'react-router-dom';
import { NPREP_LINKS } from '../../data/links';

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
            <p className="text-xs text-slate-500">
              Recommended Preparation Partner: <a href={NPREP_LINKS.home} target="_blank" rel="nofollow noopener noreferrer" className="text-aiims-light hover:underline">NPrep Nursing</a>
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/norcet-notification" className="hover:text-white transition-colors">Latest Notification</Link></li>
              <li><Link to="/norcet-admit-card" className="hover:text-white transition-colors">Admit Card</Link></li>
              <li><Link to="/norcet-result" className="hover:text-white transition-colors">Check Results</Link></li>
              <li><Link to="/norcet-cut-off" className="hover:text-white transition-colors">Previous Cut Offs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-xs text-slate-500 mb-2">
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
