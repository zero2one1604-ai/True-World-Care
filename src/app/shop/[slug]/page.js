import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

const phoneNumber = "919211231761";

// This tells Next.js to pre-render these specific paths at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | The True World`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ${product.name}.`
  );

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-emerald-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen bg-[#F9F9F9] lg:sticky lg:top-0">
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-20">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-contain mix-blend-multiply"
                priority
              />
            </div>
            <div className="absolute bottom-8 left-8 hidden lg:block">
              <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 font-medium">
                Pure Ayurvedic Essence
              </p>
            </div>
          </div>

          {/* RIGHT: The Content Scroll */}
          <div className="w-full lg:w-1/2 px-6 py-10 md:px-16 md:py-24 lg:px-24 flex flex-col justify-center">
            
            {/* Header */}
            <header className="mb-10 lg:mb-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-emerald-600">Premium Wellness</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed italic">
                {product.tagline}
              </p>
            </header>

            <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-slate-100">
              <span className="text-3xl font-light text-slate-900">₹{product.salePrice}</span>
              <span className="text-lg text-slate-300 line-through font-light">₹{product.mrp}</span>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Description</h3>
                <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                  {product.description}
                </p>
              </section>

              <section>
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-6">Key Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                      <span className="text-sm md:text-base text-slate-600 font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-50 p-6 md:p-8 rounded-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Volume</h4>
                    <p className="text-sm font-medium text-slate-700">{product.details}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Usage</h4>
                    <p className="text-sm font-medium text-slate-700">{product.dosage}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                   <p className="text-[11px] leading-relaxed text-slate-400">
                    <strong className="text-red-400 mr-2">CAUTION:</strong> 
                    {product.caution}
                   </p>
                </div>
              </section>

              {/* Action */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full md:w-auto px-12 py-5 bg-emerald-600 text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-emerald-500 transition-colors duration-300 rounded-xl"
                >
                  Buy Now
                </a>
               
              </div>
            </div>

            {/* Story section */}
            <footer className="mt-24 pt-12 border-t border-slate-100">
               <h2 className="text-2xl font-light text-slate-900 mb-4">Philosophy</h2>
               <p className="text-sm text-slate-500 leading-relaxed font-light">
                 Each formula is a balance of traditional heritage and modern science. 
                 We source only the highest grade of {product.name.split(' ')[0]} to ensure 
                 a transformative wellness experience.
               </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}