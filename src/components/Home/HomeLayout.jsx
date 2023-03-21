import Footer from "./Footer";
import Header from "./Header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
