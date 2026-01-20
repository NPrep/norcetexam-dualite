import React from 'react';
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description?: string;
  features?: string[];
  icon?: LucideIcon; // Made optional as per new design
  link: string;
  colorClass?: string; // Kept for backward compatibility or border hover effects
  buttonText?: string;
  badgeText?: string;
  badgeColor?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description,
  features,
  link, 
  colorClass = "border-gray-200 hover:border-blue-300",
  buttonText = "Explore Now",
  badgeText,
  badgeColor = "bg-gray-100 text-gray-800"
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="nofollow noopener noreferrer"
      className={`group flex flex-col p-8 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full ${colorClass}`}
    >
      {/* Badge Section */}
      <div className="flex items-start mb-4 h-6">
        {badgeText && (
          <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${badgeColor}`}>
            {badgeText}
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      
      {description && (
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          {description}
        </p>
      )}

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-slate-700">
              <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-slate-900 flex-shrink-0" strokeWidth={2} />
              <span className="leading-snug text-[15px]">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* CTA Button */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="inline-flex items-center font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
          {buttonText} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};
