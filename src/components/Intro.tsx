import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section id="about" className="relative py-24 md:py-48 bg-next-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-heading leading-tight uppercase text-next-text">
                AI Video <br />
                <span className="italic text-next-accent">Growth Partner</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-next-text/70 max-w-md leading-relaxed"
            >
              We don't just edit videos. We build high-converting assets that position you as a premium authority in your niche.
            </motion.p>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-t-[200px] border border-next-line"
            >
              <img 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000" 
                alt="Nextframe Editing"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 md:-left-24 bg-next-dark text-next-text p-8 md:p-12 max-w-xs rounded-tr-[100px] border border-next-line shadow-2xl"
            >
              <h3 className="text-2xl font-heading mb-4 uppercase text-next-accent">Unlock Growth</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                From viral Reels to cinematic brand stories, we use cutting-edge AI tools to ensure your content stands out in a crowded digital landscape.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
