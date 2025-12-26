import React from 'react';

// Reusable VideoCard assumed to be in your components folder
// import VideoCard from './VideoCard'; 



const TestimonialsPage = () => {
  const allVideos = [
    { src: "/videos/1.mp4", poster: "/one.png" },
    { src: "/videos/2.mp4", poster: "/two.png" },
    { src: "/videos/3.mp4", poster: "/three.png" },
    { src: "/videos/4.mp4", poster: "/four.png" },
    { src: "/videos/5.mp4", poster: "/five.png" },
    { src: "/videos/6.mp4", poster: "/six.png" },
    { src: "/videos/7.mp4", poster: "/seven.png" },
    { src: "/videos/8.mp4", poster: "/eight.png" },
    { src: "/videos/9.mp4", poster: "/nine.png" },
    { src: "/videos/10.mp4", poster: "/ten.png" },
    { src: "/videos/11.mp4", poster: "/eleven.png" },
    { src: "/videos/12.mp4", poster: "/twelve.png" },
  ];

  function VideoCard({ src, poster }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white">
      
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

  return (
    <main className="min-h-screen bg-[#fcfdfd]">
      <section className="pt-12 md:pt-32  bg-gradient-to-b from-emerald-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="inline-block text-emerald-600 font-bold tracking-[0.25em] uppercase text-[8px] md:text-xs bg-white border border-emerald-100 shadow-sm px-4 py-2 rounded-full mb-2 md:mb-6">
            Community Voices
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter mb-2 md:mb-6">
            Real Stories, <span className="text-emerald-600">Real Impact.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-xs md:text-xl leading-relaxed">
            Discover how Trueworld Care is transforming daily wellness through the honest experiences of our community members.
          </p>
        </div>
      </section>

      <section className="pb-5 md:pb-24 px-4 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            {allVideos.map((video, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <VideoCard src={video.src} poster={video.poster} />
                <div className="p-2 md:p-4 bg-white">
                  <div className="flex items-center justify-center text-center mx-auto gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest">Verified Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </main>
  );
};

export default TestimonialsPage;