# Page & Co. — Online Bookstore

## 🚀 Live Demo

**https://bookstore-ar.vercel.app/**

---

## 📖 Project Overview

**Page & Co.** is a responsive online bookstore built with **React + Vite**, designed to provide a smooth and modern browsing experience across devices.

The application includes essential e-commerce features such as product discovery, filtering, search, cart management, and responsive navigation.

### Key Highlights

* 🔍 Search books by title or author
* 📚 Browse and filter books by genre
* 🛒 Manage shopping cart interactions
* 🎬 Interactive recommendation & hero sliders
* 📱 Fully responsive design (mobile → desktop)
* 🔐 Authentication modals (Login / Register)
* 📄 Pagination for large collections
* 📖 Dedicated book detail pages

---

## 📁 Project Structure

```plaintext
assignmentRound/
├── public/                     # Static assets
├── src/
│   ├── assets/                # Images, icons
│   ├── components/            # Reusable UI components
│   │   ├── Banner/            # Hero & recommendation sliders
│   │   ├── Card/              # Book, Genre, Bag cards
│   │   ├── Filter/            # Filtering components
│   │   ├── Input/             # SearchBar
│   │   ├── Layouts/           # Header, Footer, MobileMenu
│   │   ├── Modal/             # Login / Register modals
│   │   └── Pagination/        # Pagination controls
│
│   ├── config/                # Router configuration
│
│   ├── data/                  # Static mock data
│
│   ├── hooks/                 # Custom hooks
│   │   ├── useAllGenres.js
│   │   ├── useBag.js
│   │   ├── useBooks.js
│   │   ├── useFilteredBooks.js
│   │   ├── useHeroSlider.js
│   │   ├── useHomeData.js
│   │   ├── useHomeGenres.js
│   │   ├── useModal.js
│   │   ├── useNavigation.js
│   │   ├── useRecommendSlider.js
│   │   └── useSearch.js
│
│   ├── layouts/               # Layout wrappers
│
│   ├── pages/
│   │   ├── Checkout/
│   │   ├── Detail/
│   │   ├── Home/
│   │   └── List/
│
│   ├── services/              # Future API integration
│
│   ├── utils/
│   │   ├── bookUtils.js
│   │   ├── filterUtils.js
│   │   ├── heroSliderUtils.js
│   │   ├── navConstants.js
│   │   └── recommendSliderUtils.js
│
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

* **React 18+**
* **React Router**
* **Vite**

### Styling

* **Tailwind CSS**
* Custom global styling

### Development

* **ESLint**
* **npm**

### Browser APIs

* **localStorage**
* **React Hooks**

---

## 📦 Installation & Setup

### Requirements

* Node.js 14+
* npm or yarn

### Run Locally

```bash
# Clone repository
git clone <repository-url>

# Enter project
cd assignmentRound

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 🎯 Features

| Feature              | Description                  |
| -------------------- | ---------------------------- |
| Hero Slider          | Featured books showcase      |
| Search               | Search by title or author    |
| Genre Filter         | Browse books by category     |
| Shopping Cart        | Add/remove books             |
| Authentication Modal | Login & Register interaction |
| Pagination           | Navigate large collections   |
| Responsive UI        | Mobile-first experience      |
| Book Details         | Dedicated product pages      |

---

## 📝 Technical Notes

* Currently powered by **static mock data (`BookData.js`)**
* Modal state handled using **custom hooks**
* Cart state managed with **`useBag()`**
* Responsive layout built using **Tailwind CSS**
* Service layer prepared for future API integration

---

## 🌐 Deployment

Hosted on **Vercel**

Live Demo:
https://bookstore-ar.vercel.app/

---

Built with ❤️ using React + Vite
