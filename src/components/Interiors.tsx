import { motion } from 'motion/react';

const clientLogos = [
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400'
];

export default function Interiors() {
  return (
    <section id="testimonials" className="relative py-24 md:py-48 bg-next-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">Client Success</span>
              <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none text-next-text">Results</h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-next-text/70 max-w-md leading-relaxed"
            >
              Our clients have seen massive growth in engagement and sales. We don't just deliver videos; we deliver results that move the needle.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-t-full border border-next-line"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Client Success"
                className="w-full h-full object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar snap-x">
          {clientLogos.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[450px] aspect-[3/4] overflow-hidden rounded-[40px] snap-center border border-next-line"
            >
              <img src={img} alt={`Client ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 opacity-60" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-24">
          <p className="text-lg md:text-2xl font-heading italic opacity-80 leading-relaxed text-next-text">
            "Nextframe Media transformed our brand's digital presence. Their AI-driven approach to video editing is unlike anything we've seen before. Highly recommended for any brand looking to scale."
          </p>
          <div className="mt-8 text-next-accent uppercase tracking-widest text-sm">— Sarah Jenkins, CEO of TechFlow</div>
        </div>

      </div>
    </section>
  );
}
