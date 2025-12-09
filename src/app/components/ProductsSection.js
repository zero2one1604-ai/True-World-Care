'use client';

import { useState } from 'react';

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "True Vita Capsules",
      tagline: "Energize & Detoxify Naturally",
      description: "True Vita has been designed with the powerful ayurvedic blend which energizes the body, enhances metabolism, and strengthens immunity – which overall helps to detox your body from within.",
      benefits: [
        { icon: "✅", text: "Increases Energy" },
        { icon: "🔥", text: "Enhances Metabolism" },
        { icon: "🛡️", text: "Boosts Immune System" },
        { icon: "🌱", text: "Removes Toxins" }
      ],
      details: "60 capsules per box",
      dosage: "As directed by physician",
      caution: "Not recommended during pregnancy",
      image: "/image/products/true.webp",
      accent: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      name: "SHAPELLA Capsule",
      tagline: "Your Fitness Commitment",
      description: "Shapella is not just a weight loss capsule - it is a commitment towards your fitness goals. Formulated to manage cravings, boost metabolism and elevate energy levels naturally.",
      benefits: [
        { icon: "🌿", text: "Detoxifies Body" },
        { icon: "🛡️", text: "Strengthens Immunity" },
        { icon: "🔥", text: "Accelerates Metabolism" },
        { icon: "⚡", text: "Elevates Energy" }
      ],
      details: "60 capsules per box",
      dosage: "As directed by physician",
      caution: "Not recommended during pregnancy",
      image: "/image/products/shapela.webp",
      accent: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      name: "EASY FRESH Herbal Powder",
      tagline: "Cleanse & Restore Balance",
      description: "Easy Fresh has been designed specifically to cleanse your system and restore balance as it is a 100% natural herbal powder. Supports digestion, reduces bloating and helps flush out toxins.",
      benefits: [
        { icon: "🌱", text: "Removes Toxins" },
        { icon: "✅", text: "Pure & Natural" },
        { icon: "🚫", text: "No Side Effects" }
      ],
      details: "Net Weight: 100g",
      dosage: "As directed by physician",
      caution: "Not recommended during pregnancy",
      image: "/image/products/easy.webp",
      accent: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        <div className="text-center md:mb-20 mt-10 md:mt-16">
          <div className="inline-block md:mb-4">
            <span className="text-xs md:text-sm font-semibold text-emerald-600 tracking-wider uppercase">Premium Ayurvedic Collection</span>
          </div>
          <h2 className="text-2xl md:text-6xl font-bold text-gray-900 md:mb-6 tracking-tight">
            Discover Natural Wellness
          </h2>
          <p className="md:mt-4 text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-6 leading-relaxed mb-5">
            Handcrafted formulations that blend ancient wisdom with modern science
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
                hoveredProduct === product.id ? 'shadow-2xl scale-[1.02]' : ''
              }`}>
                
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.accent}`}></div>
                
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  
                  <div className={`relative bg-gradient-to-br ${product.accent} p-12 md:p-16 flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10 w-full max-w-md">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
                        <img 
                          src={product.image}
                          alt={product.name}
                          className={`relative w-full h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-500 ${
                            hoveredProduct === product.id ? 'scale-105 rotate-2' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`p-10 text-center md:text-left md:p-16 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    
                    <div className="mb-4 md:mb-8">
                      <div className={`inline-block px-2 md:px-4 py-1 bg-gradient-to-r ${product.accent} text-white text-[9px] md:text-xs font-semibold rounded-full md:mb-4 mb-2`}>
                        Premium Quality
                      </div>
                      <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-1 md:mb-3 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-2xl text-gray-500 font-light italic">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-lg">
                      {product.description}
                    </p>

                    <div className="mb-10">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className={`w-8 h-0.5 bg-gradient-to-r ${product.accent}`}></span>
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <span className="text-sm md:text-3xl transform transition-transform group-hover/item:scale-110">{benefit.icon}</span>
                            <span className="text-gray-700 text-xs md:text-sm font-medium leading-tight pt-1">{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br text-left from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 border border-gray-200">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <span className="text-gray-400 mt-0.5">—</span>
                          <span className="text-gray-700 font-medium">{product.details}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-gray-400 mt-0.5">—</span>
                          <span className="text-gray-700"><span className="font-semibold">Dosage:</span> {product.dosage}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-gray-400 mt-0.5">—</span>
                          <span className="text-gray-700"><span className="font-semibold">Caution:</span> {product.caution}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <button className={`group/btn relative flex-1 bg-gradient-to-r ${product.accent} text-white px-3 py-1 md:px-8 md:py-4 rounded-full md:font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl`}>
                        <span className="relative z-10">Add to Cart</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                      </button>
                      <button className="flex-1 border-2 border-gray-900 text-gray-900 px-3 py-1 md:px-8 md:py-4 rounded-full md:font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-3xl opacity-5"></div>
          <div className="relative grid grid-cols-4 md:grid-cols-4 gap-8 p-8">
            {[
              { icon: "✓", label: "GMP Certified" },
              { icon: "🌿", label: "100% Natural" },
              { icon: "🔬", label: "ISO Certified" },
              { icon: "🚫", label: "No Chemicals" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm md:text-3xl">{item.icon}</span>
                </div>
                <p className="text-xs md:text-sm md:font-semibold text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}