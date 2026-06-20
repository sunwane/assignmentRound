import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getBagItemPrice } from '../../hooks/useBag';

function BagCard({ item, onRemove, onUpdateQuantity }) {
  const [imageError, setImageError] = useState(false);
  const unitPrice = getBagItemPrice(item);
  const lineTotal = unitPrice * item.quantity;

  return (
    <div className="flex gap-4 border-b border-(--border-color) pb-4 last:border-b-0 last:pb-0">
      <Link to={`/books/${item.id}`} className="shrink-0 w-24 md:w-28">
        {item.coverImage && !imageError ? (
          <img
            src={item.coverImage}
            alt={item.title}
            className="w-full aspect-5/8 object-cover rounded"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full aspect-5/8 bg-gray-200 flex items-center justify-center text-gray-500 rounded text-xs">
            No Image
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col justify-between min-w-0">

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
          <div className="flex flex-col min-w-0">
            <Link
              to={`/books/${item.id}`}
              className="text-base md:text-lg font-semibold line-clamp-2 hover:text-blue-600"
            >
              {item.title}
            </Link>
            <p className="text-sm text-gray-600 mt-1">{item.author}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-red-600">${unitPrice.toFixed(2)}</span>
              {item.saleprice && (
                <span className="text-sm text-gray-500 line-through">
                  ${item.price.toFixed(2)}
                </span>
              )}
            </div>
            
          </div>
          <div className="flex flex-col items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded border border-(--border-color) hover:bg-gray-100 transition"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded border border-(--border-color) hover:bg-gray-100 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full justify-between mt-3 border-t border-(--border-color) pt-2 px-1">
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="text-sm text-gray-500 hover:text-red-600 transition"
          >
            Remove
          </button>
          <span className="font-semibold text-xl text-red-600">${lineTotal.toFixed(2)}</span>

        </div>
        
      </div>
    </div>
  );
}

export default BagCard;
