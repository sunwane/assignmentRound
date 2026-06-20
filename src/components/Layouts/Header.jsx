import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../Input/SearchBar";
import MobileMenu from "./MobileMenu";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { useNavigation } from '../../hooks/useNavigation';
import { useBag } from '../../hooks/useBag';
import { useModal } from '../../hooks/useModal';
import { NAV_LINKS } from '../../utils/navConstants';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { getLinkClass } = useNavigation();
  const { totalCount } = useBag();

  const {
    isLoginOpen,
    isRegisterOpen,
    openLogin,
    closeLogin,
    closeRegister,
    switchToRegister,
    switchToLogin
  } = useModal();

  const toggleMenu = () => {
    setSearchOpen(false);
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setMobileMenuOpen(false);
    setSearchOpen((prev) => !prev);
  };

  return (
    <header className="border-b border-(--border-color)">

      {/* MAIN HEADER */}
      <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-20 px-4 lg:px-8 py-3 max-w-400 mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-1 shrink-0">

          {/* MENU */}
          <button
            onClick={toggleMenu}
            className="lg:hidden rounded p-1 hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <h1 className="hidden md:block text-xl lg:text-2xl font-black bg-linear-to-b from-gray-700 to-blue-700 px-2 lg:px-3 pt-1 pb-1.5 text-white">
              P
            </h1>

            <h1 className="text-xl md:text-2xl font-black whitespace-nowrap">
              Page & Co.
            </h1>
          </Link>

        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-1 justify-center uppercase font-mono tracking-tight">
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkClass(link.path, link.isExact)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">

          {/* SEARCH BAR md+ */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* SEARCH ICON MOBILE */}
          <button
            onClick={toggleSearch}
            className="md:hidden hover:opacity-80 transition"
          >
            <svg
              className={`w-5 h-5 transition ${
                searchOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {searchOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              )}
            </svg>
          </button>

          {/* ACCOUNT */}
          <button
            onClick={openLogin}
            className="hover:opacity-80 transition"
          >
            <img
              src="/src/assets/account-icon.jpg"
              className="w-5 md:w-6 h-5 md:h-6"
              alt="user"
            />
          </button>

          {/* BAG */}
          <div className="relative">
            <Link to="/bag">
              <img
                src="/src/assets/bag-icon.jpg"
                className="w-5 md:w-6 h-5 md:h-6"
                alt="bag"
              />
            </Link>

            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* MOBILE SEARCH EXPAND */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          border-t
          border-(--border-color)
          ${
            searchOpen
              ? 'max-h-28 opacity-100 py-2'
              : 'max-h-0 opacity-0 py-0'
          }
        `}
      >
        <div className="px-4">
          <SearchBar />
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isLoggedIn={false}
      />

      {/* LOGIN */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLogin}
        onSwitchToRegister={switchToRegister}
      />

      {/* REGISTER */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeRegister}
        onSwitchToLogin={switchToLogin}
      />

    </header>
  );
}

export default Header;