import { motion } from "motion/react";
import { MessageCircle, Mail, User, ArrowRight } from "lucide-react";

const EMAIL = "hello@nextframe.media";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center bg-next-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Direct Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-next-text uppercase">
              Let's build something <br /><span className="italic text-next-accent">extraordinary.</span>
            </h1>
            <p className="text-xl text-next-text/60 mb-12 font-medium leading-relaxed">
              Ready to scale your brand with high-converting AI videos? Reach out to our team or fill out the form for a discovery call.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-next-dark/20 flex items-center justify-center shrink-0 border border-next-line">
                  <User className="w-7 h-7 text-next-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1 text-next-text uppercase">Emmanuel Nwani</h3>
                  <p className="text-next-text/60 font-medium tracking-widest uppercase text-xs">AI Video Growth Partner</p>
                </div>
              </div>

              <a 
                href="https://wa.me/2349060273466" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-6 group hover:bg-next-dark/20 p-4 -ml-4 rounded-2xl transition-all duration-500 border border-transparent hover:border-next-line"
              >
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-[#25D366] transition-colors text-next-text uppercase">WhatsApp</h3>
                  <p className="text-next-text/60 font-medium">+234 906 027 3466</p>
                </div>
              </a>

              <a 
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-6 group hover:bg-next-dark/20 p-4 -ml-4 rounded-2xl transition-all duration-500 border border-transparent hover:border-next-line"
              >
                <div className="w-14 h-14 rounded-full bg-next-accent/10 flex items-center justify-center shrink-0 group-hover:bg-next-accent/20 transition-colors">
                  <Mail className="w-7 h-7 text-next-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-next-accent transition-colors text-next-text uppercase">Email</h3>
                  <p className="text-next-text/60 font-medium">{EMAIL}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-next-dark text-next-text p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl border border-next-line"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-next-accent/5 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-heading font-bold mb-8 relative z-10 uppercase italic text-next-accent">Request a discovery call</h2>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-next-text/40 mb-2 uppercase tracking-[0.2em]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-next-bg/5 border border-next-line rounded-xl px-4 py-3 text-next-text focus:outline-none focus:border-next-accent/30 transition-colors font-medium"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-next-text/40 mb-2 uppercase tracking-[0.2em]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-next-bg/5 border border-next-line rounded-xl px-4 py-3 text-next-text focus:outline-none focus:border-next-accent/30 transition-colors font-medium"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-xs font-bold text-next-text/40 mb-2 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  id="project" 
                  rows={4}
                  className="w-full bg-next-bg/5 border border-next-line rounded-xl px-4 py-3 text-next-text focus:outline-none focus:border-next-accent/30 transition-colors resize-none font-medium"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-next-accent text-next-bg py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
              >
                Submit Request <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-center text-[10px] text-next-text/40 mt-4 uppercase tracking-widest">
                We'll respond within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
