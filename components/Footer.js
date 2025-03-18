'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faInstagram, 
  faTwitter, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="temp-serif-font text-2xl font-bold text-yellow-500 block mb-4">
              Sarvesh Mishra
            </Link>
            <p className="temp-sans-font text-gray-400 text-sm mb-6">
              Empowering individuals and businesses through strategic communication and authentic storytelling.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sarveshmishrashow/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                href="https://twitter.com/sarvesh03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/digitalsarveshmishra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a 
                href="https://www.youtube.com/@sarveshmishrashow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="temp-serif-font text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="temp-sans-font space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="md:col-span-1">
            <h3 className="temp-serif-font text-lg font-semibold text-white mb-4">YouTube Channels</h3>
            <ul className="temp-sans-font space-y-2">
              <li>
                <a 
                  href="https://youtube.com/@sarveshmishrashow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  The Sarvesh Mishra Show
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/channel2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Sarva Sanatan
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@sarveshmishrauncut" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Sarvesh Mishra UNCUT
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="temp-serif-font text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="temp-sans-font not-italic">
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Email:</span>{' '}
                <a 
                  href="mailto:sarveshshow@gmail.com" 
                  className="hover:text-yellow-500 transition-colors"
                >
                  sarveshshow@gmail.com
                </a>
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold">Phone:</span>{' '}
                <a 
                  href="tel:+919582732323" 
                  className="hover:text-yellow-500 transition-colors"
                >
                  +91 9582732323
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Address:</span><br />
                Office no. 3, G69, G Block, Sector 63,<br />
                Chotpur, Noida, Uttar Pradesh 201301
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center temp-sans-font">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sarvesh Mishra. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer