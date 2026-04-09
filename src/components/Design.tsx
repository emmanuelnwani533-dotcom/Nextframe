import { motion } from 'motion/react';

export default function Design() {
  return (
    <section id="process" className="relative py-24 md:py-48 bg-next-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-8 text-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">How We Work</span>
              <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none text-next-text">Process</h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-next-text/70 max-w-md ml-auto leading-relaxed"
            >
              A streamlined workflow from initial concept to final render, ensuring your vision is executed with precision.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2 order-2 md:order-1 relative">
            <motion.div 
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-b-[200px] border border-next-line"
            >
              <img 
                src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000" 
                alt="Editing Process"
                className="w-full h-full object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-heading leading-tight uppercase text-next-text">
              We use <span className="italic text-next-accent">advanced AI</span> and professional software to deliver results in record time.
            </h3>
            <p className="text-lg text-next-text/70 leading-relaxed">
              Our process is designed for speed without compromising on quality. We handle everything from scriptwriting and hooks to color grading and sound design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-full border border-next-accent/30"
            >
              <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600" alt="Detail 1" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square overflow-hidden rounded-full mt-12 border border-next-accent/30"
            >
              <img src="https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=600" alt="Detail 2" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
