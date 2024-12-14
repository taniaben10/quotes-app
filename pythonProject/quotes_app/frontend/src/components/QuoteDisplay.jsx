import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import axios from 'axios';

const QuoteDisplay = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/quote');
        // Vérifie le format de la réponse et gère le cas de données uniques ou multiples
        setQuotes(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (err) {
        // Affiche l'erreur complète pour mieux comprendre
        console.error('Erreur Axios:', err);
        setError(err.response ? err.response.data : err.message); // Gestion d'erreurs avec un message plus détaillé
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!quotes.length) return <div>Aucune citation trouvée</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {quotes.map((quote, index) => (
        <div key={index} className="max-w-2xl bg-white shadow-lg rounded-lg">
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
      ))}
    </div>
  );
};

export default QuoteDisplay;
