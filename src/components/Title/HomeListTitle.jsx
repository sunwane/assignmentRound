function HomeListTitle({pretitle, title}) {
  return (
    <div className="home-list-title">
      <h3 className="uppercase text-sm">{pretitle}</h3>
      <h1 className="lg:text-4xl md:text-3xl text-2xl tracking-tight font-bold">{title}</h1>
    </div>
  );
}

export default HomeListTitle;