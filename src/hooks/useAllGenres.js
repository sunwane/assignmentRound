import { useMemo } from 'react';
import { books } from '../data/BookData';

export const useAllGenres = () => {
  return useMemo(() => {
    const genreMap = new Map();
    books.forEach((book) => {
      if (!genreMap.has(book.genre)) {
        genreMap.set(book.genre, {
          id: book.genre,
          name:
            book.genre.charAt(0).toUpperCase() +
            book.genre.slice(1).replace('-', ' '),
        });
      }
    });
    return Array.from(genreMap.values());
  }, []);
};
