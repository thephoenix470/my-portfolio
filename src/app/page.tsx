"use client";

import Link from "next/link";
import { HomePageHeroParagraph, AboutSectionParagraph, ServiceSectionParagraph } from "@/components/Paragraphs";
import SEO from "@/components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO title="TrevaCore | " description="TrevaCore - Innovative web solutions, low-code integration, and application care." />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden">

        {/* ===========================
          HERO SECTION
      ============================ */}
        <section className="relative bg-blue-900 dark:bg-blue-950 text-white py-12 sm:py-16 md:py-20 bg-cover bg-center backdrop-blur"
          style={{ backgroundImage: "url('/images/bg-hero-nature.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-10 backdrop-blur-xs"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {HomePageHeroParagraph.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              {HomePageHeroParagraph.paragraph}
            </p>
            <Link
              href="#services"
              className="inline-block bg-white text-blue-900 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition"
            >
              {HomePageHeroParagraph.linkText}
            </Link>
          </div>
        </section>

        {/* ===========================
          ABOUT SECTION
      ============================ */}
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-900 dark:text-white">{AboutSectionParagraph.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
              {AboutSectionParagraph.paragraph}
            </p>
          </div>
        </section>

        {/* ===========================
          SERVICES SECTION
      ============================ */}
        <section id="services" className="py-10 sm:py-12 md:py-16 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-blue-900 dark:text-white">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {ServiceSectionParagraph.map((service, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-700 p-4 sm:p-5 md:p-6 rounded-lg shadow hover:shadow-lg transition break-words">
                  <h3 className="font-semibold text-lg sm:text-lg md:text-xl mb-1">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">{service.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===========================
          TESTIMONIALS
      ============================ */}
        {/* <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-blue-900 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {TestimonialParagraph.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-4 sm:p-5 md:p-6 rounded-lg shadow break-words">
                <p className="italic text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-base">{testimonial.text}</p>
                <p className="font-semibold mt-2 text-xs sm:text-sm md:text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* ===========================
          CALL TO ACTION
      ============================ */}
        <section className="py-10 sm:py-12 md:py-16 text-center dark:text-white px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-blue-900 dark:text-white">Ready to Elevate Your Business?</h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 shadow-md font-semibold py-2 sm:py-3 md:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Chat with us
          </Link>
        </section>

      </main>
    </>
  );
}
