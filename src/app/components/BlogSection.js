import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogSection() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Our Journal</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2">Insights for a <span className="italic font-serif">Balanced</span> Life</h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">
            View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className="group">
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">
                    {blog.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                {blog.title}
              </h3>
              <p className="text-slate-500 mt-3 text-sm line-clamp-2 font-light">
                {blog.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}