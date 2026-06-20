import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-400 mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;