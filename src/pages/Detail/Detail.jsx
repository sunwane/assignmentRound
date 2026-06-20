import { useParams, useNavigate, Link } from "react-router-dom";
import { useBookById, useBooksByGenre } from "../../hooks/useBooks";
import { useState } from "react";
import GridCardLayout from "../../layouts/GridCardLayout/GridCardLayout";
import BookCard from "../../components/Card/BookCard";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useBookById(id);
  const relatedBooks = useBookById(id) ? useBooksByGenre(book.genre) : [];

  const [imageError, setImageError] = useState(false);

  if (!book) {
    return (
      <div className="lg:px-8 lg:py-4 max-w-400 mx-auto px-4 py-2">
        <h3 className="text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link> / <Link to="/books" className="hover:text-blue-600">Books</Link> / Book Not Found
        </h3>
        <div className="min-h-[50vh] bg-linear-to-b from-gray-300 to-gray-200 my-auto flex flex-col justify-center items-center">
          <h3 className="text-gray-500 text-center text-xl lg:text-3xl md:text-2xl font-bold mb-1">Book Not Found</h3>
          <p className="text-black text-center text-sm lg:text-lg md:text-base">There maybe something wrong, please back to previous page and try again.</p>
          <button
            onClick={() => navigate("/books")}
            className="mt-3 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700"
          >
            Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:px-16 lg:py-4 max-w-400 mx-auto md:px-8 px-4 py-2">
      <h3 className="text-gray-500 mb-4">
        <Link to="/" className="hover:text-blue-600">Home</Link> / <Link to="/books" className="hover:text-blue-600">Books</Link> / {book ? book.title : "Book Detail"}
      </h3>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="flex flex-col px-4 py-2 lg:px-8 lg:py-6 md:px-6 md:py-4 bg-white relative">
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
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-2/3 ml-4 md:pl-8 bg-white py-4 px-4 lg:px-10 md:px-8 md:py-12">
          <div>
            {book.genre && (
              <Link
                to={`/books/${book.genre}`}
                className="text-sm text-gray-500 hover:text-blue-600 transition px-2.5 py-1.5 rounded mb-2 inline-block bg-white border border-(--primary-color) hover:border-blue-700"
              >
                {book.genre.charAt(0).toUpperCase() + book.genre.slice(1)}
              </Link>
            )}
          </div>
          <h1 className="text-3xl xl:text-5xl md:text-4xl font-bold md:mb-2 mb-1">{book.title}</h1>
          <h3 className="text-gray-700 mb-4 text-base md:text-xl">by {book.author}</h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center text-sm text-gray-600 md:text-base">
              <img src="/src/assets/star-icon.png" alt="Star Icon" className="w-4 h-4 mr-1 mb-0.5" />
              <span className="text-gray-600">{book.rating}</span>
            </div>
            •
            <div className="text-gray-600">{book.pageNumber || 0} pages</div>
            •
            <div className="text-gray-600">{book.publishedYear || "Unknown"}</div>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="text-xl lg:text-3xl md:text-2xl text-red-600 font-semibold">${book.saleprice || book.price}</div>
            {book.saleprice && (
              <div className="text-gray-500 text-sm line-through">${book.price}</div>
            )}
          </div>
          <div className="text-gray-700 mb-6 text-justify">
            {book.description || "No description available."}
          </div>
          <div className="flex w-full gap-2 mb-4 pb-4 border-b border-(--border-color)">
            <button className="text-base md:text-lg px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-xl">
              Add to Bag - $ {book.saleprice || book.price}
            </button>
            <button className="text-base md:text-lg px-4 py-3 bg-gray-600 text-white hover:bg-gray-700 rounded-xl">
              Wishlist
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-1 ml-1">
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">Format</h3>
              <div className="text-base md:text-lg">{book.format || "Unknown"}</div>
            </p>
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">Pages</h3>
              <div className="text-base md:text-lg">{book.pageNumber || "Unknown"}</div>
            </p>
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">Published</h3>
              <div className="text-base md:text-lg">{book.publishedYear || "Unknown"}</div>
            </p>
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">Publisher</h3>
              <div className="text-base md:text-lg">{book.publisher || "Unknown"}</div>
            </p>
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">Language</h3>
              <div className="text-base md:text-lg">{book.language || "Unknown"}</div>
            </p>
            <p className="text-gray-700 mb-2 flex flex-col">
              <h3 className="text-xs md:text-sm uppercase">ISBN</h3>
              <div className="text-base md:text-lg">{book.ISBN || "Unknown"}</div>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">You Might Also Like</h2>
        <GridCardLayout>
          {relatedBooks.map((relatedBook) => (
            <BookCard key={relatedBook.id} book={relatedBook} />
          ))}
        </GridCardLayout>
      </div>
    </div>
  );
}

export default DetailPage;