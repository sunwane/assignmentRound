export const RECOMMEND_CARD_HEIGHT_REM = 6.75;
export const RECOMMEND_CARD_GAP_REM = 0.75;
export const RECOMMEND_CARD_WIDTH_REM = 13;

export function getCardStepRem(cardSizeRem, cardGapRem = RECOMMEND_CARD_GAP_REM) {
  return cardSizeRem + cardGapRem;
}

export function getViewportSizeRem(visibleCount, cardStepRem, cardGapRem = RECOMMEND_CARD_GAP_REM) {
  return visibleCount * cardStepRem - cardGapRem;
}

export function getSlideTransform(
  orientation,
  scrollIndex,
  cardStepRem,
  { useFullWidth = false } = {},
) {
  if (useFullWidth && orientation === "horizontal") {
    return `translateX(-${scrollIndex * 100}%)`;
  }

  const offset = scrollIndex * cardStepRem;
  return orientation === "horizontal"
    ? `translateX(-${offset}rem)`
    : `translateY(-${offset}rem)`;
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
