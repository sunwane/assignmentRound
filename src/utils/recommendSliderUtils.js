export function getVerticalSlideTransform(scrollIndex, cardStepRem) {
  return `translateY(-${scrollIndex * cardStepRem}rem)`;
}

export function getRecommendScrollIndex(
  currentIndex,
  totalItems,
  visibleCount = 3,
) {
  if (totalItems <= visibleCount) return 0;

  const maxScroll = totalItems - Math.floor(visibleCount);
  const centered = currentIndex - Math.floor(visibleCount / 2);

  return Math.min(Math.max(0, centered), maxScroll);
}

export function getFeaturedMonthLabel(date = new Date()) {
  return date.toLocaleString("en-US", { month: "long" });
}

export function getBookCoverSrc(book) {
  if (book.coverImage) return book.coverImage;

  const label = encodeURIComponent(book.title.slice(0, 24));
  return `https://placehold.co/480x720/1e2a45/FED65B?text=${label}`;
}
