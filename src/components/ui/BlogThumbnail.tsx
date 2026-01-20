import React from 'react';
import { GraduationCap, Activity, Stethoscope } from 'lucide-react';

interface BlogThumbnailProps {
  category: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ category, title, subtitle, className = "" }) => {
  return (
    <div className={`relative w-full aspect-video bg-gradient-to-br from-blue-800 via-blue-700 to-slate-900 overflow-hidden flex items-center justify-center p-4 md:p-6 ${className}`}>
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
       <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-10 rounded-full -ml-10 -mb-10 blur-xl"></div>
       
       {/* Pattern Overlay */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

       {/* Category Tag (Top Left) */}
       <div className="absolute top-4 left-4 bg-white text-blue-900 text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-blue-100 z-20">
         {category}
       </div>

       <div className="flex items-center gap-4 md:gap-6 w-full max-w-lg z-10 relative">
         {/* Logo Section (Simulated AIIMS Seal) */}
         <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center border-4 border-blue-200 shadow-xl relative group">
            <div className="absolute inset-0 rounded-full border border-blue-100 m-1"></div>
            <div className="text-center transform transition-transform group-hover:scale-105">
              <div className="text-[6px] md:text-[8px] font-black text-blue-900 uppercase tracking-widest mb-0.5">AIIMS</div>
              <div className="bg-blue-600 text-white p-1.5 rounded-full mb-0.5">
                 <Stethoscope className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2.5} />
              </div>
              <div className="text-[6px] md:text-[8px] font-black text-blue-900 uppercase tracking-widest mt-0.5">Exam</div>
            </div>
         </div>

         {/* Text Section */}
         <div className="flex-grow flex flex-col justify-center">
           <h3 className="text-white text-lg md:text-2xl font-black uppercase leading-none tracking-tight drop-shadow-lg mb-3">
             {title}
           </h3>
           
           {/* Yellow Highlight Box */}
           <div className="self-start bg-yellow-400 text-blue-950 font-black px-3 py-1 md:px-5 md:py-2 rounded-lg transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-xs md:text-base border-2 border-yellow-300">
             {subtitle}
           </div>
         </div>
       </div>
    </div>
  );
};
