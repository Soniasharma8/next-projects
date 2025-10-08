"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
          <img src="logo.png" alt="Sonia Sharma" className="w-20 h-10 md:w-40 md:h-12" />
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium text-white">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative group hover:text-green-500 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute inset-0 bg-green-500 opacity-20 blur-lg scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-2 flex flex-col">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative group text-white py-2 hover:text-green-500 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute inset-0 bg-green-500 opacity-20 blur-lg scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
