function SearchBar() {
  return (
    <div className="flex-1 max-w-70">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search title, authors..."
          className="w-full px-4 py-2 pl-10 focus:outline-none placeholder-gray-400"
        />
        <img 
          src="/src/assets/search-icon.png" 
          alt="Search" 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;