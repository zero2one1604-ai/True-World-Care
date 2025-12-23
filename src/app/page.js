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
