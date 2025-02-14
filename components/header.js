"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white fixed w-full z-10 border-b border-solid border-white/80">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center relative z-[1]">
            <Image src="/logo.png" alt="Motion Digital Room" width={400} height={400} className="h-32 w-auto" loading="eager" />
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden relative z-[1]">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center h-10 w-10 relative"
              aria-label="Toggle menu"
            >
              <div
                className={`absolute h-0.5 w-8 bg-white transition-transform transform ${
                  menuOpen ? 'rotate-45 bg-secondary' : 'translate-y-[-8px]'
                }`}
              />
              <div
                className={`absolute h-0.5 w-8 bg-white transition-opacity ${
                  menuOpen ? 'opacity-0' : 'translate-y-0'
                }`}
              />
              <div
                className={`absolute h-0.5 w-8 bg-white transition-transform transform ${
                  menuOpen ? '-rotate-45 bg-secondary' : 'translate-y-[8px]'
                }`}
              />
            </button>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="h5 !font-normal hover:text-primary">
              Home
            </Link>
            <Link href="/blog" className="h5 !font-normal hover:text-primary">
              Blogs
            </Link>
            <Link href="/about" className="h5 !font-normal hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black transform transition-transform duration-500 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Links */}
          <div className="flex flex-col items-center space-y-8 mt-24">
            <Link href="/" className="h5" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/blog" className="h5" onClick={closeMenu}>
              Blogs
            </Link>
            <Link href="/about" className="h5" onClick={closeMenu}>
              About
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-black h-24"></div>
    </>
  );
};

export default Header;