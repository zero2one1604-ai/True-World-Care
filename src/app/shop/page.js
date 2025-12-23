import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/products';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Shop Premium Wellness | The True World Care',
  description: 'Explore our curated collection of Ayurvedic wellness products, including True Vita, Shapella, and Easy Fresh.',
};

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6 text-emerald-600">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Our Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight mb-6">
            Rituals for a <span className="italic font-serif">Better You.</span>
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Thoughtfully formulated supplements designed to align with your body's natural rhythm. 
            No shortcuts, just real progress.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {products.map((product) => (
            <Link 
              href={`/shop/${product.slug}`} 
              key={product.id} 
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] mb-8 bg-[#F9F9F9] rounded-[2.5rem] overflow-hidden flex items-center justify-center p-12 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Quick View Tag */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm text-slate-900 border border-slate-100">
                    View Details
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-light text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm text-slate-400 font-light italic mt-1">{product.tagline}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-medium text-slate-900">₹{product.salePrice}</span>
                    <span className="text-xs text-slate-300 line-through">₹{product.mrp}</span>
                  </div>
                </div>

                {/* Benefits Teaser */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-100 px-3 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 group-hover:gap-4 transition-all">
                  Shop Ritual <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quality Guarantee Section */}
        <section className="mt-32 pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Pure Sourcing</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                We use only high-grade Ayurvedic herbs tested for potency and purity in every batch.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Zero Additives</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                No harsh chemicals, quick-fixes, or empty promises. Just natural, steady progress.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Ethical Care</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Transparent labeling and direct expert support through our wellness consultation.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}