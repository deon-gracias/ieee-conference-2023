import Footer from "./Footer";
import Header from "./Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />

      <main className="w-screen">{children}</main>

      <Footer />
    </>
  );
}
