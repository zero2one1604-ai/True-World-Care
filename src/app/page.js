import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Banner from "../../public/image/banner.png";
import PhoneBanner from "../../public/image/mobileabout.png";

export const metadata = {
  title: "The Trueworld Care: Ayurvedic Wellness Supplements for Weight Loss & Detox",
  description:
    "Discover Ayurvedic supplements by Trueworld Care designed for weight loss, metabolism boost, detox and digestive balance. Real results, no shortcuts.",
  alternates: {
    canonical: "https://thetrueworldcare.com",
  },
  openGraph: {
    title: "The Trueworld Care | Ayurvedic Wellness That Works",
    description:
      "Weight loss capsules, detox powders and metabolism support rooted in Ayurveda and modern science.",
    url: "https://thetrueworldcare.com",
    images: [
      {
        url: "/image/banner.png",
        width: 1200,
        height: 630,
        alt: "The Trueworld Care Ayurvedic Wellness Products",
      },
    ],
  },
};

function VideoCard({ src, poster }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white">
      
      {/* Video Wrapper */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload="none"
          controls
        />
      </div>

    </div>
  )
}


export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Ayurvedic Weight Loss and Wellness Supplements by Trueworld Care
      </h1>

      <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex flex-col">
        <div className="relative w-full">
          <Image
            src={Banner}
            alt="Trueworld Care Ayurvedic Wellness Supplements"
            height={600}
            width={1920}
            priority
            className="hidden md:flex"
          />
          <Image
            src={PhoneBanner}
            alt="Trueworld Care Natural Weight Loss Products"
            height={600}
            width={1920}
            priority
            className="flex md:hidden w-full"
          />
        </div>

        <ProductsSection />
        <BlogSection />
        <TestimonialsSection />
<section className="w-full  py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4">
    
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
      <p className="inline-block text-emerald-600 font-bold tracking-[0.25em] uppercase text-[8px] md:text-xs bg-emerald-50 px-4 py-1.5 rounded-full">
        Real Stories
      </p>
      <h2 className="text-xl sm:text-4xl mt-2 md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-2 md:mb-8">
        See How Trueworld Care
        <br className="hidden sm:block" />
        Fits Into Real Lives
      </h2>
      <p className="text-slate-500 text-xs md:text-lg leading-relaxed">
        No scripts. No exaggeration. Just honest experiences and everyday wellness.
      </p>
       <div className="mt-4 md:mt-12 flex justify-center gap-1.5">
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
    <div className="w-8 h-1 rounded-full bg-emerald-500"></div>
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
  </div>
    </div>

    {/* Videos */}
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-12">
      <VideoCard
        src="/videos/1.mp4"
        poster="/one.png"
      />

      <VideoCard
        src="/videos/2.mp4"
        poster="/two.png"
       />
       <VideoCard
        src="/videos/3.mp4"
        poster="/three.png"
       />
       <VideoCard
        src="/videos/4.mp4"
        poster="/four.png"
       />
       <VideoCard
        src="/videos/5.mp4"
        poster="/five.png"
       />
       <VideoCard
        src="/videos/6.mp4"
        poster="/six.png"
       />
       <VideoCard
        src="/videos/7.mp4"
        poster="/seven.png"
       />
       <VideoCard
        src="/videos/8.mp4"
        poster="/eight.png"
       />
       <VideoCard
        src="/videos/9.mp4"
        poster="/nine.png"
       />
       <VideoCard
        src="/videos/10.mp4"
        poster="/ten.png"
       />
       <VideoCard
        src="/videos/11.mp4"
        poster="/eleven.png"
       />
       <VideoCard
        src="/videos/12.mp4"
        poster="/twelve.png"
       />
    </div>
  </div>
</section>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Trueworld Care",
            url: "https://thetrueworldcare.com",
            logo: "https://thetrueworldcare.com/favicon.ico",
            sameAs: [
              "https://www.instagram.com/",
              "https://www.facebook.com/",
            ],
          }),
        }}
      />
    </>
  );
}
