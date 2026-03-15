import { Navbar, Footer } from './components/layout';
import { HeroSection, FeaturesSection, PricingSection, ContactSection } from './sections';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
