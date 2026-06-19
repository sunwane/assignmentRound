import { useEffect, useRef } from "react";
import { useRecommendSlider } from "../../hooks/useRecommendSlider";
import { useVisibleRecommendCount } from "../../hooks/useVisibleRecommendCount";
import {
  getBookCoverSrc,
  getFeaturedMonthLabel,
  getRecommendScrollIndex,
  getVerticalSlideTransform,
} from "../../utils/recommendSliderUtils";
import RecommendCard from "./RecommendCard";

const CARD_HEIGHT_REM = 6.75;
const CARD_GAP_REM = 0.75;
const CARD_STEP_REM = CARD_HEIGHT_REM + CARD_GAP_REM;

function RecommendCardSlider({ recommends = [] }) {
  const wheelTargetRef = useRef(null);
  const visibleCount = useVisibleRecommendCount();
  const { currentIndex, goToSlide, goToNext, goToPrev, handleWheel } =
    useRecommendSlider(recommends.length);

  const selectedBook = recommends[currentIndex];
  const featuredMonth = getFeaturedMonthLabel();
  const scrollIndex = getRecommendScrollIndex(
    currentIndex,
    recommends.length,
    visibleCount,
  );
  const viewportHeightRem = visibleCount * CARD_STEP_REM - CARD_GAP_REM;

  useEffect(() => {
    const element = wheelTargetRef.current;
    if (!element) return undefined;

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  if (recommends.length === 0) return null;

  return (
    <section
      ref={wheelTargetRef}
      className="w-full text-white"
      aria-roledescription="carousel"
      aria-label="Loved by our editors"
    >
      <div className="flex gap-10 lg:gap-16 ml-8">
        <div className="flex flex-col justify-center grow gap-4">
          <h3 className="text-xs uppercase tracking-wider md:text-md lg:text-lg">
            Featured this {featuredMonth}
          </h3>
          <h2 className="uppercase mb-10 max-w-2xl text-3xl leading-6 font-bold md:text-4xl lg:text-5xl">
            Loved by our editors
          </h2>

          <div
            className="relative overflow-hidden"
            style={{ height: `${viewportHeightRem}rem` }}
          >
            <div
              className="flex lg:flex-col md:flex-col gap-3 transition-transform duration-500 ease-in-out"
              style={{
                transform: getVerticalSlideTransform(scrollIndex, CARD_STEP_REM),
              }}
            >
              {recommends.map((book, index) => (
                <div
                  key={book.id}
                  className="shrink-0"
                  style={{ height: `${CARD_HEIGHT_REM}rem` }}
                >
                  <RecommendCard
                    book={book}
                    isActive={index === currentIndex}
                    onSelect={() => goToSlide(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="button mt-8 inline-flex w-fit border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
          >
            View all
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-end shrink-0 lg:w-md md:w-80">
          <div className="relative aspect-5/8 w-full max-w-xs overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl md:max-w-sm">
            {selectedBook && (
              <img
                key={selectedBook.id}
                src={getBookCoverSrc(selectedBook)}
                alt={`Cover of ${selectedBook.title}`}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={goToPrev}
              className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
              aria-label="Previous recommendation"
            >
              <span aria-hidden="true">&uarr;</span>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
              aria-label="Next recommendation"
            >
              <span aria-hidden="true">&darr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendCardSlider;
