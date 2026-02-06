import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { Table } from '../components/ui/Table';
import { pillarPages } from '../data/content';
import { ChevronRight, Home, Calendar, UserCheck, ShieldCheck } from 'lucide-react';
import { StickyTOC } from '../components/ui/StickyTOC';

// Helper to slugify titles for IDs
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const PillarPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pageData = slug ? pillarPages[slug] : undefined;

  if (!pageData) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Updating</h2>
        <p className="text-slate-600 mb-6">This NORCET resource is currently being updated for the 2026 cycle.</p>
        <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Go Home</Link>
      </div>
    );
  }

  const { title, description, content, lastUpdated } = pageData;

  // Generate TOC items from sections + fixed sections like Highlights/FAQs
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Key Highlights" },
    ...content.sections.map(section => ({
      id: slugify(section.title),
      label: section.title.replace(/^\d+\.\s*/, '') // Remove numbering for cleaner TOC
    })),
    { id: "faqs", label: "Frequently Asked Questions" }
  ];

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
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-aiims-blue flex items-center"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{title}</span>
            </nav>
          </div>
        </div>

        {/* Layout Container */}
        <div className="max-w-7xl mx-auto px-4 py-12 flex gap-12 items-start">
          
          {/* Left Sidebar: Sticky TOC */}
          <StickyTOC items={tocItems} />

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <article>
              <header className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-3 text-sm text-blue-600 font-bold mb-3 uppercase tracking-wide">
                   <span className="bg-blue-50 px-3 py-1 rounded-full">NORCET 2026 Guide</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    Last Updated: <time dateTime={lastUpdated} className="text-slate-900 font-medium ml-1">{lastUpdated}</time>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-slate-700">Fact Checked</span>
                  </div>
                  <div className="flex items-center">
                    <UserCheck className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Editorial Team</span>
                  </div>
                </div>
              </header>

              <div className="prose prose-slate max-w-none lg:prose-lg">
                <div id="overview" className="scroll-mt-28">
                   <p className="lead text-xl text-slate-700 leading-relaxed font-medium">{content.intro}</p>
                </div>

                {/* Highlights Table */}
                <div id="highlights" className="not-prose my-10 scroll-mt-28">
                  <Table 
                    headers={["Feature", "Details"]}
                    data={content.highlights.map(h => [h.label, h.value])}
                    caption="NORCET Exam Snapshot"
                  />
                </div>

                {/* Dynamic Sections */}
                {content.sections.map((section, idx) => (
                  <section key={idx} id={slugify(section.title)} className="mb-12 scroll-mt-28 border-b border-gray-100 pb-8 last:border-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center">
                      <span className="w-1.5 h-8 bg-blue-600 rounded-full mr-3 block"></span>
                      {section.title}
                    </h2>
                    <div className="text-slate-700 leading-relaxed">{section.content}</div>
                  </section>
                ))}

                {/* Internal Linking Block */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 not-prose">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Explore More NORCET Resources</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li><Link to="/norcet-syllabus" className="flex items-center text-blue-700 hover:underline font-medium"><ChevronRight className="w-4 h-4 mr-2" /> Detailed Syllabus Breakdown</Link></li>
                    <li><Link to="/norcet-exam-date" className="flex items-center text-blue-700 hover:underline font-medium"><ChevronRight className="w-4 h-4 mr-2" /> Confirmed Exam Schedule</Link></li>
                    <li><Link to="/norcet-eligibility" className="flex items-center text-blue-700 hover:underline font-medium"><ChevronRight className="w-4 h-4 mr-2" /> Eligibility Criteria Check</Link></li>
                    <li><Link to="/previous-year-papers" className="flex items-center text-blue-700 hover:underline font-medium"><ChevronRight className="w-4 h-4 mr-2" /> Download PYQs</Link></li>
                  </ul>
                </div>

                {/* FAQs */}
                <section id="faqs" className="mt-16 scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {content.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start">
                            <span className="text-blue-200 mr-3 font-black text-xl leading-none">Q.</span>
                            {faq.question}
                          </h3>
                          <p className="text-slate-600 pl-8">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};
