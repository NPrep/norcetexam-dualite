import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { OrganizationSchema, WebsiteSchema } from '../components/seo/Schema';
import { NPREP_LINKS, SITE_LINKS } from '../data/links';
import { TestimonialTicker } from '../components/ui/TestimonialTicker';
import {
  Calendar,
  CheckCircle,
  BookOpen,
  FileText,
} from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="AIIMS NORCET 2026 Preparation Hub - Syllabus, Exam Date & Strategy"
        description="Your complete guide to AIIMS NORCET 2026. Get latest notification, exam dates, syllabus, and access top-tier preparation resources like NPrep GOLD Batch and Test Series."
      />
      <OrganizationSchema />
      <WebsiteSchema />

      <section style={{ background: 'linear-gradient(180deg, var(--bg-light) 0%, #ffffff 100%)' }} className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-10 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
                AIIMS NORCET Information Portal
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">
                Get official NORCET notifications, eligibility, exam pattern and application guidance.
                <br />
                For preparation and mock tests visit NPrep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/norcet-syllabus"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                >
                  View Full Syllabus
                </Link>
                <Link
                  to="/norcet-eligibility"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="card-pattern p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">Exam Timeline</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">NORCET 10 Dates</h3>
                <div className="space-y-6">
                  {[
                    { stage: 'Prelims', date: 'April 11, 2026' },
                    { stage: 'Mains', date: 'April 30, 2026' },
                  ].map((item, idx) => (
                    <div key={item.stage} className="relative pl-8">
                      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-600"></span>
                      {idx === 0 && <span className="absolute left-[5px] top-5 h-12 w-0.5 bg-blue-200"></span>}
                      <p className="text-sm text-slate-500">{item.stage}</p>
                      <p className="text-lg font-semibold text-slate-900">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'Notifications', icon: FileText, link: SITE_LINKS.notification, color: 'text-blue-600' },
            { title: 'Exam Date', icon: Calendar, link: SITE_LINKS.examDate, color: 'text-indigo-600' },
            { title: 'Eligibility', icon: CheckCircle, link: SITE_LINKS.eligibility, color: 'text-green-600' },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="card-pattern p-6 hover:shadow-xl hover:border-blue-100 transition-all group text-center flex flex-col items-center"
            >
              <div className={`p-3 rounded-full bg-gray-50 mb-3 group-hover:bg-blue-50 transition-colors ${item.color}`}>
                <item.icon size={28} />
              </div>
              <span className="font-bold text-slate-700 group-hover:text-blue-700">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Student Success Stories</h2>
                <div className="hidden md:flex items-center text-sm text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Verified Reviews
                </div>
              </div>
              <p className="text-slate-600 mb-6">See what our GOLD Batch students have to say.</p>
              <div className="-mx-8">
                <TestimonialTicker />
              </div>
            </section>

            <section className="rounded-2xl p-7 md:p-8 text-white" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1a56db 100%)' }}>
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="inline-flex bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">From NPrep</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Crack NORCET 2026 with NPrep GOLD</h3>
                  <p className="text-blue-100 text-sm md:text-base">900+ hours • Daily Tests • AI Analytics</p>
                </div>
                <a
                  href={NPREP_LINKS.gold}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Explore GOLD Batch
                </a>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Prepare for NORCET with NPrep</h3>
                <ul className="space-y-2 text-blue-100 text-sm mb-6 list-disc pl-5">
                  <li>AIIMS-level mock tests</li>
                  <li>structured study plans</li>
                  <li>previous year papers</li>
                  <li>nursing question bank</li>
                </ul>
                <a
                  href="https://nprep.in"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-3 bg-white text-blue-700 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Visit NPrep
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" /> Essential Pages
                </h3>
                <nav className="space-y-1">
                  {[
                    { name: 'Syllabus & Pattern', link: SITE_LINKS.syllabus },
                    { name: 'Exam Date Info', link: SITE_LINKS.examDate },
                    { name: 'Application Form', link: SITE_LINKS.apply },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.link}
                      className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
