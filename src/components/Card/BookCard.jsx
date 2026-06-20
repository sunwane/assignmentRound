import { useState } from "react";
import { Link } from "react-router-dom";
import starIcon from "../../assets/star-icon.jpg";

function BookCard({ book, index = 0 }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/books/${book.id}`} className="block animate-fade-up"
        style={{ animationDelay: `${index * 120}ms`,
        animationFillMode: 'both'}}
      >
      <div className="cursor-pointer hover:shadow-lg flex flex-col rounded-lg px-4 py-2 lg:px-6 lg:py-4 md:px-6 md:py-4 bg-white relative">
        {/* Badge */}
        {book.badge && (
          <div className={`absolute top-2 ${book.badge === 'new' ? 'right-4' : 'left-4'} px-2 py-1 text-xs font-bold text-white rounded ${book.badge === 'new' ? 'bg-green-500' : 'bg-red-500'}`}>
            {book.badge.toUpperCase()}
          </div>
        )}
        
        {/* Image */}
        {book.coverImage && !imageError ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full aspect-5/8 object-cover rounded"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full aspect-5/8 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
            No Image
          </div>
        )}
        <h3 className="text-[11px] md:text-xs leading-3 mt-3 line-clamp-2">{book.author}</h3>
        <h2 className="text-base leading-6 font-semibold line-clamp-3 min-h-18 mb-1">
          {book.title}
        </h2>
        <div className="mt-0.5 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <div className="font-semibold text-base text-red-600">${book.saleprice || book.price}</div>
            {book.saleprice && (
              <div className="text-gray-500 text-sm line-through">${book.price}</div>
            )}
          </div>
          <div className="flex items-center">
            <img src={starIcon} alt="Star Icon" className="w-3 h-3 mr-1" />
            <div className="text-sm text-gray-500">{book.rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;