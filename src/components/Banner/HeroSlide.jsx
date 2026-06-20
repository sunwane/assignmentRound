import HeroAnimation from "../../assets/Book-loading.svg";

function HeroSlide({ slide }) {
  return (
    <article
      className={`relative flex min-h-[40vh] w-full shrink-0 flex-col justify-center px-8 py-16 md:min-h-[70vh] md:px-16 lg:min-h-[90vh] lg:px-24 ${slide.backgroundClass} ${slide.textClass}`}
      aria-labelledby={`hero-slide-title-${slide.id}`}
    >
      <div className="lg:max-w-[54vw] md:max-w-xl max-w-lg">
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

        <div
          className="absolute right-20 bottom-15 hidden lg:flex xl:w-[35vw] w-[28vw] h-[80%] items-center justify-center rounded-full
            aspect-1/3
            bg-linear-to-br
            from-white/10
            via-blue-200/5
            to-blue-400/10

            border
            border-white/15

            backdrop-blur-md

            shadow-[0_20px_60px_rgba(0,0,0,.25)]

            overflow-hidden
          "
        >
          {/* glow */}
          <div
            className="
              absolute
              w-72
              h-72
              rounded-full
              bg-blue-300/20
              blur-3xl
            "
          />

          <img
            src={HeroAnimation}
            alt=""
            className="
              relative
              z-10
              w-[85%]
              object-contain
              animate-[float_6s_ease-in-out_infinite]
            "
          />
        </div>
    </article>
  );
}

export default HeroSlide;
