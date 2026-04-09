import { motion } from 'motion/react';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 bg-next-bg">
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-next-accent uppercase tracking-[0.4em] text-xs font-bold mb-6">AI Video Growth Partner</p>
            <h2 className="text-2xl md:text-4xl font-heading leading-tight text-next-text mb-8">
              We Turn Your Ideas Into <span className="italic text-next-accent">High-Converting</span> AI Videos That Sell.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-next-accent text-next-bg px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-next-text transition-colors shadow-lg shadow-next-accent/20">
                Get Your Video Now
              </button>
              <button className="border border-next-text/20 text-next-text px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-next-text hover:text-next-bg transition-colors flex items-center gap-2">
                <Play size={16} fill="currentColor" /> View My Work
              </button>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 text-right order-1 md:order-2">
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl md:text-[12vw] font-heading leading-[0.8] uppercase text-next-text"
          >
            Next <br />
            <span className="italic text-next-accent">Frame</span>
          </motion.h1>
        </div>
      </div>

      {/* Background Video/Image Loop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-next-bg/60 z-10"></div>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          {/* Using a high-quality cinematic image as a fallback for video feel */}
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-12 h-12 rounded-full border border-next-text/20 flex items-center justify-center animate-bounce text-next-accent">
          <ArrowDown size={20} />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-next-bg to-transparent z-20"></div>
    </section>
  );
}
