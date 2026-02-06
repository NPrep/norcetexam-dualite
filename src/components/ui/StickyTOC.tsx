import React, { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';

interface StickyTOCProps {
  items: { id: string; label: string }[];
}

export const StickyTOC: React.FC<StickyTOCProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden lg:block w-72 flex-shrink-0 sticky top-24 h-fit self-start pl-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
        <h4 className="flex items-center text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
          <List className="w-4 h-4 mr-2 text-blue-600" /> On This Page
        </h4>
        <ul className="space-y-1 relative border-l-2 border-gray-100 ml-1.5">
          {items.map((item) => (
            <li key={item.id} className="relative pl-4">
              <a
                href={`#${item.id}`}
                className={`block text-sm py-1.5 transition-all duration-200 leading-snug ${
                  activeId === item.id
                    ? "text-blue-600 font-bold translate-x-1"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveId(item.id);
                }}
              >
                {activeId === item.id && (
                  <ChevronRight className="absolute -left-5 top-2 w-3 h-3 text-blue-600 bg-white" />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Contextual Sidebar CTA */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-slate-500 mb-2 font-medium">Ready to master these topics?</p>
          <a 
            href="https://gold.nprep.in" 
            target="_blank" 
            rel="noreferrer"
            className="block w-full py-2 bg-blue-50 text-blue-700 text-center text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
          >
            Join NPrep GOLD Batch
          </a>
        </div>
      </div>
    </nav>
  );
};
