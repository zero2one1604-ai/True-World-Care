'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-amber-50 via-green-50 to-white" id='footer'>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8">
          
          <div className="lg:col-span-2">
            <div className="flex mx-auto justify-center md:justify-start items-center mb-4">
              <img src="/image/logo.png" alt="TrueWorld Logo" className="h-16 md:h-14 w-auto" />
            </div>
            
            <p className="text-gray-700 mb-6 md:text-left text-center text-xs md:text-sm leading-relaxed max-w-md">
              Your trusted partner in holistic wellness. We believe in the power of nature and ancient Ayurvedic wisdom to transform lives through authentic, certified health solutions.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 bg-green-100 hover:bg-green-600 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 bg-green-100 hover:bg-green-600 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 bg-green-100 hover:bg-green-600 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 bg-green-100 hover:bg-green-600 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 bg-green-100 hover:bg-green-600 text-green-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-sm md:text-lg mb-4 flex items-center">
              <span className="w-1 h-4 md:h-6 bg-green-600 mr-2 rounded"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-3 md:block text-sm md:text-base">
              <li><a href="/" className="text-gray-700 hover:text-green-600 transition-colors flex items-center group">
                <span className="mr-2 text-green-600 group-hover:translate-x-1 transition-transform">›</span>
                Home
              </a></li>
              <li><a href="/about_us" className="text-gray-700 hidden hover:text-green-600 transition-colors flex items-center group">
                <span className="mr-2 text-green-600 group-hover:translate-x-1 transition-transform">›</span>
                About Us
              </a></li>
              <li><a href="/shop" className="text-gray-700 hover:text-green-600 transition-colors flex items-center group">
                <span className="mr-2 text-green-600 group-hover:translate-x-1 transition-transform">›</span>
                Our Products
              </a></li>
              <li><a href="/blog" className="text-gray-700 hover:text-green-600 transition-colors flex items-center group">
                <span className="mr-2 text-green-600 group-hover:translate-x-1 transition-transform">›</span>
                Blog
              </a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-sm md:text-lg mb-4 flex items-center">
              <span className="w-1 h-4 md:h-6 bg-amber-600 mr-2 rounded"></span>
              Our Products
            </h3>
            <ul className="grid grid-cols-3 md:block text-sm md:text-base">
              <li><a href="/shop/true-vita-capsules" className="text-gray-700 hover:text-amber-700 transition-colors flex items-center group">
                <span className="mr-2 text-amber-600 group-hover:translate-x-1 transition-transform">›</span>
                True Vita Capsules
              </a></li>
              <li><a href="/shop/shapella-capsule" className="text-gray-700 hover:text-amber-700 transition-colors flex items-center group">
                <span className="mr-2 text-amber-600 group-hover:translate-x-1 transition-transform">›</span>
                SHAPELLA Capsule
              </a></li>
              <li><a href="/shop/easy-fresh-powder" className="text-gray-700 hover:text-amber-700 transition-colors flex items-center group">
                <span className="mr-2 text-amber-600 group-hover:translate-x-1 transition-transform">›</span>
                EASY FRESH Powder
              </a></li>
            
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold text-sm md:text-lg mb-4 flex items-center">
              <span className="w-1 h-4 md:h-6 bg-green-600 mr-2 rounded"></span>
              Contact Us
            </h3>
            <ul className="space-y-3">
            
              <li className="flex items-center">
                <svg className="md:w-5 md:h-5 w-3 h-3 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs md:text-sm text-gray-700">+91 92112 31761</span>
              </li>
              <li className="flex items-center">
                <svg className="md:w-5 md:h-5 w-3 h-3 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs md:text-sm text-gray-700">thetrueworldc@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg className="md:w-5 md:h-5 w-3 h-3 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs md:text-sm text-gray-700">Mon - Sat: 9AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-3 md:mb-6 text-xs md:text-sm px-2">Get weekly wellness tips, exclusive offers, and health insights delivered to your inbox</p>
            
           <div className="flex flex-row gap-2 sm:gap-3 max-w-lg mx-auto w-full items-center">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email address"
    className="flex-1 w-full px-4 py-3 text-sm md:text-base rounded-lg bg-white border-2 border-green-200 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500"
  />

  <button
    onClick={handleSubscribe}
    className="sm:hidden bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg flex-shrink-0"
    aria-label="Subscribe"
  >
    <svg 
      className="w-5 h-5 md:w-6 md:h-6 transform rotate-0" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  </button>

  <button
    onClick={handleSubscribe}
    className="hidden sm:block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
  >
    Subscribe Now
  </button>
</div>
          </div>
        </div>
        
      
      </div>
      <div className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-white text-center md:text-left">
              © 2025 Trueworld Care. All rights reserved. | Designed and Curated by Zero2One Marketing
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs md:text-sm">
              <a href="/privacy-policy" className="text-green-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              •
              <a href="/terms-conditions" className="text-green-100 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              •
              <a href="/refund-policy" className="text-green-100 hover:text-white transition-colors">
                Refund Policy
              </a>
              •
              <a href="/shipping-policy" className="text-green-100 hover:text-white transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-green-600 to-green-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-2xl hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}