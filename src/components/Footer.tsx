import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 bg-next-dark text-next-text overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-16 h-16 rounded-full border border-next-text/20 flex items-center justify-center mb-12 hover:bg-next-accent hover:text-next-bg transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
          
          <div className="flex flex-col items-center mb-16">
            <span className="text-6xl md:text-9xl font-heading tracking-[0.2em] uppercase leading-none">Nextframe</span>
            <span className="text-xs md:text-sm uppercase tracking-[0.6em] opacity-40 mt-4">Video Growth Partner</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-next-text/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <a href="/privacy" className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Legal Information</a>
            <a href="#" className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Portfolio 2026</a>
          </div>
          
          <div className="text-xs opacity-30 leading-relaxed md:text-right">
            <p>
              High-converting AI videos that sell. Ads, Reels & Cinematic Content that drive engagement and sales.
              All work displayed is property of Nextframe Media.
            </p>
            <p className="mt-4">© {new Date().getFullYear()}. Nextframe Media. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-next-accent)_0%,_transparent_70%)] blur-3xl"></div>
      </div>
    </footer>
  );
}
