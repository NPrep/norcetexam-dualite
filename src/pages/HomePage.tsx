import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { OrganizationSchema, WebsiteSchema } from '../components/seo/Schema';
import { HomeSEOContent } from '../components/home/HomeSEOContent';
import { NPREP_LINKS, SITE_LINKS } from '../data/links';
import { blogPosts } from '../data/content';
import { BlogCardImage } from '../components/ui/BlogCardImage';
import { TestimonialTicker } from '../components/ui/TestimonialTicker';
import { 
  Calendar, 
  CheckCircle, 
  BookOpen, 
  ArrowRight,
  ChevronRight,
  Zap,
  FileText
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
      
      {/* Hero Section - Updated for 2026 */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Crack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AIIMS NORCET 2026</span> <br className="hidden md:block" /> with Confidence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The ultimate resource for Nursing Officer aspirants. Access official updates, detailed syllabus breakdowns, and India's most trusted preparation courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={NPREP_LINKS.gold} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
            >
              Start Complete Prep <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link 
              to="/norcet-syllabus" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-gray-200 font-bold rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              View Syllabus
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 mb-16">
        {/* Quick Access Grid - Updated to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "Notifications", icon: FileText, link: SITE_LINKS.notification, color: "text-blue-600" },
            { title: "Exam Date", icon: Calendar, link: SITE_LINKS.examDate, color: "text-indigo-600" },
            { title: "Eligibility", icon: CheckCircle, link: SITE_LINKS.eligibility, color: "text-green-600" },
          ].map((item, idx) => (
            <Link 
              key={idx} 
              to={item.link} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group text-center flex flex-col items-center"
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
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Student Success Stories (Replaces Resources & PYQ) */}
            <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Student Success Stories
                </h2>
                <div className="hidden md:flex items-center text-sm text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-green-50 mr-2"></span>
                  Verified Reviews
                </div>
              </div>
              <p className="text-slate-600 mb-6">See what our GOLD Batch students have to say.</p>
              
              <div className="-mx-8">
                 <TestimonialTicker />
              </div>
            </section>

            {/* Latest Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Latest Study Guides
                </h2>
                <Link to="/blog" className="text-blue-600 font-bold hover:underline flex items-center">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {blogPosts.slice(0, 4).map((post) => (
                  <article key={post.slug} className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group">
                    {/* Thumbnail for Home Feed */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <Link to={`/blog/${post.slug}`} className="block rounded-xl overflow-hidden">
                        <BlogCardImage 
                          post={post}
                          className="transform transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    <div className="flex-1 py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                        <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      {/* Excerpt removed as requested */}
                      <Link to={`/blog/${post.slug}`} className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center mt-4">
                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Sticky Widget */}
            <div className="sticky top-24 space-y-8">
              
              {/* Daily Test Widget */}
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">Free Daily Test</h3>
                  <Zap className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="text-blue-100 text-sm mb-6">
                  Challenge yourself with 20 new questions every day. Build consistency.
                </p>
                <a 
                  href={NPREP_LINKS.dailyTest} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full py-3 bg-white text-blue-700 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Take Today's Test
                </a>
              </div>

              {/* Quick Links Widget */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" /> Essential Pages
                </h3>
                <nav className="space-y-1">
                  {[
                    { name: "Syllabus & Pattern", link: SITE_LINKS.syllabus },
                    { name: "Exam Date Info", link: SITE_LINKS.examDate },
                    { name: "Admit Card", link: SITE_LINKS.admitCard },
                    { name: "Result & Merit List", link: SITE_LINKS.result },
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

              {/* Free Resources Widget */}
              <div className="bg-green-50 rounded-2xl border border-green-100 p-6">
                <h3 className="font-bold text-green-900 mb-2">Free Study Material</h3>
                <p className="text-sm text-green-800 mb-4">
                  Access notes, PDFs, and previous papers for free.
                </p>
                <a 
                  href={NPREP_LINKS.free} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-bold text-green-700 hover:text-green-900 flex items-center"
                >
                  Access Library <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* SEO Content Block - Placed just before footer */}
      <HomeSEOContent />
    </>
  );
};
