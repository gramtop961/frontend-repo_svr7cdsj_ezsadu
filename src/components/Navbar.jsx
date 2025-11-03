import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center font-bold">
              P
            </div>
            <span className="text-lg font-semibold tracking-tight">PatentPilot</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Sign up
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#signup"
                className="mt-2 block rounded-md bg-black px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
                onClick={() => setOpen(false)}
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
