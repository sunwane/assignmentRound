function Footer() {
  return (
    <footer className="bg-(--primary-color) border-t-2 border-(--border-color)">
      <div className="flex lg:flex-row flex-col justify-between py-8 px-10 md:gap-8 gap-10 max-w-400 mx-auto items-center">
        <div className="flex-1 max-w-xs items-center flex flex-col text-center lg:items-start">
          <a href="/" className="flex items-center space-x-2 mb-3 -ml-0.5">
            <h1 className="text-2xl font-black bg-linear-to-b from-blue-400 to-sky-500 px-2.5 pt-0.5 pb-1 text-black">P</h1>
            <h1 className="text-2xl font-black text-white">Page & Co.</h1>
          </a>
          <div className="text-sm text-gray-400 lg:text-justify text-center">
            An independent bookshop for readers who like to take their time. Open since 1998.
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <img src="/src/assets/linkedin-icon.png" className="w-5 h-5" alt="instagram" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <img src="/src/assets/x-icon.png" className="w-5 h-5" alt="twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <img src="/src/assets/face-icon.png" className="w-5 h-5" alt="facebook" />
            </a>
          </div>
        </div>

        <div className="md:flex-1 flex md:justify-center gap-12 lg:gap-16 xl:gap-24 xl:mx-10 md:mx-6 md:text-left text-center">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-white uppercase tracking-tight text-sm">Shop</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">New arrivals</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Bestsellers</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Fiction</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Children</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Gift cards</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-white uppercase tracking-tight text-sm">About</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Our Story</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Events</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Visit the shop</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Journal</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-white uppercase tracking-tight text-sm">Help</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Shipping</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Returns</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">FAQ</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-200">Contact</a>
          </div>
        </div>

        <div className="flex-1 max-w-xs md:items-start items-center flex flex-col text-center md:text-left">
          <h3 className="font-bold text-white uppercase tracking-tight text-sm mb-2">The reading room</h3>
          <div className="text-sm text-gray-400 mb-3">
            One handpicked recommendation in your inbox every week.
          </div>
          <div className="flex flex-col md:flex-row md:items-center w-full gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 px-3 py-2 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-(--border-color) bg-white/10" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">Join</button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between border-t border-(--border-color)">
        <div className="flex items-center justify-between max-w-400 mx-auto w-full md:px-12 py-4 text-center flex-col md:flex-row gap-1">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Page & Co. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">Free shipping on orders over $35</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;