import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

/* ------------------------------------------
   REQUIRED: makes params stable (SSR + dev)
------------------------------------------- */
export function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

/* ------------------------------------------
   SEO METADATA (SSR)
------------------------------------------- */
export async function generateMetadata({ params }) {
  const product = products.find(p => p.slug === params?.slug);

  if (!product) {
    return {
      title: "Product Not Found | Trueworld Care",
      robots: { index: false },
    };
  }

  return {
    title: `${product.name} – Buy Online`,
    description: product.description,
    alternates: {
      canonical: `https://thetrueworldcare.com/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      type: "product",
      images: [
        {
          url: `https://thetrueworldcare.com${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

/* ------------------------------------------
   PAGE COMPONENT
------------------------------------------- */
export default function ProductDetailPage({ params }) {
  if (!params?.slug) notFound();

  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();

  const phoneNumber = "919211231761";

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to buy:\n\n${product.name}\nPrice: ₹${product.salePrice}\nDetails: ${product.details}`
  );

  /* ------------------------------------------
     PRODUCT SCHEMA (JSON-LD)
  ------------------------------------------- */
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://thetrueworldcare.com${product.image}`],
    description: product.description,
    sku: `TWC-${product.id}`,
    brand: {
      "@type": "Brand",
      name: "Trueworld Care",
    },
    offers: {
      "@type": "Offer",
      url: `https://thetrueworldcare.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.salePrice,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <main className="bg-white px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
              {product.name}
            </h1>

            <p className="text-lg italic text-emerald-600 mb-6">
              {product.tagline}
            </p>

            <p className="text-slate-600 text-base md:text-lg mb-6">
              {product.description}
            </p>

            <ul className="space-y-2 mb-6">
              {product.benefits.map((b, i) => (
                <li key={i} className="text-slate-700 font-medium">
                  ✓ {b}
                </li>
              ))}
            </ul>

            <div className="border-y py-4 mb-6">
              <p className="text-sm"><strong>Pack:</strong> {product.details}</p>
              <p className="text-sm"><strong>Dosage:</strong> {product.dosage}</p>
              <p className="text-sm text-red-500">
                <strong>Caution:</strong> {product.caution}
              </p>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-slate-900">
                ₹{product.salePrice}
              </span>
              <span className="line-through text-slate-400">
                ₹{product.mrp}
              </span>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-emerald-700 transition"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mt-20 text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">
            Why choose {product.name}?
          </h2>
          <p>
            {product.name} is formulated using ayurvedic principles to support
            long-term wellness, without harsh chemicals or shortcuts.
          </p>
        </section>
      </main>
    </>
  );
}
