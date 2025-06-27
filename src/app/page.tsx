import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Portfolio />
	  <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}