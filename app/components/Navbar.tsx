"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import LogoWithName from "./shared/LogoWithName";

interface HeaderItem {
  name: string;
  id: string;
}

const headerList: HeaderItem[] = [
  { name: "Home", id: "/" },
  { name: "Products", id: "/products" },
  // { name: "About", id: "/about" },
  // { name: "Contact", id: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="transition-all duration-300 ease-in-out">
        <nav
          className={`transition-all duration-300 ease-in-out ${
            scrolled
              ? "mx-auto my-2 max-w-[99%] rounded-xl border border-base-300 bg-base-100/80 px-3 py-2 shadow-lg backdrop-blur-md sm:my-4 sm:max-w-screen-xl sm:rounded-full sm:px-6 sm:py-3"
              : "bg-transparent px-3 py-2 sm:px-6 sm:py-5"
          }`}
        >
          <div className="mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <LogoWithName />
              <p className="ml-2 hidden text-xs font-light text-base-content/70 sm:ml-4 sm:text-sm md:block font-body">
                Quality Tech Products
              </p>
            </div>

            <div className="hidden items-center gap-4 sm:gap-6 lg:flex">
              {headerList.map((item) => (
                <Link
                  href={`${item.id}`}
                  key={item.id}
                  className="text-xs font-medium text-base-content transition-colors hover:text-primary sm:text-sm font-body"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/products"
                className={`btn btn-primary btn-sm font-body ${
                  scrolled
                    ? "shadow-md"
                    : "bg-primary/90 backdrop-blur-sm"
                }`}
              >
                Shop Now
              </Link>
              <button className="btn btn-ghost btn-sm">
                <CartIcon />
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button className="btn btn-ghost btn-sm">
                <CartIcon />
              </button>
              <button
                onClick={toggleMenu}
                className="btn btn-ghost btn-sm"
                aria-label="Menu"
              >
                <div className="relative h-4 w-4 sm:h-5 sm:w-5">
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded-full bg-base-content transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-0.5 w-full rounded-full bg-base-content transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-base-content transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-x-0 top-[3.5rem] z-40 px-3 py-2 sm:top-[4rem]">
            <div className="mx-auto max-w-[99%] overflow-hidden sm:max-w-screen-xl">
              <div className="card bg-base-100/95 shadow-xl backdrop-blur-md">
                <div className="card-body p-3">
                  <div className="space-y-1">
                    {headerList.map((item, index) => (
                      <div
                        key={item.id}
                        className="overflow-hidden"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: "slideIn 0.3s ease-out forwards",
                        }}
                      >
                        <Link
                          href={`${item.id}`}
                          onClick={toggleMenu}
                          className="btn btn-ghost btn-block justify-start font-body"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                    <div
                      className="pt-2"
                      style={{
                        animationDelay: `${headerList.length * 100}ms`,
                        animation: "slideIn 0.3s ease-out forwards",
                      }}
                    >
                      <Link
                        href="/products"
                        onClick={toggleMenu}
                        className="btn btn-primary btn-block font-body"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
} 