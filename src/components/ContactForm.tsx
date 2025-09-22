'use client';

import React, { useState, useEffect } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  // Prefill subject from URL in browser only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prefill = params.get("subject");
      if (prefill === "project" || prefill === "consult") {
        setSubject(prefill);
      }
    }
  }, []);

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
    } catch {
      setStatus("⚠️ Something went wrong. Please try later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...your existing input fields... */}
    </form>
  );
}
