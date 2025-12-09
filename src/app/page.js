import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Banner from '../../public/image/banner.png';
import PhoneBanner from '../../public/image/mobileabout.png';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex flex-col">
  <div className='relative w-full'>
        <Image
          src={Banner}
          alt='Premium Perfumes'
          height={600}
          width={1920}
          priority
          className="hidden md:flex"
        />
         <Image
          src={PhoneBanner}
          alt='Premium Perfumes'
          height={600}
          width={1920}
          className="flex md:hidden w-full"
          priority
        />
      </div>
      <ProductsSection />
      <BlogSection />
      <TestimonialsSection  />
    </div>
  );
}
