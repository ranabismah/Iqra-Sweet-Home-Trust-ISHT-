"use client";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold">
          <Link href="/" className="text-white hover:text-blue-500">
            Iqra Sweet Home Trust (ISHT)
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className="text-lg hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-lg hover:text-blue-500">About</Link>
          <Link href="/services" className="text-lg hover:text-blue-500">Services</Link>
          <Link href="/contact" className="text-lg hover:text-blue-500">Contact</Link>
          <Link href="/donate" className="text-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Donate
          </Link>
        </nav>

        {/* Desktop Social Media Icons */}
        <div className="hidden lg:flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-xl hover:text-blue-500 transition duration-300">
            <FaFacebook />
          </a>
          
          <a href="https://instagram.com" aria-label="Instagram" className="text-xl hover:text-blue-500 transition duration-300">
            <FaInstagram />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <nav className="space-y-4">
          <Link href="/" className="text-lg hover:text-blue-500 block">Home</Link>
          <Link href="/about" className="text-lg hover:text-blue-500 block">About</Link>
          <Link href="/services" className="text-lg hover:text-blue-500 block">Services</Link>
          <Link href="/contact" className="text-lg hover:text-blue-500 block">Contact</Link>
          <Link href="/donate" className="text-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

