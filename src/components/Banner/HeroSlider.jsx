import { useHeroSlider } from "../../hooks/useHeroSlider";
import { getSlideTransform } from "../../utils/heroSliderUtils";
import HeroSlide from "./HeroSlide";

function HeroSlider({ slides = [] }) {
  const { currentIndex, goToSlide, goToNext, goToPrev, pause, resume } =
    useHeroSlider(slides.length);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured bookstore highlights"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: getSlideTransform(currentIndex) }}
      >
        {slides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </div>

      <button
        type="button"
        onClick={goToPrev}
        className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition hover:bg-black/40 md:inline-flex"
        aria-label="Previous slide"
      >
        <span aria-hidden="true">&larr;</span> {/* &larr; is the left arrow symbol */}
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition hover:bg-black/40 md:inline-flex"
        aria-label="Next slide"
      >
        <span aria-hidden="true">&rarr;</span> {/* &rarr; is the left arrow symbol */}
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === currentIndex
                ? "w-8 bg-(--highlight-color) scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
