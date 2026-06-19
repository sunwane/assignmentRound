function Banner() {
  return (
    <div className="my-2 mx-8 px-12 py-12 bg-linear-to-br from-sky-950 to-blue-500 rounded-lg flex justify-between items-center text-white">
      <div className="max-w-lg">
        <h3 className="uppercase tracking-tighter text-sm mb-2">The reading room</h3>
        <h1 className="text-5xl font-black text-justify leading-12">Free shipping on <br/> every order over $35</h1>
        <p className="text-lg mt-4 text-justify">Plus 15% off your first month and a weekly recommendation picked just for you.</p>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200 transition text-lg">Join free</button>
      </div>
    </div>
  );
}

export default Banner;