import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { NPREP_LINKS } from '../data/links';
import { FileDown, Download, ChevronRight, Home, FileText } from 'lucide-react';

export const PYQPage = () => {
  const papers = [
    { title: "NORCET 9 Mains Question Paper", year: "2026", type: "Mains" },
    { title: "NORCET 9 Prelims Question Paper", year: "2026", type: "Prelims" },
    { title: "NORCET 8 Mains Question Paper", year: "2025", type: "Mains" },
    { title: "NORCET 8 Prelims Question Paper", year: "2025", type: "Prelims" },
    { title: "NORCET 7 Question Paper", year: "2024", type: "Combined" },
    { title: "NORCET 6 Question Paper", year: "2024", type: "Combined" },
    { title: "NORCET 5 Question Paper", year: "2023", type: "Combined" },
    { title: "NORCET 4 Question Paper", year: "2023", type: "Combined" },
  ];

  return (
    <>
      <SEO 
        title="Download AIIMS NORCET Previous Year Question Papers (PDF)"
        description="Get authentic memory-based question papers for AIIMS NORCET 9, 8, 7, and 6. Practice previous year papers to crack the exam."
      />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Previous Year Papers", item: "/previous-year-papers" }]} />

      <div className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <nav className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-blue-600 flex items-center"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">PYQs</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Previous Year Question Papers</h1>
            <p className="text-slate-600 max-w-2xl">
              Practicing previous year questions is the single most important step in your NORCET preparation. 
              Download authentic memory-based papers with solutions below.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {papers.map((paper, idx) => (
                <a 
                    key={idx}
                    href={NPREP_LINKS.pyq}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <FileText size={80} />
                    </div>
                    
                    <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <FileDown size={24} />
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${paper.type === 'Mains' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                          {paper.type}
                        </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors relative z-10">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-6 relative z-10">
                      Authentic memory-based paper with detailed solutions.
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-bold text-blue-600 relative z-10">
                        Download PDF <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </div>
                </a>
            ))}
        </div>
      </div>
    </>
  );
};
