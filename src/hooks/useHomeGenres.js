import { useMemo } from 'react';
import { useBadgedBooks } from './useBooks';
import { enrichGenresWithBookCounts } from '../utils/bookUtils';

export const useHomeGenres = () => {
  const badgedBooks = useBadgedBooks();

  return useMemo(() => {
    const genreDefinitions = [
      {
        id: "fiction",
        name: "Fiction",
        backgroundClass: "bg-gradient-to-br from-red-900 to-yellow-500",
        textClass: "text-white",
      },
      {
        id: "mystery",
        name: "Mystery",
        backgroundClass: "bg-gradient-to-br from-indigo-900 to-indigo-500",
        textClass: "text-white",
      },
      {
        id: "sci-fi",
        name: "Sci-Fi",
        backgroundClass: "bg-gradient-to-br from-lime-950 to-lime-500",
        textClass: "text-white",
      },
      {
        id: "poetry",
        name: "Poetry",
        backgroundClass: "bg-gradient-to-br from-pink-900 to-pink-500",
        textClass: "text-white",
      },
      {
        id: "children",
        name: "Children",
        backgroundClass: "bg-gradient-to-br from-yellow-900 to-yellow-500",
        textClass: "text-white",
      },
      {
        id: "non-fiction",
        name: "Non-Fiction",
        backgroundClass: "bg-gradient-to-br from-purple-950 to-purple-500",
        textClass: "text-white",
      },
    ];

    return enrichGenresWithBookCounts(genreDefinitions, badgedBooks);
  }, [badgedBooks]);
};
