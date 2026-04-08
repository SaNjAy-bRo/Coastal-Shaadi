import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LeafCorner, FloatingDots, MandalaPattern } from './Decorative';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  { src: "/images/hero-wedding.png", alt: "Traditional Wedding Ceremony" },
  { src: "/images/christian-wedding.png", alt: "Church Wedding Ceremony" },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Images with crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === currentImage ? 1 : 0 }}
          />
        ))}
        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      </div>

      {/* Decorative corners */}
      <LeafCorner className="absolute top-0 left-0 z-20 opacity-70" />
      <LeafCorner className="absolute top-0 right-0 z-20 opacity-50" flip />
      <FloatingDots count={25} />
      <MandalaPattern className="absolute top-32 right-16 hidden xl:block" size={280} opacity={0.05} />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 z-20" />

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentImage ? 'bg-accent w-8' : 'bg-white/40 w-4 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-10 pt-28 pb-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-[55%] text-center lg:text-left"
        >
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">A Century of Coastal Commitments</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 [text-shadow:0_4px_8px_rgba(0,0,0,1),0_0_15px_rgba(0,0,0,1),0_0_30px_rgba(0,0,0,1)]">
            Finding{' '}
            <span className="relative inline-block">
              <span className="text-accent italic font-light drop-shadow-2xl">the right person</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent origin-left" />
            </span>
            <br className="hidden sm:block" />
            <span className="text-white/90">to grow old with,</span>
            <br />
            made{' '}
            <span className="relative text-accent italic font-light drop-shadow-2xl">
              Easy
              <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-3 -right-5 text-lg drop-shadow-none">✦</motion.span>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/95 font-medium max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0 [text-shadow:0_2px_4px_rgba(0,0,0,1),0_0_10px_rgba(0,0,0,1)]">
            Dignified, private, and verified matches for the Udupi-Mangalore coastal community. Your traditions, your privacy, our commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-accent to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_4px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.6)] transition-shadow">
              Start Your Journey
            </motion.button>
            <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all backdrop-blur-sm">
              Browse Matches
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Registration Card */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="w-full max-w-md lg:w-[400px]">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute -top-px left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif text-white font-bold">Create Account</h3>
              <p className="text-sm text-white/60 mt-1.5">Start your forever journey</p>
            </div>
            <form className="space-y-3">
              <div>
                <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">On Behalf</label>
                <select className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white/80 focus:outline-none focus:border-accent/60 transition-all">
                  <option className="bg-gray-900">Self</option>
                  <option className="bg-gray-900">Son</option>
                  <option className="bg-gray-900">Daughter</option>
                  <option className="bg-gray-900">Brother</option>
                  <option className="bg-gray-900">Sister</option>
                  <option className="bg-gray-900">Friend</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">First Name</label>
                  <input type="text" placeholder="First Name" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Last Name</label>
                  <input type="text" placeholder="Last Name" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Gender</label>
                  <select className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white/80 focus:outline-none focus:border-accent/60 transition-all">
                    <option className="bg-gray-900">Male</option>
                    <option className="bg-gray-900">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Date Of Birth</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Email address</label>
                <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
                  <p className="text-[9px] text-white/40 mt-1">Minimum 8 characters</p>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-1">Confirm password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all" />
                  <p className="text-[9px] text-white/40 mt-1">Minimum 8 characters</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-2 pt-2">
                <input type="checkbox" id="terms" className="mt-0.5 rounded border-white/15 bg-white/10 text-accent focus:ring-accent/60" />
                <label htmlFor="terms" className="text-[10px] text-white/60">
                  By signing up you agree to our <a href="#" className="text-accent hover:underline">terms and conditions.</a>
                </label>
              </div>

              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 rounded-xl font-bold text-sm shadow-lg mt-3 flex items-center justify-center gap-2">
                Create Account
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
