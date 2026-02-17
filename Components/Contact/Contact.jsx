"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white flex flex-col items-center py-20 px-4">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">
        Contact DJ Zaibii
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Info */}
        <div className="bg-indigo-800/40 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex items-center space-x-3">
            <Mail className="text-yellow-400" />
            <p>info@djkashif.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-yellow-400" />
              <a
    href="tel:+923162244747"
    className="hover:text-yellow-400 transition-colors duration-300"
  >
    +92 3102173208
  </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-yellow-400" />
            <p>Karachi, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-indigo-800/40 backdrop-blur-md shadow-xl p-8 rounded-2xl space-y-5"
        >
          <div>
            <label className="block text-sm mb-2">Full Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-indigo-900 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-2 animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
