import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, BookOpen, Link as LinkIcon, HelpCircle, List } from 'lucide-react';

// --- Table of Contents ---
interface TOCItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

export const TableOfContents: React.FC<{ items: TOCItem[] }> = ({ items }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
    <h4 className="flex items-center text-lg font-bold text-slate-900 mb-4">
      <List className="w-5 h-5 mr-2 text-blue-600" /> Table of Contents
    </h4>
    <nav>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className="text-slate-700 hover:text-blue-600 hover:underline font-medium text-sm block"
            >
              {item.label}
            </a>
            {item.subItems && (
              <ul className="pl-4 mt-1 space-y-1 border-l-2 border-slate-200 ml-1">
                {item.subItems.map((sub) => (
                  <li key={sub.id}>
                    <a 
                      href={`#${sub.id}`} 
                      className="text-slate-500 hover:text-blue-600 text-xs block py-0.5"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

// --- Callout Box ---
interface CalloutProps {
  type: 'summary' | 'mistake' | 'tip' | 'note';
  title: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const styles = {
    summary: { bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle, iconColor: 'text-green-600', titleColor: 'text-green-900' },
    mistake: { bg: 'bg-red-50', border: 'border-red-200', icon: AlertTriangle, iconColor: 'text-red-600', titleColor: 'text-red-900' },
    tip: { bg: 'bg-blue-50', border: 'border-blue-200', icon: BookOpen, iconColor: 'text-blue-600', titleColor: 'text-blue-900' },
    note: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: HelpCircle, iconColor: 'text-yellow-600', titleColor: 'text-yellow-900' },
  }[type];

  const Icon = styles.icon;

  return (
    <div className={`${styles.bg} border-l-4 ${styles.border} p-6 my-8 rounded-r-xl not-prose shadow-sm`}>
      <h4 className={`flex items-center text-lg font-bold ${styles.titleColor} mb-3`}>
        <Icon className={`w-6 h-6 mr-2 ${styles.iconColor}`} /> {title}
      </h4>
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// --- Rich Table ---
export const RichTable: React.FC<{ children: React.ReactNode; caption?: string }> = ({ children, caption }) => (
  <div className="my-8 not-prose">
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      {children}
    </div>
    {caption && <p className="text-center text-sm text-gray-500 mt-2 italic">{caption}</p>}
  </div>
);

// --- Step by Step ---
export const StepByStep: React.FC<{ steps: { title: string; text: string }[] }> = ({ steps }) => (
  <div className="my-8 space-y-6">
    {steps.map((step, idx) => (
      <div key={idx} className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
          {idx + 1}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
          <p className="text-slate-700 leading-relaxed">{step.text}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- FAQ Section ---
export const FAQSection: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => (
  <div className="my-12 bg-slate-50 p-8 rounded-2xl border border-slate-100">
    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
      <HelpCircle className="w-6 h-6 mr-2 text-blue-600" /> Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-slate-900 text-lg mb-2">{item.q}</h3>
          <p className="text-slate-600">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Glossary ---
export const Glossary: React.FC<{ terms: { term: string; def: string }[] }> = ({ terms }) => (
  <div className="my-8">
    <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Key Terms Glossary</h3>
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {terms.map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
          <dt className="font-bold text-blue-700 mb-1">{item.term}</dt>
          <dd className="text-sm text-slate-600">{item.def}</dd>
        </div>
      ))}
    </dl>
  </div>
);

// --- Related Articles ---
export const RelatedArticles: React.FC<{ links: { title: string; url: string }[] }> = ({ links }) => (
  <div className="my-12 border-t-2 border-gray-100 pt-8">
    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
      <LinkIcon className="w-5 h-5 mr-2 text-slate-400" /> Read Next
    </h3>
    <div className="grid md:grid-cols-2 gap-4">
      {links.map((link, idx) => (
        <Link 
          key={idx} 
          to={link.url}
          className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
        >
          <span className="font-semibold text-slate-700 group-hover:text-blue-700 line-clamp-2">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  </div>
);
