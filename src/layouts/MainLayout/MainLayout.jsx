import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;