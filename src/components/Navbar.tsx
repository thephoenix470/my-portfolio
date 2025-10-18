"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // ✅ ref instead of state
  const [pathname, setPathname] = useState<string | null>(null);

  const nextPathname = usePathname();
  useEffect(() => {
    setPathname(nextPathname);
  }, [nextPathname]);

  // ✅ Combined effect: scroll handling + body lock
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false); // hide navbar
      } else {
        setShowNavbar(true); // show navbar
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // lock/unlock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // cleanup
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 dark:text-gray-200"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Logo */}
        <Link href="/" className="mx-auto md:mx-0">
          <span className="text-blue-900 dark:text-gray-200 font-bold text-xl md:text-2xl transition-colors">
            TrevaCore
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-x-8 items-center">
          {navLinks.map((link) => {
            const isActive =
              pathname &&
              pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "");

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center"
              >
                {/* Left line */}
                <span
                  className={`inline-block h-5 w-0.5 mr-3 rounded transition-transform duration-300 origin-top
                    ${isActive
                      ? "scale-y-100 bg-red-600 dark:bg-red-400"
                      : "scale-y-100 bg-blue-900/20 dark:bg-gray-100/20"
                    }
                  `}
                ></span>

                {/* Hover Left Line Animation */}
                <span className="absolute left-0 h-5 w-0.5 rounded bg-red-600 dark:bg-red-400 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-10" />

                {/* Label */}
                <span
                  className={`text-blue-900 dark:text-gray-200 transition-colors duration-300 ${isActive
                      ? "text-blue-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400"
                      : "group-hover:text-red-600 dark:group-hover:text-red-400"
                    }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen w-screen bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-blue-900 dark:text-gray-200 font-bold text-lg">
            TrevaCore
          </span>
          <button
            className="text-blue-900 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-y-6 p-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-blue-900 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
