import { useCallback, useEffect, useRef, useState } from "react";
import { getNormalizedSlideIndex } from "../utils/heroSliderUtils";

const WHEEL_COOLDOWN_MS = 400;

export function useRecommendSlider(totalItems) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastWheelTimeRef = useRef(0);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex(getNormalizedSlideIndex(index, totalItems));
    },
    [totalItems],
  );

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleWheel = useCallback(
    (event) => {
      if (totalItems <= 1) return;

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelTimeRef.current < WHEEL_COOLDOWN_MS) return;

      lastWheelTimeRef.current = now;

      if (event.deltaY > 0) {
        goToNext();
      } else if (event.deltaY < 0) {
        goToPrev();
      }
    },
    [goToNext, goToPrev, totalItems],
  );

  useEffect(() => {
    if (currentIndex >= totalItems) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalItems]);

  return {
    currentIndex,
    goToSlide,
    goToNext,
    goToPrev,
    handleWheel,
  };
}
