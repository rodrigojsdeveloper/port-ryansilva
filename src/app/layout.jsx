import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="relative pt-36 container-xl js-build-in-trigger build-in-animate">
        <main className={inter.className}>
          {children}
        </main>
      </body>
    </html>
  );
}
