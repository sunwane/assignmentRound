import { useEffect, useState } from "react";

export function useVisibleRecommendCount() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateVisibleCount = () => {
      setVisibleCount(mediaQuery.matches ? 3 : 2);
    };

    updateVisibleCount();
    mediaQuery.addEventListener("change", updateVisibleCount);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibleCount);
    };
  }, []);

  return visibleCount;
}
