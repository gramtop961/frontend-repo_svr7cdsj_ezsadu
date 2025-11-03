import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <FAQ />
      </main>
      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} PatentPilot. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#signup" className="text-gray-600 hover:text-gray-900">Sign up</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
