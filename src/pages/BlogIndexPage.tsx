import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { blogPosts } from '../data/content';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogCardImage } from '../components/ui/BlogCardImage';

const categoryStyles: Record<string, string> = {
  'Study Strategy': 'bg-blue-100 text-blue-700',
  'Career Guidance': 'bg-green-100 text-green-700',
  'Downloads & Resources': 'bg-purple-100 text-purple-700',
  Downloads: 'bg-purple-100 text-purple-700',
  'Salary & Career': 'bg-amber-100 text-amber-700',
};

const getBlogDateLabel = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime()) || parsed > new Date()) {
    return 'Updated for 2026';
  }
  return parsed.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const BlogIndexPage = () => {
  return (
    <>
      <SEO
        title="NORCET Preparation Blog - Study Tips, Strategies & Updates"
        description="Read the latest articles on AIIMS NORCET preparation, exam strategies, previous year question analysis, and nursing career guidance."
      />

      <div className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">NORCET Preparation Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Expert insights, study strategies, and latest updates to help you crack the AIIMS Nursing Officer exam.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                <BlogCardImage post={post} className="transform transition-transform duration-500 group-hover:scale-105" />
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 gap-2 flex-wrap">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryStyles[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
                    {post.category.includes('Downloads') ? 'Downloads' : post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {getBlogDateLabel(post.date)}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-6 leading-snug group-hover:text-blue-700 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};
