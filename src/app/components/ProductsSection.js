'use client';

import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "True Vita Capsules",
    tagline: "Energize & Detoxify Naturally",
    description: "A powerful ayurvedic blend designed to energize the body, enhance metabolism, and strengthen immunity from within.",
    benefits: [
      { icon: "⚡", text: "Increases Energy" },
      { icon: "🔥", text: "Metabolism Boost" },
      { icon: "🛡️", text: "Immune Support" },
      { icon: "🌱", text: "Toxin Removal" }
    ],
    details: "60 capsules per box",
    dosage: "As directed by physician",
    caution: "Not for pregnant women",
    image: "/image/products/true.webp",
    accent: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-100",
    mrp: 4190,
    salePrice: 2095
  },
  {
    id: 2,
    name: "SHAPELLA Capsule",
    tagline: "Your Fitness Commitment",
    description: "More than just weight loss—it's a commitment to your fitness goals. Formulated to manage cravings and elevate energy levels.",
    benefits: [
      { icon: "🌿", text: "Body Detox" },
      { icon: "🛡️", text: "Immunity" },
      { icon: "🔥", text: "Metabolism" },
      { icon: "⚡", text: "Energy" }
    ],
    details: "60 capsules per box",
    dosage: "As directed by physician",
    caution: "Not for pregnant women",
    image: "/image/products/shapela.webp",
    accent: "from-amber-500 to-orange-600",
    shadow: "shadow-orange-100",
    mrp: 4190,
    salePrice: 2095
  },
  {
    id: 3,
    name: "EASY FRESH Powder",
    tagline: "Cleanse & Restore Balance",
    description: "A 100% natural herbal powder specifically designed to cleanse your system, reduce bloating, and support digestion.",
    benefits: [
      { icon: "🌱", text: "Removes Toxins" },
      { icon: "✅", text: "100% Natural" },
      { icon: "🚫", text: "No Side Effects" }
    ],
    details: "Net Weight: 100g",
    dosage: "As directed by physician",
    caution: "Not for pregnant women",
    image: "/image/products/easy.webp",
    accent: "from-green-500 to-emerald-600",
    shadow: "shadow-green-100",
    mrp: 2500,
    salePrice: 1250
  }
];

    const phoneNumber = "919211231761";

const handleWhatsAppBuy = (product) => {
  const message = `
Hello, I am interested in buying the following product:

🛍️ *${product.name}*
✨ ${product.tagline}

💰 Price: ₹${product.salePrice}
📦 Details: ${product.details}

Please share ordering details.
  `.trim()

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, '_blank')
}

export default function ProductsSection() {
  return (
    <section className="bg-slate-50/50 py-8 md:py-12 px-4 overflow-hidden" id='products'>
      <div className="max-w-7xl mx-auto">
        
       <div className="max-w-4xl mx-auto px-4 py-8 md:py-20 text-center">
  <div className="flex justify-center mb-4">
    <span className="inline-block text-emerald-600 font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs bg-emerald-50 px-4 py-1.5 rounded-full">
      Premium Ayurvedic Collection
    </span>
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-4 md:mb-8">
    Discover Natural <br className="hidden sm:block" />
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700">
      Wellness Redefined
    </span>
  </h2>

  <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-500 leading-relaxed font-medium">
    Experience the harmony of ancient herbal wisdom and modern purity. 
    Crafted for those who refuse to compromise on their health.
  </p>

  <div className="mt-12 flex justify-center gap-1.5">
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
    <div className="w-8 h-1 rounded-full bg-emerald-500"></div>
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
  </div>
</div>

       <div className="space-y-16 md:space-y-32">
  {products.map((product, index) => (
    <div 
      key={product.id} 
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-20`}
    >
      
      <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
        <div className={`absolute -inset-2 bg-gradient-to-tr ${product.accent} opacity-5 blur-2xl rounded-full`}></div>
        <div className={`relative bg-white p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-50 shadow-sm transition-all duration-500 group-hover:shadow-md`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto max-h-[250px] md:max-h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-100 shadow-sm">
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">Pure Organic</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 px-4 md:px-0">
        <div className={`inline-block px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-black uppercase tracking-[0.15em] text-emerald-600 mb-4`}>
          Quality Assured
        </div>
        
        <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-1 leading-tight">
          {product.name}
        </h3>
        <p className={`text-base md:text-2xl font-semibold bg-gradient-to-r ${product.accent} bg-clip-text text-transparent italic mb-4 md:mb-6`}>
          {product.tagline}
        </p>
        
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-8">
          {product.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 p-2 md:p-3 rounded-xl bg-slate-50/50 border border-transparent hover:border-slate-100 transition-colors">
              <span className="text-lg md:text-2xl">{benefit.icon}</span>
              <span className="text-[11px] md:text-sm font-bold text-slate-700">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 py-4 border-y border-slate-50">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Volume</span>
            <span className="text-xs font-bold text-slate-700">{product.details}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Usage</span>
            <span className="text-xs font-bold text-slate-700">{product.dosage}</span>
          </div>
        </div>

        {/* Action Bar - Mobile Optimized */}
        <div className="flex items-center justify-between md:justify-start md:gap-10">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl md:text-4xl font-black text-slate-900">₹{product.salePrice}</span>
              <span className="text-sm md:text-lg text-slate-300 line-through">₹{product.mrp}</span>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase">Save {Math.round(((product.mrp - product.salePrice) / product.mrp) * 100)}% Today</p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => handleWhatsAppBuy(product)}
            className="bg-slate-900 text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-widest hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </div>
  ))}
</div>

{/* Trust Badges - Smaller and cleaner on mobile */}
<div className="mt-20 pt-10 border-t border-slate-50">
  <div className="grid grid-cols-4 gap-4">
    {[
      { label: "GMP", icon: "💎" },
      { label: "Natural", icon: "🌿" },
      { label: "Tested", icon: "🔬" },
      { label: "Vegan", icon: "🐰" }
    ].map((badge, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-50 rounded-full flex items-center justify-center mb-2 text-lg md:text-2xl">
          {badge.icon}
        </div>
        <span className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">{badge.label}</span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}