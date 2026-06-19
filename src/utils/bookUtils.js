export function countBooksByGenre(books) {
  return books.reduce((counts, book) => {
    counts[book.genre] = (counts[book.genre] ?? 0) + 1;
    return counts;
  }, {});
}

export function enrichGenresWithBookCounts(genres, books) {
  const counts = countBooksByGenre(books);

  return genres.map((genre) => ({
    ...genre,
    titleQuantity: String(counts[genre.id] ?? 0),
  }));
}

export function getBooksByIds(books, ids) {
  const bookMap = new Map(books.map((book) => [book.id, book]));

  return ids
    .map((id) => bookMap.get(id))
    .filter((book) => book !== undefined);
}

export const addBadgesToBooks = (booksWithBadges) => {
  // booksWithBadges là array từ getBooksByIds với .map(book => ({ ...book, badge: "..." }))
  return booksWithBadges;
};

export const getBooksWithBadges = (newBooksIds, bestsellerBooksIds) => {
  const newBooksMap = new Set(newBooksIds);
  const bestsellerBooksMap = new Set(bestsellerBooksIds);

  return books.map((book) => {
    if (newBooksMap.has(book.id)) {
      return { ...book, badge: 'new' };
    }
    if (bestsellerBooksMap.has(book.id)) {
      return { ...book, badge: 'bestseller' };
    }
    return book;
  });
};

export const searchBooks = (query, booksArray = books) => {
  if (!query || query.trim() === '') {
    return booksArray;
  }

  const lowerQuery = query.toLowerCase();
  return booksArray.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      (book.description && book.description.toLowerCase().includes(lowerQuery))
  );
};