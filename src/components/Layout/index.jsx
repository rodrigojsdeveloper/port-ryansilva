import MenuTop from "../MenuTop";
import FooterPrimary from "../FooterPrimary";

export default function RootLayout({ children }) {
  return (
    <>
      <MenuTop />
      <section>
        {children}
      </section>
      <FooterPrimary />
    </>
  );
}
