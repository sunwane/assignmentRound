function Banner() {
  return (
    <div className="my-2 md:mx-8 md:px-12 md:py-12 p-8 mx-6 bg-linear-to-br from-sky-950 to-blue-500 rounded-lg flex lg:flex-row md:flex-row flex-col justify-between md:items-center text-white">
      <div className="w-full lg:max-w-lg md:max-w-md">
        <h3 className="uppercase tracking-tighter xl:text-sm lg:text-sm text-xs mb-2">The reading room</h3>
        <h1 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-black lg:text-justify md:text-justify xl:leading-12 lg:leading-12">Free shipping on every order over $35</h1>
        <p className="text-lg mt-4 text-justify">Plus 15% off your first month and a weekly recommendation picked just for you.</p>
      </div>
      <div className="mt-4 text-nowrap">
        <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200 transition text-lg">Join free</button>
      </div>
    </div>
  );
}

export default Banner;