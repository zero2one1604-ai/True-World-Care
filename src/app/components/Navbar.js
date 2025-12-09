'use client';

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
              <button
                onClick={toggleProducts}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 flex items-center"
              >
                Products
                <svg className={`ml-1 w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <a href="/products/supplements" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                    Health Supplements
                  </a>
                  <a href="/products/vitamins" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                    Vitamins & Minerals
                  </a>
                  <a href="/products/herbal" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                    Herbal Products
                  </a>
                  <a href="/products/wellness" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                    Wellness Care
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              About Us
            </a>
            <a href="/blog" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-700 hover:text-green-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative text-gray-700 hover:text-green-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
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
              <button
                onClick={toggleProducts}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors flex justify-between items-center"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/products/supplements" className="block px-4 py-2 text-gray-600 hover:text-green-700 transition-colors">
                    Health Supplements
                  </a>
                  <a href="/products/vitamins" className="block px-4 py-2 text-gray-600 hover:text-green-700 transition-colors">
                    Vitamins & Minerals
                  </a>
                  <a href="/products/herbal" className="block px-4 py-2 text-gray-600 hover:text-green-700 transition-colors">
                    Herbal Products
                  </a>
                  <a href="/products/wellness" className="block px-4 py-2 text-gray-600 hover:text-green-700 transition-colors">
                    Wellness Care
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              About Us
            </a>
            <a href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              Blog
            </a>
            <a href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors">
              Contact
            </a>
            
            <div className="pt-4 space-y-3">
              <a href="/shop" onClick={handleShopNowClick} className="block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}