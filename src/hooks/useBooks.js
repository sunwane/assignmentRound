import { useMemo } from 'react';
import { books as allBooks } from '../data/BookData';
import { 
  getBooksByIds, 
} from '../utils/bookUtils';

export const useBooks = () => {
  return useMemo(() => {
    return allBooks;
  }, []);
};

export const useBadgedBooks = () => {
  return useMemo(() => {
    const newBooksIds = [
      'book-tomorrow-tomorrow',
      'book-guest-list',
      'book-wild-robot',
      'book-atomic-habits',
      'book-sun-and-her-flowers'
    ];

    const bestsellerBooksIds = [
      'book-dune',
      'book-silent-patient',
      'book-sapiens',
      'book-normal-people',
      'book-matilda',
    ];

    const newBooksMap = new Set(newBooksIds);
    const bestsellerBooksMap = new Set(bestsellerBooksIds);

    return allBooks.map((book) => {
      if (newBooksMap.has(book.id)) {
        return { ...book, badge: 'new' };
      }
      if (bestsellerBooksMap.has(book.id)) {
        return { ...book, badge: 'bestseller' };
      }
      return book;
    });
  }, []);
};

export const useBookById = (id) => {
  return useMemo(() => {
    const book = getBooksByIds(allBooks, [id])[0];
    return book || null;
  }, [id]);
};
