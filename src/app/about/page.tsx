"use client";

import React from "react";
import Image from "next/image";
import { FounderParagraph, MissionParagraph, StoryParagraph } from "@/components/Paragraphs";

export default function AboutPage() {
  return (
    <div>
      {/* About Us */}
      {/* <section className="relative bg-gray-100 dark:bg-gray-800 text-blue-900 dark:text-white py-12 sm:py-16 md:py-20 bg-cover bg-center backdrop-blur">
        <div className="absolute inset-0 bg-opacity-10 backdrop-blur-xs"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {AboutParagraph.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            {AboutParagraph.paragraph}          
          </p>
        </div>
      </section> */}
      {/* Our Mission */}
      <section id="mission" className="py-16 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[250px] md:h-[350px]">
              <Image src='/images/hotel-webpage.jpg' alt="hotel webpage" fill className="object-cover rounded-2xl shadow-md" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white">
                {MissionParagraph.title}
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-white">
                {MissionParagraph.paragraph}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      {/* <section id="story" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white">
                {StoryParagraph.title}
              </h2>
              <div className="mt-4 space-y-4 text-lg text-gray-700 dark:text-white">
                <p>
                  {StoryParagraph.paragraph.at(0)}
                </p>
                <p>
                  {StoryParagraph.paragraph.at(1)}
                </p>
                <p>
                  {StoryParagraph.paragraph.at(2)}
                </p>
              </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] order-1 md:order-2">
              <Image src='/images/founder.jpg' alt="founder" fill className="object-contain rounded-2xl shadow-md" sizes="(max-width: 768px) 100vw, 50vw"/>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Founder */}
      <section id="founder" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white">
                {FounderParagraph.title}
              </h2>
              <div className="mt-4 space-y-4 text-lg text-gray-700 dark:text-white">
                <p>
                  {FounderParagraph.paragraph.at(0)}
                  {FounderParagraph.paragraph.at(1)}
                </p>
                <p>
                  {FounderParagraph.paragraph.at(2)}
                </p>
              </div>
            </div>
            <div className="relative w-full h-[250px] md:h-[350px] order-1 md:order-2">
              <Image src='/images/founder.png' alt="founder" fill className="object-content rounded-2xl shadow-md" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
