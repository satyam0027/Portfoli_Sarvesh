'use client'

import { useState, useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ThemeContext } from './ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-neutral-800 text-white p-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sarvesh Mishra
        </Link>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
            )}
          </svg>
        </button>

        <ul className={`w-full md:w-auto md:flex items-center space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <li><Link href="/" className="block py-2 md:py-0">Home</Link></li>
          <li><Link href="/podcast" className="block py-2 md:py-0">Podcast</Link></li>
          <li><Link href="/about" className="block py-2 md:py-0">About</Link></li>
          
          <li className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none py-2 md:py-0"
            >
              Channels
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-neutral-700 text-white shadow-lg rounded-md z-10 w-48">
                <li>
                  <a href="https://youtube.com/@sarveshmishrashow?si=QlAvHaI0wfMNhnnt" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-neutral-600">
                    The Sarvesh Mishra Show
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/channel2" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-neutral-600">
                    Sarva Sanatan
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@bizstalk?si=P_feukbEogr9d2n9" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-neutral-600">
                    BizsTalk Media
                  </a>
                </li>
              </ul>
            )}
          </li>
          
          <li><Link href="/books" className="block py-2 md:py-0">Books</Link></li>
          <li><Link href="/contact" className="block py-2 md:py-0">Contact</Link></li>
          
          <li>
            <button
              onClick={toggleTheme}
              className="text-white focus:outline-none py-2 md:py-0"
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header