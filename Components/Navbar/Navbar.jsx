"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Volume2 } from "lucide-react";
import About from "../About/About"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Volume2 className="w-7 h-7 text-yellow-400 animate-pulse" />
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition-colors duration-300"
          >
            dj<span className="text-yellow-400">Sound</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-lg font-medium">
          <li>
            <Link
              href="../Home/Home.jsx"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
            Home
            </Link>
          </li>
          <li>
          </li>
          <li>
            <Link
              href="../About/About.jsx"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
            About
            </Link>
          </li>
             <Link
              href="/bookings"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
            Bookings
            </Link>
          <li>
            <Link
              href="/Contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 hover:scale-110 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`md:hidden bg-indigo-900 border-t border-indigo-700 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/bookings"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link
              href="../About/About.jsx"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
