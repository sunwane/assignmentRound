import HeroSlider from "../../components/Banner/HeroSlider";
import GenreCardList from "../../components/Card/GenreCardList";
import HomeListTitle from "../../components/Title/HomeListTitle";
import RecommendCardSlider from "../../components/Banner/RecommendCardSlider";
import GridCardLayout from "../../layouts/GridCardLayout/GridCardLayout";
import BookCard from "../../components/Card/BookCard";
import Banner from "../../components/Banner/Banner";

import { genres, heroSliderSlides, recommendedBooks, bestsellerBooks, newBooks } from "../../data/HomeData";

function HomePage() {
  return (
    <div className="w-full">
      <HeroSlider slides={heroSliderSlides} />
      <div className="px-8 py-10">
        <HomeListTitle pretitle="Find Your Shelf" title="Browser by genre" />
        <GenreCardList genres={genres} />
      </div>
      <div className="px-8 py-10 bg-(--primary-color)">
        <RecommendCardSlider recommends={recommendedBooks} />
      </div>
      <div className="px-8 py-10">
        <HomeListTitle pretitle="Most Loved" title="Bestsellers" />
        <GridCardLayout className="mt-4">
          {bestsellerBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </GridCardLayout>
      </div>
      <Banner />
      <div className="px-8 py-10">
        <HomeListTitle pretitle="Hot off the press" title="New arrivals" />
        <GridCardLayout className="mt-4">
          {newBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </GridCardLayout>
      </div>
    </div>
  )
}

export default HomePage