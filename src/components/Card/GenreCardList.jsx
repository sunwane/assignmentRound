import GenreCard from "./GenreCard";

function GenreCardList({ genres }) {
  return (
    <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
}

export default GenreCardList;