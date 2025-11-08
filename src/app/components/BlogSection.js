'use client';

import { useState } from 'react';

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "The Potential of Habits: How Small Habits Lead to Big Changes",
      excerpt: "Discover how tiny daily actions compound into remarkable transformations. Learn the science behind habit formation and unlock your potential for lasting change.",
      category: "Lifestyle",
      readTime: "5 min read",
      icon: "🎯",
      gradient: "from-green-500 to-emerald-600",
      tags: ["Habits", "Self-Improvement", "Wellness"]
    },
    {
      id: 2,
      title: "From Stress to Strength: Emotional Eating and How to Heal It",
      excerpt: "Explore the deep connection between emotions and eating patterns. Practical strategies to break free from emotional eating and build a healthier relationship with food.",
      category: "Mental Health",
      readTime: "7 min read",
      icon: "💪",
      gradient: "from-amber-500 to-orange-600",
      tags: ["Emotional Health", "Nutrition", "Mindfulness"]
    },
    {
      id: 3,
      title: "Morning vs. Evening Workouts: What's Best for Your Body?",
      excerpt: "Uncover the science behind workout timing and how it affects your performance, energy levels, and results. Find your perfect fitness schedule.",
      category: "Fitness",
      readTime: "6 min read",
      icon: "⏰",
      gradient: "from-blue-500 to-indigo-600",
      tags: ["Exercise", "Fitness", "Health"]
    },
    {
      id: 4,
      title: "Metabolism Myths: What Really Boosts Your Burn?",
      excerpt: "Separate fact from fiction in the world of metabolism. Evidence-based insights on what truly accelerates your metabolic rate and supports weight management.",
      category: "Nutrition",
      readTime: "8 min read",
      icon: "🔥",
      gradient: "from-red-500 to-pink-600",
      tags: ["Metabolism", "Weight Loss", "Science"]
    },
    {
      id: 5,
      title: "Gut Health & Weight Loss: The Surprising Connection",
      excerpt: "Explore the fascinating gut-brain axis and how your microbiome influences weight, cravings, and overall health. Transform your wellness from the inside out.",
      category: "Health",
      readTime: "9 min read",
      icon: "🦠",
      gradient: "from-teal-500 to-cyan-600",
      tags: ["Gut Health", "Digestion", "Weight Loss"]
    },
    {
      id: 6,
      title: "Cravings Decoded: What Your Body Is Really Asking For",
      excerpt: "Break down sugar, salt, and fat cravings with actionable tips. Learn to understand your body's signals and make nourishing choices that satisfy both body and mind.",
      category: "Nutrition",
      readTime: "6 min read",
      icon: "🍎",
      gradient: "from-green-600 to-lime-600",
      tags: ["Cravings", "Nutrition", "Wellness"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Wellness & Lifestyle
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Journey to
            <span className="block text-green-700 mt-2">Better Health Starts Here</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore expert insights, evidence-based tips, and inspiring stories to transform your wellness journey
          </p>
        </div>

        {/* Featured Blog (First Card - Larger) */}
        <div className="mb-12">
          <div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className={`md:col-span-2 bg-gradient-to-br ${blogs[0].gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-4">{blogs[0].icon}</div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Post
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {blogs[0].category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blogs[0].readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hover:text-green-700 transition-colors">
                  {blogs[0].title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogs[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogs[0].tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center group">
                  Read Full Article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid (Remaining Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header with Icon */}
              <div className={`bg-gradient-to-br ${blog.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="relative z-10 text-7xl">
                  {blog.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-700 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-all duration-200 flex items-center justify-center group">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Wellness Tips
              </h3>
              <p className="text-green-50 mb-6">
                Join thousands of health enthusiasts receiving weekly insights, expert advice, and exclusive content straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-md whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-green-100 text-xs mt-4">
                ✓ No spam, unsubscribe anytime  |  ✓ Weekly wellness tips  |  ✓ Exclusive offers
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center p-12 bg-white/10">
              <div className="text-9xl">📧</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}