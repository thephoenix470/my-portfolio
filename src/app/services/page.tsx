"use client";

import React from "react";
import Image from "next/image";
import { ServicesParagraph } from "@/components/Paragraphs";

export default function ServicesPage() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-12">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {ServicesParagraph.map((service, index) => (
                        <div
                            key={service.title}
                            className={`flex flex-col md:flex-row items-center md:items-start gap-4 p-5 bg-white dark:bg-gray-700 rounded-3xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:scale-105 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            {service.image && (
                                <div className="relative w-full h-50 md:w-1/2 h-32 md:h-44 flex-shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-fill rounded-2xl shadow-md"
                                    />
                                </div>
                            )}

                            {/* Text Content */}
                            <div className="md:w-1/2 text-center md:text-left items-center my-auto">
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-white mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-md md:text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
