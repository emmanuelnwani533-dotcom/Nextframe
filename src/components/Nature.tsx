import { motion } from 'motion/react';

export default function Nature() {
  return (
    <section id="quality" className="relative py-24 md:py-48 bg-next-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-24">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-video overflow-hidden rounded-[40px] border border-next-line"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                alt="Cinematic Quality"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">Visual Excellence</span>
              <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none text-next-text">Cinematic</h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-next-text/70 max-w-md leading-relaxed"
            >
              We bring Hollywood-grade color grading and sound design to your brand. Every frame is meticulously crafted to evoke emotion and drive conversion.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Color Grading', desc: 'Custom LUTs and professional color correction to give your videos a premium, consistent look.', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
            { title: 'Sound Design', desc: 'Immersive soundscapes and professional audio mixing that bring your visual story to life.', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800' },
            { title: 'Motion Graphics', desc: 'Dynamic text and AI-enhanced animations that keep your audience engaged from start to finish.', img: 'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=800' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[30px] border border-next-line">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 opacity-70"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-heading uppercase italic text-next-accent">{item.title}</h3>
              <p className="text-sm text-next-text/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
