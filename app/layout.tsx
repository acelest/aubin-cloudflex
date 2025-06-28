import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloudflex Store - Frontend Technical Test",
  description: "A product listing interface developed with Next.js, React and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased font-sans">
        <CartProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
