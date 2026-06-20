import { useState } from 'react';

function FilterBar({ genres, currentGenre, onGenreChange, onSortChange, sortBy }) {
  const [showSort, setShowSort] = useState(false);

  const sortOptions = [
    { value: 'default', label: 'Relevance' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'title', label: 'Title: A to Z' },
  ];

  return (
    <div className="mb-3 pb-6 border-b-2 border-(--border-color)/50 flex justify-center flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:text-base text-sm">
      <div className="flex flex-wrap gap-2">
        {/* All Button */}
        <button
          onClick={() => onGenreChange('all')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentGenre === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>

        {/* Genre Buttons */}
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onGenreChange(genre.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentGenre === genre.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="relative inline-block">
        <button
          onClick={() => setShowSort(!showSort)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
        >
          Sort by: {sortOptions.find((option) => option.value === sortBy)?.label || 'Relevance'}
          <svg
            className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {showSort && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setShowSort(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
                  sortBy === option.value ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
