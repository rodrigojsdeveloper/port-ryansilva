import MenuTop from "../MenuTop";
import FooterPrimary from "../FooterPrimary";

export default function RootLayout({ children }) {
  return (
    <>
      <MenuTop />
      <section className="px-10">
        {children}
      </section>
      <FooterPrimary />
    </>
  );
}
