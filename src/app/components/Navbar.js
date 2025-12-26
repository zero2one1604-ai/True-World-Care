'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const handleShopNowClick = (e) => {
    e.preventDefault();
    const phoneNumber = "919211231761";
    const message = "Hello! I would like to buy this product.";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/image/logo.png" alt="TrueWorld Logo" className="h-10 md:h-14 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              Home
            </a>
            
            <div className="relative">
              <Link href="/shop">
              <button
                className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 flex items-center"
              >
                Products
                             </button>
              </Link>
              
            </div>


            <a href="/blog" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              Blog
            </a>
              <a href="/testimonials" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              Testimonials
            </a>
            <a href="/about_us" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              About Us
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
          
            <a href="/shop" onClick={handleShopNowClick} className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg">
              Shop Now
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              Home
            </a>
            
            <div>
              <Link href="/shop">
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors flex justify-between items-center"
              >
                Products
               
              </button>
              </Link>
          
            </div>

        
            <a href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              Blog
            </a>
            <a href="/testimonials" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              Testimonials
            </a>
            <a href="/about_us" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              About Us
            </a>
            
            <div className="pt-4 space-y-3">
              <a onClick={handleShopNowClick} className="block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}