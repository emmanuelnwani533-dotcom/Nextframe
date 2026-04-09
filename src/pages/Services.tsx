import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-next-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-bold mb-6 text-next-text uppercase"
          >
            Our <span className="italic text-next-accent">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-next-text/60 font-medium leading-relaxed"
          >
            A comprehensive suite of video solutions designed to scale your brand and maximize engagement.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Ads & Conversion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-next-dark/5 border border-next-line rounded-[40px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-heading font-bold mb-2 text-next-text uppercase">Ads & Conversion</h3>
            <p className="text-next-text/60 mb-8 font-medium">High-converting video ads that drive ROI.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Direct Response Ads", "UGC Style Content", "A/B Testing Hooks", "Performance Tracking"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-next-accent shrink-0 mt-0.5" />
                  <span className="text-next-text/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-next-line">
              <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600" alt="Ads" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Short-Form Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-next-dark text-next-text rounded-[40px] p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl border border-next-line"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-next-accent text-next-bg px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2 uppercase text-next-accent">Short-Form</h3>
            <p className="text-next-text/60 mb-8 font-medium">Viral-ready Reels, TikToks, and Shorts.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Dynamic Captions", "Viral Hook Strategy", "Trending Audio Sync", "Daily Content Batching", "Platform Optimization"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-next-accent shrink-0 mt-0.5" />
                  <span className="text-next-text/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-next-line">
              <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600" alt="Short Form" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Cinematic Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-next-dark/5 border border-next-line rounded-[40px] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-heading font-bold mb-2 text-next-text uppercase">Cinematic Brand</h3>
            <p className="text-next-text/60 mb-8 font-medium">Premium stories that build authority.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Brand Documentaries", "Executive Profiles", "Product Showcases", "Event Highlights"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-next-accent shrink-0 mt-0.5" />
                  <span className="text-next-text/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-next-line">
              <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600" alt="Cinematic" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-next-text/40 mb-6 uppercase tracking-[0.4em] text-[10px] font-bold">Ready to start?</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-next-text uppercase italic">Let's build your vision</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-next-accent text-next-bg px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 shadow-xl"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
