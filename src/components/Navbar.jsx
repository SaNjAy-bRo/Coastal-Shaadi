import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Success Stories', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(128,0,0,0.08)] py-3'
        : 'bg-gradient-to-b from-black/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Heart className={`w-7 h-7 transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-accent'}`} fill="currentColor" strokeWidth={0} />
              <Heart className={`w-7 h-7 absolute inset-0 animate-ping opacity-20 ${scrolled ? 'text-primary' : 'text-accent'}`} fill="currentColor" strokeWidth={0} />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                Coastal Shaadi
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${scrolled ? 'text-accent' : 'text-accent/80'}`}>
                Premium Matrimony
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button className="bg-gradient-to-r from-primary to-primary-hover text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-[0_4px_20px_rgba(128,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 border border-primary/20">
              Register Free
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen
              ? <X size={26} className={scrolled ? 'text-gray-900' : 'text-white'} />
              : <Menu size={26} className={scrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-800 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold shadow-md">
                  Register Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
