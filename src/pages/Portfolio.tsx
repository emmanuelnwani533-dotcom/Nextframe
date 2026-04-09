import { motion } from "motion/react";
import { Plus, ArrowRight } from "lucide-react";

const videoProjects = [
  {
    category: "Ads",
    title: "Eco-Friendly Tech",
    desc: "A high-energy ad for a sustainable tech startup, focusing on speed and impact.",
    stats: "15s & 30s Versions",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    category: "Reels",
    title: "Viral Hook Strategy",
    desc: "Short-form content designed for maximum engagement and retention on Instagram.",
    stats: "9:16 Format, 45s",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    category: "Cinematic",
    title: "Brand Story: Zenith",
    desc: "A cinematic journey through the values and vision of a luxury watch brand.",
    stats: "2:30 Duration, 4K",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    category: "AI Growth",
    title: "AI Avatar Campaign",
    desc: "Leveraging AI avatars to scale content production for a global SaaS company.",
    stats: "Multi-language, AI Voice",
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];

export default function Portfolio() {
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
            Our <span className="italic text-next-accent">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-next-text/60 font-medium leading-relaxed"
          >
            A collection of high-converting videos designed to scale brands and drive engagement.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {videoProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[40px] aspect-video mb-6 bg-next-dark/5 cursor-pointer border border-next-line">
                <video 
                  src={project.video} 
                  poster={project.img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  muted
                  loop
                  onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                />
                <div className="absolute inset-0 bg-next-dark/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                <div className="absolute top-6 left-6 bg-next-bg/80 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold border border-next-line text-next-text uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              
              <h3 className="text-3xl font-heading font-bold mb-3 text-next-text uppercase">{project.title}</h3>
              <p className="text-next-text/60 mb-6 font-medium leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm">
                <div>
                  <span className="text-next-text/40 block mb-1 font-bold uppercase tracking-widest text-[10px]">Specifications</span>
                  <span className="font-bold text-next-text/80">{project.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-next-dark text-next-text rounded-[40px] p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl border border-next-line"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-next-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-next-accent/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 relative z-10 uppercase italic text-next-accent">Ready to scale?</h2>
          <p className="text-xl text-next-text/60 mb-8 relative z-10 font-medium">Let's build your next high-converting video campaign today.</p>
          
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-next-accent hover:bg-next-accent/90 text-next-bg px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 relative z-10 shadow-xl"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
