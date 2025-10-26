import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
