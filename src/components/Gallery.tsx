import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videoReels = [
  {
    thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1282-large.mp4',
    title: 'Cinematic AI'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4412-large.mp4',
    title: 'Tech Growth'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-4414-large.mp4',
    title: 'Editing Flow'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-woman-1284-large.mp4',
    title: 'Visual Story'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-neon-light-1283-large.mp4',
    title: 'Fashion AI'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-4413-large.mp4',
    title: 'Business Ads'
  }
];

export default function Gallery() {
  return (
    <section id="gallery-top" className="relative pt-32 pb-24 bg-next-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl leading-relaxed text-next-text/80">
              High-converting AI videos that sell. Ads, Reels & Cinematic Content that drive engagement and sales.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h2 className="text-6xl md:text-8xl font-heading uppercase leading-none text-next-text">
              Video <br />
              <span className="italic text-next-accent">Portfolio</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoReels.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video overflow-hidden rounded-[32px] relative group cursor-pointer bg-next-dark border border-next-line"
            >
              <video 
                src={reel.video} 
                poster={reel.thumb}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-next-bg/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-next-accent/20 backdrop-blur-md flex items-center justify-center mb-4 border border-next-accent/30">
                  <Play size={24} className="text-next-accent fill-current ml-1" />
                </div>
                <h3 className="text-xl font-heading text-next-text uppercase tracking-widest">{reel.title}</h3>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-next-accent bg-next-bg/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  AI Enhanced
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
