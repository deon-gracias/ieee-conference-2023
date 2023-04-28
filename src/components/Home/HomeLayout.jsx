import Footer from "./Footer";
import Header from "./Header";

export default function HomeLayout({
  headerLinks,
  footerLinks,
  contactLinks,
  children,
}) {
  return (
    <>
      <Header links={headerLinks} />

      <main>{children}</main>

      <Footer links={footerLinks} contacts={contactLinks} />
    </>
  );
}
