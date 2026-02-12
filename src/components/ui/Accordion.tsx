import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-200 hover:border-blue-200">
      <button
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="flex items-start font-bold text-slate-900 text-lg">
          <HelpCircle className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`} />
          {question}
        </span>
        <span className={`ml-4 p-1 rounded-full ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: { question: string; answer: string }[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
