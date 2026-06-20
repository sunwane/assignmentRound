import GenreCard from "./GenreCard";

function GenreCardList({ genres }) {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-4 md:gap-4 py-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
      {genres.map((genre, index) => (
        <GenreCard key={genre.id} genre={genre} index={index} />
      ))}
    </div>
  );
}

export default GenreCardList;