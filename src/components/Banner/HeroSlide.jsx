function HeroSlide({ slide }) {
  return (
    <article
      className={`relative flex min-h-[40vh] w-full shrink-0 flex-col justify-center px-8 py-16 md:min-h-[70vh] md:px-16 lg:min-h-[90vh] lg:px-24 ${slide.backgroundClass} ${slide.textClass}`}
      aria-labelledby={`hero-slide-title-${slide.id}`}
    >
      <div className="lg:max-w-2xl md:max-w-xl max-w-lg">
        <p
          className={`subtitle mb-4 text-xs font-medium uppercase tracking-[0.2em] md:text-sm ${slide.accentClass}`}
        >
          {slide.eyebrow}
        </p>
        <h2
          id={`hero-slide-title-${slide.id}`}
          className="title mb-5 text-3xl leading-tight font-bold md:text-5xl lg:text-6xl"
        >
          {slide.title}
        </h2>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          {slide.description}
        </p>
        <a
          href={slide.buttonHref}
          className="button inline-block border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:border-(--highlight-color) hover:bg-(--highlight-color) hover:text-(--primary-color)"
        >
          {slide.buttonLabel}
        </a>
      </div>

    </article>
  );
}

export default HeroSlide;
