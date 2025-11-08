import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex flex-col">
  <div className='relative w-full'>
        <Image
          src='/image/banner.png'
          alt='Premium Perfumes'
          height={600}
          width={1920}
          priority
        />
      </div>
      <ProductsSection />
      <BlogSection />
      <TestimonialsSection  />
    </div>
  );
}
