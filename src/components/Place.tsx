import { motion } from 'motion/react';

export default function Place() {
  return (
    <section id="location" className="relative py-24 md:py-48 bg-next-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">Global Reach</span>
              <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none text-next-text">Impact</h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-next-text/70 max-w-md leading-relaxed"
            >
              Nextframe Media works with forward-thinking brands across the globe, from Silicon Valley startups to luxury European agencies.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square bg-next-dark/20 rounded-full flex items-center justify-center relative overflow-hidden border border-next-line"
            >
              <img 
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000" 
                alt="Global Network"
                className="w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-next-accent rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-next-accent rounded-full absolute shadow-[0_0_20px_rgba(199,125,255,0.8)]"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: '500+', label: 'Videos Delivered', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400' },
            { value: '50M+', label: 'Combined Views', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
            { value: '98%', label: 'Client Retention', img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=400' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border border-next-line bg-next-dark">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
              </div>
              <div className="text-5xl font-heading text-next-text">{item.value}</div>
              <p className="text-xs uppercase tracking-widest opacity-60 max-w-[150px] text-next-accent">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
