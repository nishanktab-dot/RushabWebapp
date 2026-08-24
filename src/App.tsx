import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
