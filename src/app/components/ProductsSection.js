'use client';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

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

 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-emerald-200 transition-all"
            >
              <div className="relative h-56 mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-black text-slate-900 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4 italic">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900">
                  ₹{product.salePrice}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.mrp}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-5 inline-block text-xs font-black uppercase tracking-widest text-emerald-600">
                View Details →
              </div>
            </Link>
          ))}
        </div>
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