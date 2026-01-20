import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { blogPosts } from '../data/content';
import { Calendar, ChevronRight, Home, User, Tag } from 'lucide-react';
import { BlogThumbnail } from '../components/ui/BlogThumbnail';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema for BlogPosting
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "norcetexam.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://norcetexam.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
        publishedTime={post.date}
      />
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" }, 
        { name: "Blog", item: "/blog" },
        { name: post.title, item: `/blog/${post.slug}` }
      ]} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-500 overflow-hidden">
              <Link to="/" className="hover:text-aiims-blue flex items-center flex-shrink-0"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
              <Link to="/blog" className="hover:text-aiims-blue flex-shrink-0">Blog</Link>
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <article>
            <header className="mb-8 border-b border-gray-100 pb-8">
              {/* Hero Thumbnail */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <BlogThumbnail 
                   category={post.category}
                   title={post.thumbnail.title}
                   subtitle={post.thumbnail.subtitle}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-xs flex items-center">
                  <Tag className="w-3 h-3 mr-1" /> {post.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" /> Editorial Team
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>
            </header>

            <div className="prose prose-slate max-w-none lg:prose-lg">
              {/* Content is now rendered directly as JSX */}
              {post.content}
            </div>
          </article>
        </main>
      </div>
    </>
  );
};
