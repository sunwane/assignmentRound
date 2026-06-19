import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../Input/SearchBar";
import MobileMenu from "../Menu/MobileMenu";
import { useNavigation } from '../../hooks/useNavigation';
import { NAV_LINKS } from '../../utils/navConstants';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state
  const { getLinkClass } = useNavigation();

  return (
    <header>
      <div className="flex items-center justify-between gap-12 lg:gap-20 md:gap-16 px-4 lg:px-8 py-3 border-b border border-(--border-color)">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity shrink-0">
          <h1 className="text-xl lg:text-2xl font-black bg-linear-to-b from-gray-700 to-blue-700 px-2 lg:px-3 pt-1 pb-1.5 text-white">P</h1>
          <h1 className="hidden sm:block text-lg lg:text-2xl font-black">Page & Co.</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 uppercase leading-6 font-mono tracking-tight flex-1 text-nowrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={getLinkClass(link.path, link.isExact)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex space-x-12 flex-1 justify-end">
          <SearchBar />
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-1.5 hover:opacity-80 transition">
              <img src="/src/assets/account-icon.png" className="w-6 h-6" alt="user" />
            </button>
            <button className="hover:opacity-80 transition">
              <img src="/src/assets/cart-icon.png" className="w-6 h-6" alt="cart" />
            </button>
          </div>
        </div>

        {/* Mobile Right Section */}
        <div className="flex lg:hidden items-center space-x-4 flex-1 justify-end">
          {/* Mobile Search Icon */}
          <button className="hover:opacity-80 transition">
            <img src="/src/assets/search-icon.png" className="w-5 h-5" alt="search" />
          </button>

          {/* Mobile Cart Icon */}
          <button className="hover:opacity-80 transition">
            <img src="/src/assets/cart-icon.png" className="w-5 h-5" alt="cart" />
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
}

export default Header;