import { Inter } from "next/font/google";
import "./globals.css";
import MenuTop from "@/components/MenuTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <MenuTop/>
        <main className={`${inter.className} relative pt-36 container-xl`}>
          {children}
        </main>
      </body>
    </html>
  );
}
