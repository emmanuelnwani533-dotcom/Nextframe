import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const packageTypes = [
  {
    title: 'Starter',
    desc: 'Perfect for testing the waters',
    stats: [
      { label: 'High-quality video', value: '1' },
      { label: 'Revision round', value: '1' }
    ],
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Growth',
    desc: 'Scale your content aggressively',
    stats: [
      { label: 'High-converting videos', value: '3–5' },
      { label: 'Revision rounds', value: '2' }
    ],
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Premium',
    desc: 'The ultimate cinematic experience',
    stats: [
      { label: 'Full campaign videos', value: 'Unlimited' },
      { label: 'Revisions', value: 'Unlimited' }
    ],
    img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Residences() {
  return (
    <section id="packages" className="relative py-24 md:py-48 bg-next-dark text-next-text overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] opacity-60 block mb-4 text-next-accent">Flexible Solutions</span>
            <h2 className="text-6xl md:text-9xl font-heading uppercase leading-none">Packages</h2>
          </motion.div>
        </div>

        <div className="space-y-32">
          {packageTypes.map((type, i) => (
            <div key={type.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ clipPath: 'inset(0 0 0 100%)' }}
                  whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="aspect-[16/10] overflow-hidden rounded-[40px] border border-next-line"
                >
                  <img src={type.img} alt={type.title} className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-6xl font-heading uppercase mb-2 text-next-accent">{type.title}</h3>
                  <p className="text-lg opacity-60 italic">{type.desc}</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-next-text/10">
                  {type.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-heading mb-1 text-next-text">{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest opacity-50 text-next-accent">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-next-text/20 flex items-center justify-center group-hover:bg-next-accent group-hover:text-next-bg transition-colors">
                    <Plus size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-medium text-next-text">Choose {type.title}</span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
