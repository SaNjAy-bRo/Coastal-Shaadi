import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.523-4.477-10-10-10S0 14.477 0 20s4.477 10 10 10 10-4.477 10-10zm10 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <Heart className="w-6 h-6 text-accent" fill="currentColor" strokeWidth={0} />
                <span className="font-serif text-xl font-bold">
                  Coastal <span className="text-accent">Shaadi</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Honouring Hindu and Christian matrimonial traditions across the beautiful Udupi-Mangalore coastal belt. Your privacy, our promise.
              </p>
              <div className="flex gap-3">
                {['FB', 'IG', 'YT', 'WA'].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-accent hover:text-white transition-all duration-300 border border-white/5 hover:border-accent">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Browse Matches', 'Success Stories', 'Pricing', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6">Support & Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Trust & Safety', 'FAQs', 'Contact Support', 'Report Abuse'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent mt-1 shrink-0" />
                  <span className="text-gray-400 text-sm">Mangalore, Karnataka<br />India 575001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent shrink-0" />
                  <span className="text-gray-400 text-sm">+91 96321 26045</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent shrink-0" />
                  <span className="text-gray-400 text-sm">hello@coastalshaadi.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Coastal Shaadi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Made with <Heart size={12} className="text-primary" fill="currentColor" /> in Mangalore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
