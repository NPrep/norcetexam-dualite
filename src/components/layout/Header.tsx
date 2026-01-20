import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, Bell } from 'lucide-react';
import { NPREP_LINKS } from '../../data/links';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3 group-hover:bg-blue-700 transition-colors">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                NORCET<span className="text-blue-600">Exam</span>
              </span>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                Nursing Officer Prep Hub
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/norcet-notification" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Notifications
            </Link>
            <Link to="/norcet-syllabus" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Syllabus</Link>
            <Link to="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Study Blog</Link>
            
            {/* Internal PYQ Link */}
            <Link to="/previous-year-papers" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center">
              PYQs
            </Link>
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            
            {/* Updated Courses Link */}
            <Link to="/courses" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Courses
            </Link>

            <a 
              href={NPREP_LINKS.gold} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start Prep
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-gray-50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/norcet-notification" className="block px-3 py-3 rounded-md text-base font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Bell className="w-4 h-4 mr-2 text-red-500" /> Notifications
            </Link>
            <Link to="/norcet-syllabus" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Syllabus</Link>
            <Link to="/blog" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Preparation Blog</Link>
            <Link to="/previous-year-papers" className="block px-3 py-3 rounded-md text-base font-bold text-blue-600 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>Previous Year Papers</Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <Link to="/courses" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>

            <a href={NPREP_LINKS.gold} target="_blank" rel="noreferrer" className="block w-full text-center mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Join GOLD Batch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
