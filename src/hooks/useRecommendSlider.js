import { useCallback, useEffect, useRef, useState } from "react";
import { getNormalizedSlideIndex } from "../utils/heroSliderUtils";
import {
  RECOMMEND_CARD_HEIGHT_REM,
  RECOMMEND_CARD_GAP_REM,
  RECOMMEND_CARD_WIDTH_REM,
} from "../utils/recommendSliderUtils";

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

const DEFAULT_LAYOUT = {
  visibleCount: 1,
  orientation: "horizontal",
  cardHeightRem: RECOMMEND_CARD_HEIGHT_REM,
  cardWidthRem: RECOMMEND_CARD_WIDTH_REM,
  cardGapRem: 0,
  useFullWidth: true,
};

const MD_LAYOUT = {
  visibleCount: 3,
  orientation: "vertical",
  cardHeightRem: RECOMMEND_CARD_HEIGHT_REM,
  cardWidthRem: RECOMMEND_CARD_WIDTH_REM,
  cardGapRem: RECOMMEND_CARD_GAP_REM,
  useFullWidth: false,
};

const LG_LAYOUT = {
  visibleCount: 3,
  orientation: "vertical",
  cardHeightRem: RECOMMEND_CARD_HEIGHT_REM,
  cardWidthRem: RECOMMEND_CARD_WIDTH_REM,
  cardGapRem: RECOMMEND_CARD_GAP_REM,
  useFullWidth: false,
};

function resolveLayout() {
  if (window.matchMedia("(min-width: 1024px)").matches) return LG_LAYOUT;
  if (window.matchMedia("(min-width: 768px)").matches) return MD_LAYOUT;
  return DEFAULT_LAYOUT;
}

export function useRecommendSliderLayout() {
  const [layout, setLayout] = useState(DEFAULT_LAYOUT);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");

    const updateLayout = () => {
      setLayout(resolveLayout());
    };

    updateLayout();
    mdQuery.addEventListener("change", updateLayout);
    lgQuery.addEventListener("change", updateLayout);

    return () => {
      mdQuery.removeEventListener("change", updateLayout);
      lgQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  return layout;
}

function useVisibleRecommendCount() {
  return useRecommendSliderLayout().visibleCount;
}
