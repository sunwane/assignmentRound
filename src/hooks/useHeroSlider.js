import { useCallback, useEffect, useState } from "react";
import { getNormalizedSlideIndex } from "../utils/heroSliderUtils";

const DEFAULT_AUTOPLAY_INTERVAL = 6000;

export function useHeroSlider(totalSlides, options = {}) {
  const { autoplayInterval = DEFAULT_AUTOPLAY_INTERVAL, autoplay = true } =
    options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex(getNormalizedSlideIndex(index, totalSlides));
    },
    [totalSlides],
  );

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!autoplay || isPaused || totalSlides <= 1) return undefined;

    const timer = window.setInterval(goToNext, autoplayInterval);

    return () => window.clearInterval(timer);
  }, [autoplay, autoplayInterval, goToNext, isPaused, totalSlides]);

  return {
    currentIndex,
    goToSlide,
    goToNext,
    goToPrev,
    pause,
    resume,
    isPaused,
  };
}
