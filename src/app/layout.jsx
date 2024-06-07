import { Inter } from "next/font/google";
import "./globals.css";
import MenuTop from "@/components/MenuTop";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan Barbosa Silva",
  description: "Desenvolvedor de software, especialista em implementar soluções robustas com as tecnologias mais modernas.",
  keywords: "Ryan, Ryan Barbosa, desenvolvedor, programador, web, python, Full Stack, software, tecnologia",
  author: "Ryan Barbosa",
  openGraph: {
    title: "Ryan Barbosa",
    locale: 'pt_BR',
    site_name: 'Ryan Barbosa',
    description: "Desenvolvedor de software, especialista em implementar soluções robustas com as tecnologias mais modernas.",
    url: "https://www.ryanbarbosa.dev/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R95WTC9S7E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-R95WTC9S7E');
              `,
          }}
        />
      </head>
      <body>
        <header>
          <MenuTop />
        </header>
        <main className={`relative pt-36 max-sm:pt-20 container-xl`} role="main">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
