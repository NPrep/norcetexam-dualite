import React from 'react';
import { Star, Quote } from 'lucide-react';

const feedbacks = [
  { name: "Priya Sharma", text: "The NPrep GOLD batch concept clarity is unmatched. Cleared NORCET in first attempt!" },
  { name: "Rahul Verma", text: "Rapid Revision series was a lifesaver in the last month. Highly recommended." },
  { name: "Sneha Gupta", text: "Best nursing coaching. The GOLD batch covers everything from basics to advanced." },
  { name: "Amit Patel", text: "Test series analysis helped me improve my negative marking. Thank you NPrep!" },
  { name: "Anjali Singh", text: "I owe my selection to the NPrep GOLD batch. The teachers are amazing." },
  { name: "Vikram Malhotra", text: "Rapid Revision notes are concise and perfect for last-minute study." },
  { name: "Pooja Das", text: "Joined the GOLD batch for NORCET 2025, best decision of my career." },
  { name: "Karan Mehra", text: "The quality of questions in the test series is exactly like the real exam." }
];

export const TestimonialTicker = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Doubled list for seamless infinite scroll */}
        {[...feedbacks, ...feedbacks].map((item, idx) => (
          <div 
            key={idx} 
            className="inline-block w-80 mx-4 bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-200 transition-all whitespace-normal align-top h-48 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-4 h-4 text-blue-200" />
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed line-clamp-4">
                "{item.text.replace(/gold/gi, "GOLD")}"
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-50 flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">
                {item.name.charAt(0)}
              </div>
              <span className="text-slate-900 text-sm font-bold">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
