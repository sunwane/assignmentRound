import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import ScrollToTop from "../../components/ScrollToTop";

function MainLayout({ children }) {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="max-w-400 mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;