import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Heart, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between ${
          isScrolled ? 'bg-next-bg/80 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full border border-next-text/20 flex items-center justify-center group-hover:bg-next-accent group-hover:text-next-bg transition-colors text-next-text">
              <Menu size={20} />
            </div>
            <span className="hidden md:block text-xs uppercase tracking-widest font-medium text-next-text">Menu</span>
          </button>
          
          <Link to="/portfolio" className="hidden md:flex items-center gap-2 group text-next-text">
            <span className="text-xs uppercase tracking-widest font-medium">Portfolio</span>
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-heading tracking-[0.2em] uppercase text-next-text">Nextframe</span>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 -mt-1 text-next-accent">Media</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/contact" className="hidden md:block text-xs uppercase tracking-widest font-medium border-b border-next-text/20 pb-1 hover:border-next-accent transition-colors text-next-text">
            Contact us
          </Link>
          
          <div className="relative group">
            <button className="w-10 h-10 rounded-full border border-next-text/20 flex items-center justify-center hover:bg-next-accent hover:text-next-bg transition-colors text-next-text">
              <Heart size={18} />
            </button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-next-accent text-next-bg text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-next-bg text-next-text flex flex-col"
          >
            <div className="p-6 md:p-12 flex justify-between items-center">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-next-text/20 flex items-center justify-center hover:bg-next-accent hover:text-next-bg transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-heading tracking-[0.2em] uppercase">Nextframe</span>
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-60 -mt-1 text-next-accent">Media</span>
              </div>

              <Link to="/contact" className="hidden md:block text-xs uppercase tracking-widest font-medium border-b border-next-text/20 pb-1 hover:border-next-accent transition-colors">
                Contact us
              </Link>
            </div>

            <div className="flex-grow flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-24 flex flex-col justify-center">
                <nav className="space-y-4 md:space-y-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className="block text-4xl md:text-7xl font-heading hover:italic hover:text-next-accent transition-all duration-500"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              
              <div className="hidden md:block w-1/2 relative overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://picsum.photos/seed/springs-menu/1200/1600" 
                  alt="Springs"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
