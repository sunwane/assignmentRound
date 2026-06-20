import { useEffect, useState } from "react";
import {
  RECOMMEND_CARD_HEIGHT_REM,
  RECOMMEND_CARD_GAP_REM,
  RECOMMEND_CARD_WIDTH_REM,
} from "../utils/recommendSliderUtils";

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

export function useVisibleRecommendCount() {
  return useRecommendSliderLayout().visibleCount;
}
