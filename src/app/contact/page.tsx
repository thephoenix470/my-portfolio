"use client";

import React, { useState } from "react";
import Link from "next/link";
import { contactOptions, faqs } from "@/components/Paragraphs";
import SEO from "@/components/SEO";

export default function ContactPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <SEO title="Contact Us" description="Get in touch with TrevaCore. Chat, call, or visit our office to discuss your project." />

            <section className="bg-gray-50 dark:bg-gray-800 min-h-screen">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-12">
                        Contact our friendly team
                    </h1>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-16">
                        Let us know how we can help.
                    </p>

                    {/* Contact Cards (mapped) */}
                    <div className="max-w-[720px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {contactOptions.map((option) => (
                            <div
                                key={option.title}
                                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm text-center bg-white dark:bg-gray-700 hover:shadow-md hover:border-red-600 dark:hover:border-red-400 transition"
                            >
                                <p className="font-semibold text-blue-900 dark:text-white mb-2">
                                    {option.title}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
                                {option.href ? (<Link
                                    href={option.href}
                                    className="text-red-600 dark:text-red-400 hover:underline"
                                >
                                    {option.value}
                                </Link>
                                ) : (
                                    <span className="text-gray-400 cursor-not-allowed">{option.value}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section (mapped) */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 dark:text-white mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:border-red-600 dark:hover:border-red-400 hover:shadow-md transition cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <p className="font-medium text-blue-900 dark:text-white">{faq.question}</p>
                                    <span className="text-xl text-red-600 dark:text-red-400">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <p className="text-gray-700 dark:text-gray-300 mt-3">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    {/* <div className="text-center mt-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-white">
                        Ready to level up your business?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Start your 30-day free trial. Cancel anytime.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            href="/demo"
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-blue-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            View demo
                        </Link>
                        <Link
                            href="/get-started"
                            className="px-6 py-3 bg-red-600 dark:bg-red-400 text-white dark:text-gray-900 rounded-full hover:bg-red-700 dark:hover:bg-red-300 transition"
                        >
                            Get started
                        </Link>
                    </div>
                </div> */}
                </div>
            </section>
        </div>
    )
}