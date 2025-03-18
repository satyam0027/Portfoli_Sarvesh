"use client";

import { useState, useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ThemeContext } from './ThemeContext';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="pb-10">
      <header className="bg-white fixed top-0 w-full z-50 text-black p-4 shadow-md">
        <nav className="container mx-auto flex flex-wrap justify-between items-center">
          <Link 
            href="/" 
            className={`${playfair.className} text-2xl font-bold tracking-wide text-gray-800 hover:text-yellow-600 transition-colors duration-300`} 
            onClick={closeMenu}
          >
            Sarvesh Mishra
          </Link>

          <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>

          <ul
            className={`${inter.className} w-full md:w-auto md:flex items-center space-y-2 md:space-y-0 md:space-x-6 ${
              isMenuOpen ? 'block' : 'hidden'
            } mt-4 md:mt-0`}
          >
            <li>
              <Link href="/" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/podcast" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                Podcast
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide"
              >
                Channels
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-md z-10 w-56 border border-gray-100">
                  <li>
                    <a
                      href="https://youtube.com/@sarveshmishrashow?si=QlAvHaI0wfMNhnnt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-300 font-medium"
                    >
                      The Sarvesh Mishra Show
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/channel2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-300 font-medium"
                    >
                      Sarva Sanatan
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@sarveshmishrauncut?si=r0r3xP_SXjfJvVgK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-300 font-medium"
                    >
                      Sarvesh Mishra UNCUT
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/books" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 md:py-0 text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium tracking-wide" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
