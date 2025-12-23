import { blogs } from '../data/blogs';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Wellness Blog | The True World Care',
  description: 'Explore expert insights on Ayurveda, gut health, and sustainable weight loss.',
};

export default function BlogPage() {
  return (
    <main className="bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl text-black font-light mb-6">Blogs</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-light">
            Evidence-based guides and traditional wisdom for your modern wellness journey.
          </p>
        </header>

        <div className="space-y-24">
          {blogs.map((blog) => (
            <article key={blog.id} className="grid md:grid-cols-2 gap-12 items-center group">
              <Link href={`/blog/${blog.slug}`} className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden block">
                <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </Link>
              <div>
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  <span>{blog.category}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-400">{blog.readTime}</span>
                </div>
                <Link href={`/blog/${blog.slug}`}>
                  <h2 className="text-3xl font-light mb-4 text-black group-hover:text-emerald-700 transition-colors">{blog.title}</h2>
                </Link>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className="text-slate-900 font-bold text-sm uppercase tracking-tighter border-b border-slate-900 pb-1">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}