function RecommendCard({ book, isActive, onSelect, isCompact = false }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex h-full w-full shrink-0 cursor-pointer flex-col border-l text-left transition duration-300 ${
        isCompact ? "px-4 py-3" : "px-5 py-3 md:px-6 md:py-4"
      } ${
        isActive
          ? "border-(--highlight-color) bg-white/10 shadow-[inset_3px_0_0_0_var(--highlight-color)]"
          : "border-white/10 bg-black/10 hover:border-white/30 hover:bg-white/5"
      }`}
      aria-current={isActive ? "true" : undefined}
    >
      <h2 className={`line-clamp-1 text-base font-semibold md:text-lg ${isActive ? "text-white" : "text-white/80"}`}>
        {book.title}
      </h2>
      <p className={`mt-2 line-clamp-3 text-sm font-light text-white/70 ${isActive ? "text-white/70" : "text-white/50"}`}>
        {book.description}
      </p>
    </button>
  );
}

export default RecommendCard;
