import { useEffect, useRef } from "react";
import { useRecommendSlider, useRecommendSliderLayout } from "../../hooks/useRecommendSlider";
import {
  getBookCoverSrc,
  getCardStepRem,
  getFeaturedMonthLabel,
  getRecommendScrollIndex,
  getSlideTransform,
  getViewportSizeRem,
} from "../../utils/recommendSliderUtils";
import RecommendCard from "./RecommendCard";

function NavButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 bg-white/10 text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
      aria-label={label}
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}

function RecommendCardSlider({ recommends = [] }) {
  const wheelTargetRef = useRef(null);
  const {
    visibleCount,
    orientation,
    cardHeightRem,
    cardWidthRem,
    cardGapRem,
    useFullWidth,
  } = useRecommendSliderLayout();
  const { currentIndex, goToSlide, goToNext, goToPrev, handleWheel } =
    useRecommendSlider(recommends.length);

  const isVertical = orientation === "vertical";
  const cardSizeRem = isVertical ? cardHeightRem : cardWidthRem;
  const cardStepRem = getCardStepRem(cardSizeRem, cardGapRem);
  const viewportSizeRem = getViewportSizeRem(visibleCount, cardStepRem, cardGapRem);

  const selectedBook = recommends[currentIndex];
  const featuredMonth = getFeaturedMonthLabel();
  const scrollIndex = getRecommendScrollIndex(
    currentIndex,
    recommends.length,
    visibleCount,
  );
  const slideTransform = getSlideTransform(orientation, scrollIndex, cardStepRem, {
    useFullWidth,
  });

  useEffect(() => {
    const element = wheelTargetRef.current;
    if (!element) return undefined;

    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  if (recommends.length === 0) return null;

  const titles = (
    <>
      <h3 className="lg:-mb-2 md:-mb-1 text-xs uppercase tracking-wider md:text-md lg:text-lg">
        Featured this {featuredMonth}
      </h3>
      <h2 className="mb-0 max-w-none text-3xl font-bold uppercase md:mb-10 md:max-w-2xl md:text-4xl lg:text-5xl">
        Loved by our editors
      </h2>
    </>
  );

  const coverImage = selectedBook && (
    <div className="relative aspect-5/8 w-full max-w-36 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl sm:max-w-40 md:max-w-sm">
      <img
        key={selectedBook.id}
        src={getBookCoverSrc(selectedBook)}
        alt={`Cover of ${selectedBook.title}`}
        className="h-full w-full object-cover transition-opacity duration-500"
      />
    </div>
  );

  const cardTrack = (
    <div
      className={`relative overflow-hidden ${useFullWidth || isVertical ? "w-full" : "max-w-full"}`}
      style={
        isVertical
          ? { height: `${viewportSizeRem}rem` }
          : useFullWidth
            ? undefined
            : { width: `${viewportSizeRem}rem`, maxWidth: "100%" }
      }
    >
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isVertical ? "flex-col gap-3" : useFullWidth ? "flex-row" : "flex-row gap-3"
        }`}
        style={{ transform: slideTransform }}
      >
        {recommends.map((book, index) => (
          <div
            key={book.id}
            className={useFullWidth ? "w-full shrink-0 basis-full" : "shrink-0"}
            style={
              useFullWidth
                ? { minHeight: `${cardHeightRem}rem` }
                : isVertical
                  ? { height: `${cardHeightRem}rem` }
                  : {
                      width: `${cardWidthRem}rem`,
                      height: `${cardHeightRem}rem`,
                    }
            }
          >
            <RecommendCard
              book={book}
              isActive={index === currentIndex}
              onSelect={() => goToSlide(index)}
              isCompact={useFullWidth}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const viewAllLink = (
    <a
      href="#"
      className="button inline-flex w-fit border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
    >
      View all
    </a>
  );

  return (
    <section
      ref={wheelTargetRef}
      className="w-full text-white"
      aria-roledescription="carousel"
      aria-label="Loved by our editors"
    >
      <div className="flex w-full flex-col gap-6 md:hidden">
        <div className="w-full">{titles}</div>

        <div className="flex w-full items-center justify-center gap-3 px-1">
          <NavButton onClick={goToPrev} label="Previous recommendation">
            &larr;
          </NavButton>
          {coverImage}
          <NavButton onClick={goToNext} label="Next recommendation">
            &rarr;
          </NavButton>
        </div>

        <div className="w-full">{cardTrack}</div>

        {viewAllLink}
      </div>

      <div className="hidden md:ml-8 md:flex md:flex-row md:gap-10 lg:gap-16">
        <div className="flex grow flex-col justify-center gap-4">
          {titles}
          {cardTrack}
          <div className="mt-8">{viewAllLink}</div>
        </div>

        <div className="flex w-80 shrink-0 items-center justify-center gap-4 lg:w-md lg:justify-end">
          {coverImage}

          <div className="flex flex-col gap-3">
            <NavButton onClick={goToPrev} label="Previous recommendation">
              &uarr;
            </NavButton>
            <NavButton onClick={goToNext} label="Next recommendation">
              &darr;
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendCardSlider;
