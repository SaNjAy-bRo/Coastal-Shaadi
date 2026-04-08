import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import TrustedBrand from './components/TrustedBrand';
import TrustStats from './components/TrustStats';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <WhyChooseUs />
        <HowItWorks />
        <TrustedBrand />
        <TrustStats />
        <SuccessStories />
        <Testimonials />
        <Packages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
