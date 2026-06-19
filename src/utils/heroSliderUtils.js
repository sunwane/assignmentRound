export function getNormalizedSlideIndex(index, totalSlides) {
  if (totalSlides <= 0) return 0;
  return ((index % totalSlides) + totalSlides) % totalSlides;
}

export function getSlideTransform(index) {
  return `translateX(-${index * 100}%)`;
}
