'use client';

import { useState } from 'react';

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 1,
      name: "True Vita Capsules",
      tagline: "Energize & Detoxify Naturally",
      description: "True Vita has been designed with the powerful ayurvedic blend which energizes the body, enhances metabolism, and strengthens immunity – which overall helps to detox your body from within. The ingredients like aloe vera, amla, jamun and draksha each of our capsules give support to your wellness journey with nature's finest ingredients.",
      benefits: [
        { icon: "✅", text: "Increases Energy" },
        { icon: "🔥", text: "Enhances Metabolism" },
        { icon: "🛡️", text: "Boosts Immune System" },
        { icon: "🌱", text: "Removes Toxins from the Body" }
      ],
      details: "60 capsules per box | Ayurvedic Proprietary Medicine",
      dosage: "As directed by the physician",
      caution: "Not recommended during pregnancy",
      certification: "GMP & ISO Certified | Chemical-Free",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 2,
      name: "SHAPELLA Capsule",
      tagline: "Your Fitness Commitment",
      description: "Shapella is not just a weight loss capsule - it is a commitment towards your fitness goals. Formulated with ingredients Garcinia Indica, Coffee Bean Extract, Coleus Forskohlii, and Trikatu, the mixture of all these ingredients works as a powerhouse to manage cravings, boost metabolism and elevate energy levels naturally.",
      benefits: [
        { icon: "🌿", text: "Detoxifies the Body" },
        { icon: "🛡️", text: "Strengthens Immunity" },
        { icon: "🔥", text: "Accelerates Metabolism" },
        { icon: "⚡", text: "Elevates Energy" }
      ],
      details: "60 capsules per box | Ayurvedic Herbal Formula",
      dosage: "As directed by the physician",
      caution: "Not recommended during pregnancy",
      certification: "Supports steady, sustainable progress",
      gradient: "from-amber-600 to-amber-700"
    },
    {
      id: 3,
      name: "EASY FRESH Herbal Powder",
      tagline: "Cleanse & Restore Balance",
      description: "Easy Fresh has been designed specifically to cleanse your system and restore balance as it is a 100% natural herbal powder. Ingredients include Zeera, Saunf, Anardana, Mulethi and Gulab Phool, the blend of these ingredients supports your body to improve digestion, reduces bloating and helps to flush out the toxins without any side effects.",
      benefits: [
        { icon: "🌱", text: "Removes Toxins from the Body" },
        { icon: "✅", text: "Pure & Natural" },
        { icon: "🚫", text: "No Side Effects" }
      ],
      details: "Net Weight: 100g | Herbal Detox Formula",
      dosage: "As directed by the physician",
      caution: "Not recommended during pregnancy",
      certification: "Perfect for seasonal reset or daily use",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Health & Wellness
            <span className="block text-green-700 mt-2">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of Ayurveda with our carefully crafted formulations designed for your holistic wellness
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeProduct === index
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active Product Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left Side - Product Image/Visual */}
            <div className={`bg-gradient-to-br ${products[activeProduct].gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-6xl md:text-7xl">
                    {activeProduct === 0 ? '💊' : activeProduct === 1 ? '🏃' : '🌿'}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {products[activeProduct].name}
                </h3>
                <p className="text-xl text-white/90 font-medium">
                  {products[activeProduct].tagline}
                </p>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="p-8 md:p-12">
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {products[activeProduct].description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-green-600 mr-3 rounded"></span>
                  Key Benefits
                </h4>
                <div className="space-y-3">
                  {products[activeProduct].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center bg-green-50 p-3 rounded-lg border border-green-100">
                      <span className="text-2xl mr-3">{benefit.icon}</span>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-amber-700 font-semibold mr-2">📦</span>
                    <span className="text-gray-700">{products[activeProduct].details}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-700 font-semibold mr-2">💊</span>
                    <span className="text-gray-700"><strong>Dosage:</strong> {products[activeProduct].dosage}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-700 font-semibold mr-2">⚠️</span>
                    <span className="text-gray-700"><strong>Caution:</strong> {products[activeProduct].caution}</span>
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg text-center mb-6">
                <p className="font-semibold text-sm">
                  {products[activeProduct].certification}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-bold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border-2 border-green-600 text-green-700 px-6 py-4 rounded-lg font-bold hover:bg-green-50 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-100">
            <div className="text-3xl mb-2">✓</div>
            <p className="text-sm font-semibold text-gray-800">GMP Certified</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-100">
            <div className="text-3xl mb-2">🌿</div>
            <p className="text-sm font-semibold text-gray-800">100% Natural</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-100">
            <div className="text-3xl mb-2">🔬</div>
            <p className="text-sm font-semibold text-gray-800">ISO Certified</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-100">
            <div className="text-3xl mb-2">🚫</div>
            <p className="text-sm font-semibold text-gray-800">No Chemicals</p>
          </div>
        </div>
      </div>
    </section>
  );
}