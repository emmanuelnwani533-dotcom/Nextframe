import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const videoServices = [
  {
    id: 1,
    title: 'Ads',
    desc: 'High-converting video ads designed to stop the scroll and drive immediate action. We combine psychological triggers with cinematic editing to maximize your ROI.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Reels',
    desc: 'Viral-ready short-form content for Instagram, TikTok, and YouTube Shorts. We master the art of the hook to ensure your brand stays relevant and trending.',
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Cinematic',
    desc: 'Premium brand stories and cinematic documentaries. We craft a visual narrative that connects deeply with your audience and builds long-term trust.',
    img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'AI Growth',
    desc: 'Leveraging cutting-edge AI tools for voiceovers, avatars, and dynamic backgrounds. Scale your content production without sacrificing quality.',
    img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Wellness() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % videoServices.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + videoServices.length) % videoServices.length);

  return (
    <section id="services" className="relative py-24 md:py-48 bg-next-dark text-next-text overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          
          <div className="w-full md:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">Core Expertise</span>
              <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none">Services</h2>
            </motion.div>

            <div className="space-y-8 max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-heading mb-6 uppercase italic text-next-accent">{videoServices[activeIndex].title}</h3>
                  <p className="text-lg opacity-70 leading-relaxed">
                    {videoServices[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 pt-8">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-next-text/20 flex items-center justify-center hover:bg-next-accent hover:text-next-bg transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-xs tracking-widest uppercase font-medium">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(videoServices.length).padStart(2, '0')}
                </div>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-next-text/20 flex items-center justify-center hover:bg-next-accent hover:text-next-bg transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-[40px] relative border border-next-line">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  src={videoServices[activeIndex].img}
                  alt={videoServices[activeIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-next-dark/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-next-text/10 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border border-next-text/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-next-accent/10 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
