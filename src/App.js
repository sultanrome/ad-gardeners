import { useState } from 'react';
import './styles/globals.css';
import useReveal from './hooks/useReveal';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import TrustBar  from './components/TrustBar';
import Services  from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyUs     from './components/WhyUs';
import Gallery   from './components/Gallery';
import Areas     from './components/Areas';
import FAQ       from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer    from './components/Footer';
import Toast     from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(false);
  useReveal();

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <>
      <Navbar />
      <Hero onQuoteSuccess={showToast} />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Gallery />
      <Areas />
      <FAQ />
      <CTABanner />
      <Footer />
      <Toast show={toast} />
    </>
  );
}
