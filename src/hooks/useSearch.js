import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const handleSearch = (query) => {
    if (query && query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchParams({});
  };

  return {
    searchQuery,
    handleSearch,
    clearSearch,
    isSearching: !!searchQuery,
  };
};
