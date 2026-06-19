import { useMemo } from 'react';
import HeroSlider from "../../components/Banner/HeroSlider";
import GenreCardList from "../../components/Card/GenreCardList";
import HomeListTitle from "../../components/Title/HomeListTitle";
import RecommendCardSlider from "../../components/Banner/RecommendCardSlider";
import GridCardLayout from "../../layouts/GridCardLayout/GridCardLayout";
import BookCard from "../../components/Card/BookCard";
import Banner from "../../components/Banner/Banner";
import { useBadgedBooks } from "../../hooks/useBooks";
import { useHomeGenres } from "../../hooks/useHomeGenres";
import { getBooksByIds } from "../../utils/bookUtils";

function HomePage() {
  const badgedBooks = useBadgedBooks();
  const genres = useHomeGenres();

  const heroSliderSlides = useMemo(() => [
    {
      id: "featured-this-month",
      eyebrow: "Featured this month",
      title: "Stories worth lingering over",
      description:
        "Handpicked titles from our front table — the books our team is reading, recommending, and reordering before the last copy disappears.",
      buttonLabel: "Explore featured picks",
      buttonHref: "#",
      backgroundClass:
        "bg-linear-to-br from-[#2c1810] via-[#4a2c1a] to-[#6b3f24]",
      textClass: "text-white",
      accentClass: "text-(--highlight-color)",
    },
    {
      id: "staff-favorites",
      eyebrow: "Staff favorites",
      title: "The shelves we keep coming back to",
      description:
        "Our booksellers pick the titles they can't stop pressing into customer's hands.",
      buttonLabel: "Browse bestsellers",
      buttonHref: "#",
      backgroundClass:
        "bg-linear-to-br from-[#1a2e1a] via-[#2d4a2d] to-[#3d5c3d]",
      textClass: "text-white",
      accentClass: "text-(--highlight-color)",
    },
    {
      id: "new-arrivals",
      eyebrow: "New arrivals",
      title: "Fresh off the press",
      description:
        "The latest releases, signed editions, and debut novels — updated weekly so you never miss what's new on the shelf.",
      buttonLabel: "Shop new releases",
      buttonHref: "#",
      backgroundClass:
        "bg-linear-to-br from-[#131B2E] via-[#1e2a45] to-[#2a3a5c]",
      textClass: "text-white",
      accentClass: "text-(--highlight-color)",
    },
  ], []);

  const { recommendedBooks, newBooks, bestsellerBooks } = useMemo(() => {
    const recommended = getBooksByIds(badgedBooks, [
      "book-midnight-library",
      "book-thursday-murder-club",
      "book-project-hail-mary",
      "book-braiding-sweetgrass",
      "book-little-life"
    ]).map(book => ({ ...book, badge: book.badge || "featured" }));

    const newBks = getBooksByIds(badgedBooks, [
      "book-tomorrow-tomorrow",
      "book-guest-list",
      "book-wild-robot",
      "book-atomic-habits",
      "book-sun-and-her-flowers"
    ]);

    const bestsellers = getBooksByIds(badgedBooks, [
      "book-dune",
      "book-silent-patient",
      "book-sapiens",
      "book-normal-people",
      "book-matilda",
    ]);

    return {
      recommendedBooks: recommended,
      newBooks: newBks,
      bestsellerBooks: bestsellers,
    };
  }, [badgedBooks]);

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