import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { Table } from '../components/ui/Table';
import { pillarPages } from '../data/content';
import { ChevronRight, Home } from 'lucide-react';

export const PillarPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? pillarPages[slug] : undefined;

  if (!pageData) {
    // In a real app, this would be a 404 page
    return <div className="p-12 text-center">Page content being updated. <Link to="/" className="text-blue-600 underline">Go Home</Link></div>;
  }

  const { title, description, content, lastUpdated } = pageData;

  // Schema for Article/WebPage
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "dateModified": lastUpdated,
    "author": {
      "@type": "Organization",
      "name": "norcetexam.com"
    }
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title={title}
        description={description}
        type="article"
        modifiedTime={lastUpdated}
      />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: title, item: `/${slug}` }]} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-aiims-blue flex items-center"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{title}</span>
            </nav>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{title}</h1>
              <div className="text-sm text-gray-500">
                Last Updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none lg:prose-lg">
              <p className="lead text-xl text-slate-700">{content.intro}</p>

              {/* Highlights Table */}
              <div className="not-prose my-8">
                <Table 
                  headers={["Feature", "Details"]}
                  data={content.highlights.map(h => [h.label, h.value])}
                  caption="Quick Overview"
                />
              </div>

              {/* Dynamic Sections */}
              {content.sections.map((section, idx) => (
                <section key={idx} className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                  <div className="text-slate-700">{section.content}</div>
                </section>
              ))}

              {/* Internal Linking Block */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-aiims-blue my-8 not-prose">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Related Resources</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-800">
                  <li><Link to="/norcet-syllabus" className="hover:underline">Check Detailed Syllabus</Link></li>
                  <li><Link to="/norcet-exam-date" className="hover:underline">Exam Dates & Schedule</Link></li>
                  <li><Link to="/norcet-eligibility" className="hover:underline">Eligibility Criteria</Link></li>
                  <li><Link to="/norcet-cut-off" className="hover:underline">Previous Year Cut Off</Link></li>
                </ul>
              </div>

              {/* FAQs */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {content.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};
