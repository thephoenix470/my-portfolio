"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const prefill = searchParams.get("subject");
    if (prefill) setSubject(prefill);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("⚠️ Spam detected. Message not sent.");
      return;
    }
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honeypot }),
      });

      if (res.ok) {
        setStatus("✅ Your message has been sent!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong. Please try later.");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 dark:text-white mb-6">
          Get in Touch
        </h2>

        <form
          className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Honeypot Field (Hidden) */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-900 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-900 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-blue-900 dark:text-gray-300 mb-1"
            >
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:outline-none"
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="project">Project</option>
              <option value="consult">Consult</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-blue-900 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-36 bg-blue-900 dark:bg-white hover:bg-gray-100 text-white dark:text-blue-900 font-medium text-sm py-2.5 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
              Send Request
            </button>
          </div>

          {status && (
            <p className="text-center text-xs text-gray-600 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
