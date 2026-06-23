import SpotlightBackground from '../components/SpotlightBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChoose from '../components/WhyChoose';
import HowWeWork from '../components/HowWeWork';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <SpotlightBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <WhyChoose />
          <HowWeWork />
          <Pricing />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
