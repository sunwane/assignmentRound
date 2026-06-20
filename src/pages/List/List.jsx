import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import GridCardLayout from '../../layouts/GridCardLayout/GridCardLayout';
import BookCard from '../../components/Card/BookCard';
import FilterBar from '../../components/Filter/FilterBar';
import Pagination from '../../components/Pagination/Pagination';
import HomeListTitle from '../../components/Title/HomeListTitle';
import { useFilteredBooks } from '../../hooks/useFilteredBooks';
import { useAllGenres } from '../../hooks/useAllGenres';

function ListPage({ genre }) {
  const { genre: genreParam } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const currentGenre = genreParam || genre || 'all';
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const { books: paginatedBooks, totalBooks, totalPages } = useFilteredBooks(
    currentGenre,
    sortBy,
    currentPage,
    15,
    searchQuery
  );

  const allGenres = useAllGenres();

  const genreNames = {
    fiction: 'Fiction',
    mystery: 'Mystery',
    'sci-fi': 'Sci-Fi',
    poetry: 'Poetry',
    children: 'Children',
    'non-fiction': 'Non-Fiction',
    all: 'All Books',
  };

  const pageTitle = searchQuery 
    ? `Search: "${searchQuery}"` 
    : genreNames[currentGenre] || 'Books';

  const handleGenreChange = (newGenre) => {
    setCurrentPage(1);
    setSortBy('default');
    if (newGenre === 'all') {
      if (searchQuery) {
        navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
      } else {
        navigate('/shop');
      }
    } else {
      if (searchQuery) {
        navigate(`/shop/${newGenre}?q=${encodeURIComponent(searchQuery)}`);
      } else {
        navigate(`/shop/${newGenre}`);
      }
    }
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  return (
    <div className="md:px-8 md:py-6 px-4 py-4">
      <div className="flex flex-col gap-2 mb-6 px-8 text-center py-4 bg-linear-to-b from-gray-300 to-gray-200">
        <HomeListTitle pretitle="Results" title={pageTitle} />
        <span className="text-sm text-gray-600">({totalBooks} titles in the collection)</span>
      </div>

      <FilterBar
        genres={allGenres}
        currentGenre={currentGenre}
        onGenreChange={handleGenreChange}
        onSortChange={handleSortChange}
        sortBy={sortBy}
      />

      {paginatedBooks.length > 0 ? (
        <>
          <GridCardLayout>
            {paginatedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </GridCardLayout>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No books found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default ListPage;