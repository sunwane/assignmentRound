import { books } from "./BookData";
import { enrichGenresWithBookCounts, getBooksByIds } from "../utils/bookUtils";

export const heroSliderSlides = [
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
];

const genreDefinitions = [
  {
    id: "fiction",
    name: "Fiction",
    backgroundClass: "bg-gradient-to-br from-red-900 to-yellow-500",
    textClass: "text-white",
  },
  {
    id: "mystery",
    name: "Mystery",
    backgroundClass: "bg-gradient-to-br from-indigo-900 to-indigo-500",
    textClass: "text-white",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    backgroundClass: "bg-gradient-to-br from-lime-950 to-lime-500",
    textClass: "text-white",
  },
  {
    id: "poetry",
    name: "Poetry",
    backgroundClass: "bg-gradient-to-br from-pink-900 to-pink-500",
    textClass: "text-white",
  },
  {
    id: "children",
    name: "Children",
    backgroundClass: "bg-gradient-to-br from-yellow-900 to-yellow-500",
    textClass: "text-white",
  },
  {
    id: "non-fiction",
    name: "Non-Fiction",
    backgroundClass: "bg-gradient-to-br from-purple-950 to-purple-500",
    textClass: "text-white",
  },
];

export const genres = enrichGenresWithBookCounts(genreDefinitions, books);
