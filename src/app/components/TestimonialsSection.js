'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      product: "True Vita Capsules",
      rating: 5,
      image: "PS",
      text: "True Vita has been a game-changer for me! Within just 3 weeks, I noticed a significant boost in my energy levels. I feel more active throughout the day and my immunity has improved remarkably. The natural ingredients give me peace of mind.",
      highlight: "Energy levels increased by 80%",
      date: "2 months ago",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      product: "SHAPELLA Capsule",
      rating: 5,
      image: "RK",
      text: "I was skeptical at first, but SHAPELLA exceeded all my expectations. Lost 8 kgs in 2 months without any crash dieting. My metabolism improved, cravings reduced, and I feel more energetic. Highly recommend for anyone on a fitness journey!",
      highlight: "Lost 8 kgs in 2 months",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Anjali Desai",
      location: "Bangalore, Karnataka",
      product: "EASY FRESH Herbal Powder",
      rating: 5,
      image: "AD",
      text: "Easy Fresh is my daily wellness ritual now! It has completely transformed my digestion. No more bloating, feeling lighter and more refreshed. The natural ingredients work gently yet effectively. Best detox product I've ever tried!",
      highlight: "Improved digestion naturally",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      product: "True Vita Capsules",
      rating: 5,
      image: "VS",
      text: "As someone who travels frequently for work, True Vita keeps my immunity strong. Haven't fallen sick even once since I started taking it. The Ayurvedic blend is powerful and I love that it's chemical-free. Worth every penny!",
      highlight: "Zero sick days in 3 months",
      date: "6 weeks ago",
      verified: true
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      product: "SHAPELLA Capsule",
      rating: 5,
      image: "MR",
      text: "SHAPELLA helped me break my weight loss plateau! Combined with regular exercise, I finally achieved my fitness goals. My energy levels are amazing and I don't experience those afternoon crashes anymore. Truly grateful for this product!",
      highlight: "Broke weight loss plateau",
      date: "5 weeks ago",
      verified: true
    },
    {
      id: 6,
      name: "Arjun Patel",
      location: "Ahmedabad, Gujarat",
      product: "EASY FRESH Herbal Powder",
      rating: 5,
      image: "AP",
      text: "My doctor recommended a detox and I chose Easy Fresh. It's gentle, natural, and incredibly effective. Within days, I felt lighter and more energized. The herbal blend is perfect and there are absolutely no side effects. Excellent product!",
      highlight: "Gentle & effective detox",
      date: "1 month ago",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(index);
  };

  const handleReview = (e) => {
 e.preventDefault();
    const phoneNumber = "919211231761";
    const message = "Here is my review for Trueworld Care products: [Please write your review here]";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-2 md:py-16 bg-gradient-to-b from-white via-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block text-emerald-600 font-bold tracking-[0.25em] uppercase text-[8px] md:text-xs bg-emerald-50 px-4 py-1.5 rounded-full">
             Customer Stories
          </div>
          <h2 className="text-xl mt-2 sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-2 md:mb-8">
            Real Results from
            <span className="block text-green-700 md:mt-2">Real People</span>
          </h2>
      
          <p className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their health with Trueworld Care
          </p>
           <div className="mt-4 md:mt-12 flex justify-center gap-1.5">
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
    <div className="w-8 h-1 rounded-full bg-emerald-500"></div>
    <div className="w-1 h-1 rounded-full bg-emerald-200"></div>
  </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full"></div>
                </div>
                
        
                <div className="relative z-10 w-full flex flex-col items-center">
                  
                  <div className="flex flex-row items-center justify-center gap-5 mb-4 md:mb-8">
          
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-green-700 shadow-2xl shrink-0">
                      {testimonials[activeTestimonial].image}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <p className="text-green-100 text-xs md:text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                  
                  {testimonials[activeTestimonial].verified && (
                    <div className="inline-flex items-center bg-white/20 mb-1 backdrop-blur-sm text-white md:px-5 md:py-2 px-2 py-1 rounded-full text-xs md:text-sm md:font-semibold md:mb-6">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Customer
                    </div>
                  )}
                  
                  
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12 flex flex-col justify-center min-h-[300px] md:min-h-0">
                <div className="text-4xl md:text-6xl hidden md:flex text-green-200 mb-4">"</div>
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6 italic">
                  {testimonials[activeTestimonial].text}
                </p>
                
                <div className="bg-gradient-to-r from-amber-100 to-green-100 border-l-4 border-green-600 p-3 md:p-4 rounded-lg">
                  <p className="text-green-800 font-bold flex items-center text-xs md:text-base">
                    <span className="text-xl md:text-2xl mr-2">✨</span>
                    {testimonials[activeTestimonial].highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-600 text-green-600 hover:text-white w-12 h-12 rounded-full shadow-xl items-center justify-center transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-600 text-green-600 hover:text-white w-12 h-12 rounded-full shadow-xl items-center justify-center transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                activeTestimonial === index
                  ? 'w-10 md:w-12 h-3 bg-gradient-to-r from-green-600 to-green-700'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-6">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center border-t-4 border-green-600">
            <div className="text-sm md:text-4xl font-bold text-green-700 md:mb-2">5000+</div>
            <p className="text-gray-600 text-[9px] md:text-sm font-semibold">Happy Customers</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center border-t-4 border-amber-600">
            <div className="text-sm md:text-4xl font-bold text-amber-700 md:mb-2">4.9★</div>
            <p className="text-gray-600 text-[9px] md:text-sm font-semibold">Average Rating</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center border-t-4 border-green-600">
            <div className="text-sm md:text-4xl font-bold text-green-700 md:mb-2">95%</div>
            <p className="text-gray-600 text-[9px] md:text-sm font-semibold">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center border-t-4 border-amber-600">
            <div className="text-sm md:text-4xl font-bold text-amber-700 md:mb-2">100%</div>
            <p className="text-gray-600 text-[9px] md:text-sm font-semibold">Natural Products</p>
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to share your success story?</p>
          <button onClick={handleReview} className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Write Your Review
          </button>
        </div>
      </div>
    </section>
  );
}