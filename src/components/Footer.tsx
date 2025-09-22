"use client";

import Link from "next/link";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { ServicesParagraph } from "./Paragraphs";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] sticky">
      <div className="max-w-8xl mx-auto py-6">
        {/* ========================
            FOOTER COLUMNS
        ========================= */}
        <div className="grid grid-cols-1 px-3 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
          {/* Column 1: About Us */}
          <div>
            <h4 className="text-base font-semibold text-blue-900 dark:text-white mb-3">
              About Us
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/about#mission"
                  className="text-black-900 dark:text-white hover:text-blue-900 hover:dark:text-white"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#story"
                  className="text-black-900 dark:text-white hover:text-blue-900 hover:dark:text-white"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-base font-semibold text-blue-900 dark:text-white mb-3">
              Services
            </h4>
            <ul className="space-y-1 text-sm">
              {ServicesParagraph.map((service) => (
                <li key={service.title}>
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-black-900 dark:text-white hover:text-blue-900 hover:dark:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-base font-semibold text-blue-900 dark:text-white mb-3">
              Contact
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/contact?subject=project"
                  className="text-black-900 dark:text-white hover:text-blue-900 hover:dark:text-white"
                >
                  Request a project
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?subject=consult"
                  className="text-black-900 dark:text-white hover:text-blue-900 hover:dark:text-white"
                >
                  Request a consult
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================
            COPYRIGHT + SOCIAL ICONS
        ========================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto p-2 gap-5">
          {/* Copyright */}
          <div className="text-xs dark:text-white">
            © 2025 {" "}
            <Link
              href="/"
              className="font-semibold text-blue-900 dark:text-white"
            >
              LumaCore
            </Link>
            . All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/khalil-azhari-66227945"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </Link>

            {/* Email */}
            <Link
              href="mailto:contact@yourcompany.com"
              className="text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
