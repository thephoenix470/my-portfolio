"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-18 right-8 bg-blue-900 dark:bg-white hover:bg-blue-700 hover:dark:bg-gray-300 text-white dark:text-blue-900 p-3 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
}
