"use client"

import Image from "next/image"
import SimpleCarousel from "@/components/Carousel"
import Link from "next/link"
import { AboutSectionParagraph, ServiceSectionParagraph, TestimonialParagraph } from "@/components/Paragraphs"

export default function Testing() {
    return (
        <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden">
            <section className="mx-auto max-w-5xl aspect-[3/2]">
                <SimpleCarousel autoplay={8000}>
                    <Image src="/images/hotel-webpage.jpg" alt="image1" width={5472} height={3648} className="w-full h-full object-cover rounded-lg" />
                    <Image src="/images/app-maintenance.jpg" alt="image2" width={5472} height={3648} className="w-full h-full object-cover rounded-lg" />
                </SimpleCarousel>
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
            <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
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
            </section>

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
    )
}