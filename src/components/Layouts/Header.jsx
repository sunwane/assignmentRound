import SearchBar from "../Input/SearchBar";

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-10 px-8 py-3 border-b border border-(--border-color)">
        <div className="flex items-center lg:space-x-16 space-x-12">
          <a href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-black bg-linear-to-b from-gray-700 to-blue-700 px-3 pt-1 pb-1.5 text-white">P</h1>
            <h1 className="text-2xl font-black">Page & Co.</h1>
          </a>
          <nav className="flex lg:space-x-6 space-x-4 uppercase leading-6 font-mono tracking-tight text-[#191C1D]">
            <a href="/" className="">Home</a>
            <a href="#" className="">Shop All</a>
            <a href="#" className="">Fiction</a>
            <a href="#" className="">Mystery</a>
            <a href="#" className="">Children</a>
            <a href="#" className="">Poetry</a>
          </nav>
        </div>
        <div className="flex items-center space-x-12 flex-1 justify-end">
          <SearchBar />
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-1.5">
              <img src="/src/assets/account-icon.png" className="w-6.5 h-6" alt="user" />
            </button>
            <button className="">
              <img src="/src/assets/cart-icon.png" className="w-6 h-6" alt="cart" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;