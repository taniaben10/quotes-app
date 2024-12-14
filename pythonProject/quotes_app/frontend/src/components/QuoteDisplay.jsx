import React from 'react';
import { Quote } from 'lucide-react';

const QuoteDisplay = () => {
  const quote = {
    quote: "Every time I took a long leave from home, I felt as if I were going to conquer the world. Or rather, take possession of what is my birthright, my inheritance.",
    author: "Ella Maillart",
    category: "home"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <Quote className="w-10 h-10 text-blue-500" />
            
            <p className="text-xl font-serif italic text-gray-800">
              {quote.quote}
            </p>
            
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-lg font-semibold text-gray-700">
                — {quote.author}
              </p>
              <span className="text-sm text-gray-500 capitalize">
                Catégorie: {quote.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;