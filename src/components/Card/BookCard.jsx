import { useState } from "react";

function BookCard({ book }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col rounded-lg px-4 py-2 lg:px-6 lg:py-4 md:px-6 md:py-4 bg-white relative">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <div className="text-sm text-gray-500">{book.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;