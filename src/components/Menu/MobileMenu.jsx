import { Link } from 'react-router-dom';
import { GENRES, NAV_LINKS } from '../../utils/navConstants';

function MobileMenu({ isOpen, onClose, isLoggedIn }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 border-l-4 border-transparent hover:border-l-4 hover:border-blue-600"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t" />

        {/* Genres Section */}
        <div className="py-4">
          <h3 className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
            Browse by Genre
          </h3>
          {GENRES.map((genre) => (
            <Link
              key={genre.id}
              to={`/shop/${genre.id}`}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
              onClick={onClose}
            >
              {genre.label}
            </Link>
          ))}
        </div>

        <div className="border-t" />

        {/* User Section */}
        <div className="py-4 px-4 space-y-3">
          {isLoggedIn ? (
            <>
              <div className="text-sm font-semibold text-gray-700">
                👤 My Account
              </div>
              <button className="w-full px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition">
                Logout
              </button>
            </>
          ) : (
            <button className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition">
              Login
            </button>
          )}

          <button className="w-full px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition flex items-center justify-center gap-2">
            🛒 Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
