import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Heart, Leaf } from 'lucide-react';

export const metadata = {
  title: 'About Our Mission | The True World Care',
  description: 'At The True World Care, we believe wellness is a daily ritual. Discover our commitment to sustainable health, ethics, and transparency.',
};

export default function AboutPage() {
  const contactInfo = [
    {
      icon: <Phone className="md:w-5 w-3 h-3 md:h-5" />,
      label: 'Call Us',
      value: '+91 92112 31761',
      href: 'tel:+919211231761',
    },
    {
      icon: <Mail className="md:w-5 w-3 h-3 md:h-5" />,
      label: 'Email Support',
      value: 'support@thetrueworldcare.com',
      href: 'mailto:support@thetrueworldcare.com',
    },
    {
      icon: <MessageCircle className="md:w-5 w-3 h-3 md:h-5" />,
      label: 'WhatsApp',
      value: 'Chat with an Expert',
      href: 'https://wa.me/919211231761',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="relative pt-12 pb-4 md:pt-40 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-emerald-600 font-bold tracking-[0.25em] uppercase text-[8px] md:text-xs bg-emerald-50 px-4 py-1.5 rounded-full mb-2">
            Our Philosophy
          </span>
          <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-2 md:mb-8">
            Wellness is not just a goal, it is a <span className="italic font-serif">daily ritual.</span>
          </h1>
          <p className="text-xs md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            At The True World Care, we help you feel lighter, stronger, and more confident in your skin, every single day.
          </p>
        </div>
      </section>

      <section className=" bg-[#F9F9F9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop" 
                alt="Ayurvedic Wellness" 
                fill 
                className="object-cover"
              />
            </div>
            
            <div className="space-y-2 md:space-y-8 mt-4">
              <h2 className="text-xl text-center md:text-4xl font-light text-slate-900">Real Progress, <br/>No Shortcuts.</h2>
              <div className="prose prose-slate prose-lg text-xs md:text-base  text-slate-600 font-light">
                <p>
                  Our weight loss capsules have been formulated thoughtfully to support your fitness journey. 
                  From restraining your cravings to magnifying your metabolism, each of our capsules works 
                  to help your body achieve sustainable and steady results.
                </p>
                <p>
                  We are not talking about empty promises or quick fixes. We believe in the power of nudge: 
                  when you look after your body, it takes care of you.
                </p>
              </div>
              
              <div className="grid grid-cols-3 mx-auto justify-center items-center gap-6 pt-6">
                <div className="flex items-center gap-1 md:gap-3">
                  <ShieldCheck className="text-emerald-600 md:w-5 w-3 h-3 md:h-5" />
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Ethics</span>
                </div>
                <div className="flex items-center gap-1 md:gap-3">
                  <Leaf className="text-emerald-600 md:w-5 w-3 h-3 md:h-5" />
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Natural</span>
                </div>
                <div className="flex items-center gap-1 md:gap-3">
                  <Heart className="text-emerald-600 md:w-5 h-3 w-3 md:h-5" />
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-24 py-6 px-3 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="text-center gap-16 relative z-10">
              <div>
                <h2 className="text-xl md:text-5xl font-light mb-2 md:mb-6">Get in Touch</h2>
                <p className="text-slate-400 text-xs md:text-lg font-light mb-4 md:mb-12">
                  Have questions about your wellness journey? Our experts are here to help you choose the right ritual for your body.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <a 
                      key={i} 
                      href={item.href} 
                      target={item.label === 'WhatsApp' ? '_blank' : '_self'}
                      className="flex items-center gap-4 group"
                    >
                      <div className="md:w-12 h-6 w-6 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        {item.icon}
                      </div>
                      <div className='text-left'>
                        <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                        <p className="text-sm md:text-lg font-light group-hover:text-emerald-400 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      <section className=" text-center px-6 pb-10">
        <h2 className="text-sm md:text-2xl font-light text-slate-400 md:mb-8 italic">Honor your commitment towards health.</h2>
        <Link href="/shop" className="text-slate-900 font-bold border-b-2 text-xs md:text-base border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">
          Browse Our Products
        </Link>
      </section>
    </main>
  );
}