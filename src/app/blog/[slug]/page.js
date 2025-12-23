import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '../../data/blogs';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return {};
  return { 
    title: `${blog.title} | The True World`,
    description: blog.excerpt 
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) notFound();

  // Filter 2 related blogs (excluding current one)
  const relatedBlogs = blogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <article className="bg-[#FCFCFC] min-h-screen pb-20">
      {/* 1. Progress Bar (Visual touch) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100">
        <div className="bg-emerald-500 h-full w-1/3" /> {/* Note: Real progress requires a small client component */}
      </div>

      {/* 2. Minimalist Navigation Header */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-all group text-sm font-medium">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        <div className="flex gap-4">
           <button className="text-slate-400 hover:text-slate-600"><Share2 className="w-5 h-5" /></button>
        </div>
      </nav>

      {/* 3. Hero Header Section */}
      <header className="max-w-4xl mx-auto px-6 text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6 text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
          <span>{blog.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3" /> {blog.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-slate-900 leading-[1.15] mb-8">
          {blog.title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-slate-500 text-sm italic">
          <Calendar className="w-4 h-4" />
          {blog.date}
        </div>
      </header>

      {/* 4. Large Cinematic Image */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* 5. Main Content Area */}
      <div className="max-w-3xl mx-auto px-6">
        <div 
          className="prose prose-slate prose-lg max-w-none 
          prose-headings:font-light prose-headings:text-slate-900 
          prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-8
          prose-li:text-slate-600 text-black prose-li:marker:text-emerald-500
          prose-blockquote:border-l-emerald-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
          prose-img:rounded-3xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags Section */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Filed Under</p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full text-xs text-slate-500 border border-slate-100 bg-white hover:border-emerald-200 hover:text-emerald-600 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Related Articles (User-friendly engagement) */}
        <section className="mt-24 pt-16 border-t border-slate-100">
          <h3 className="text-2xl font-light text-slate-900 mb-10">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map((rBlog) => (
              <Link href={`/blog/${rBlog.slug}`} key={rBlog.id} className="group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src={rBlog.image} alt={rBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-lg font-medium text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {rBlog.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>

  
      </div>
    </article>
  );
}