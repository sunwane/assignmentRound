function GenreCard({ genre }) {
  return (
    <div className={`genre-card flex flex-col rounded-lg px-6 py-6 ${genre.backgroundClass} ${genre.textClass}`}>
      <h3 className="text-xl font-semibold">{genre.name}</h3>
      <div className="text-xs mt-12">{genre.titleQuantity} titles</div>
    </div>
  );
}

export default GenreCard;