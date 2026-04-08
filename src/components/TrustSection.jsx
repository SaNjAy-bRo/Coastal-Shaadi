import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Eye, Fingerprint, Lock } from 'lucide-react';
import { WaveBorder, OrnamentDivider, MandalaPattern } from './Decorative';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "100% Verified Profiles",
    desc: "Every profile is phone and email verified. We manually screen to maintain the highest community standards."
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: "Absolute Privacy",
    desc: "Photos and personal details are locked until both parties express mutual interest and match."
  },
  {
    icon: <Fingerprint className="w-7 h-7" />,
    title: "Religion-Specific Matching",
    desc: "Hindu members see Hindu matches. Christian members see Christian matches. No cross-faith confusion."
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Profile Control",
    desc: "Full control over who views your profile. Your data is never shared or sold to third parties."
  }
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white overflow-hidden" id="about">
      <WaveBorder color="#ffffff" className="absolute -top-1 left-0 z-10" />

      <div className="py-24 lg:py-32 relative">
        {/* Decorative mandala background */}
        <MandalaPattern className="absolute top-10 left-10 hidden lg:block" size={250} opacity={0.04} />
        <MandalaPattern className="absolute bottom-10 right-10 hidden lg:block" size={200} opacity={0.03} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Why Coastal Shaadi</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5 leading-tight">
              Refined Matchmaking<br />
              <span className="text-accent">Services</span>
            </h2>
            <OrnamentDivider className="mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We blend traditional values with modern technology to create meaningful, verified connections across the beautiful Udupi-Mangalore coastal belt.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-canvas rounded-2xl p-7 border border-gray-100 hover:border-accent/30 hover:shadow-[0_10px_40px_rgba(128,0,0,0.08)] transition-all duration-500"
              >
                {/* Top gold line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
