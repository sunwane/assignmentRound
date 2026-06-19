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
