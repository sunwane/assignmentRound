import { Link } from 'react-router-dom';

function GenreCard({ genre, index }) {
  return (
    <Link to={`/${genre.id}`} className="block animate-fade-up"
      style={{ animationDelay: `${index * 120}ms`,
        animationFillMode: 'both'}}>
      <div className={`genre-card flex flex-col rounded-lg px-6 py-6 ${genre.backgroundClass} ${genre.textClass} cursor-pointer hover:shadow-lg transition-shadow h-full`}>
        <h3 className="text-xl font-semibold">{genre.name}</h3>
        <div className="text-xs mt-12">{genre.titleQuantity} titles</div>
      </div>
    </Link>
  );
}

export default GenreCard;