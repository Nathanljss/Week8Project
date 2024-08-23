import { Orbitron } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Post 'Em",
  description: "My blog project for week 8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
