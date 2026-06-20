import { Link } from 'react-router-dom';
import { GENRES, NAV_LINKS } from '../../utils/navConstants';

function MobileMenu({ isOpen, onClose, isLoggedIn }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* BOOK DRAWER */}
      <div
        className={`
          fixed top-0 left-0
          h-full w-80
          bg-(--background-color)
          shadow-[12px_0_30px_rgba(0,0,0,.18)]
          overflow-hidden
          z-50
          transform transition-transform duration-500
          rounded-r-md
          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }
          lg:hidden
        `}
      >

        {/* BOOK SPINE */}
        <div
          className="
            absolute
            top-0
            right-0
            h-full
            w-8
            bg-linear-to-l
            from-blue-950
            via-blue-800
            to-blue-700
          "
        >
          {/* Spine texture */}
          <div className="absolute left-1 top-0 h-full w-px bg-white/20" />

          <div className="absolute left-3 top-0 h-full w-px bg-black/10" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pr-8">

          {/* HEADER */}
          <div className="flex justify-between items-center p-5 border-b border-(--border-color)">
            <Link
              to="/"
              className="hover:opacity-80 transition"
            >
              <h1 className="text-xl font-black">
                Page & Co.
              </h1>
            </Link>

            <button
              onClick={onClose}
              className="
                text-2xl
                opacity-70
                hover:opacity-100
              "
            >
              ×
            </button>
          </div>

          {/* NAV */}
          <nav className="py-2">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="
                  block
                  px-6
                  py-4
                  hover:bg-white/40
                  border-l-4
                  border-transparent
                  hover:border-blue-700
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-(--border-color)" />

          {/* GENRE */}
          <div className="py-3">
            <h3 className="px-6 py-2 text-xs font-bold uppercase opacity-50">
              Browse by Genre
            </h3>

            {GENRES.map((genre) => (
              <Link
                key={genre.id}
                to={`/shop/${genre.id}`}
                onClick={onClose}
                className="
                  block
                  px-6
                  py-3
                  hover:bg-white/40
                  border-l-4
                  border-transparent
                  hover:border-blue-700
                "
              >
                {genre.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-(--border-color)" />

          {/* USER */}
          <div className="p-5 space-y-3">

            {isLoggedIn ? (
              <>
                <div className="font-semibold">
                  👤 My Account
                </div>

                <button className="w-full rounded bg-red-600 py-3 text-white">
                  Logout
                </button>
              </>
            ) : (
              <button className="w-full rounded bg-blue-700 py-3 text-white">
                Login
              </button>
            )}

            <button
              className="
                w-full
                rounded
                border
                border-(--border-color)
                py-3
              "
            >
              🛒 Cart
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;