import { books } from '../data/BookData';

export const getBooksByGenre = (genre = null) => {
  if (!genre || genre === 'all') {
    return books;
  }
  return books.filter(book => book.genre === genre);
};
