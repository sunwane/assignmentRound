import { useMemo } from 'react';
import { useBooks, useBadgedBooks } from './useBooks';

export const useFilteredBooks = (genre, sortBy = 'default', currentPage = 1, pageSize = 15, searchQuery = '') => {
  const BOOKS_PER_PAGE = pageSize;
  const badgedBooks = useBadgedBooks();

  // Search + Filter by genre
  const filteredByGenreAndSearch = useMemo(() => {
    let result = badgedBooks;

    // Search filter
    if (searchQuery && searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerQuery) ||
          book.author.toLowerCase().includes(lowerQuery) ||
          (book.description && book.description.toLowerCase().includes(lowerQuery))
      );
    }

    // Genre filter
    if (!genre || genre === 'all') {
      return result;
    }
    return result.filter(book => book.genre === genre);
  }, [badgedBooks, genre, searchQuery]);

  // Sort
  const sortedBooks = useMemo(() => {
    const sorted = [...filteredByGenreAndSearch];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price-high':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  }, [filteredByGenreAndSearch, sortBy]);

  // Pagination
  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    return sortedBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE);
  }, [sortedBooks, currentPage]);

  const totalPages = Math.ceil(sortedBooks.length / BOOKS_PER_PAGE);

  return {
    books: paginatedBooks,
    totalBooks: sortedBooks.length,
    totalPages,
    currentPage,
    pageSize: BOOKS_PER_PAGE,
  };
};
