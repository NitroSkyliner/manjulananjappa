import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#unique', label: 'What Makes Me Unique' },
  { href: '#contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-black/30 rounded-full border border-white/10 p-2">
          <div className="flex items-center justify-between lg:justify-center">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-gray-300"
              >
                <Menu size={24} />
              </button>
            </div>
            <div className={`${
              isOpen ? 'flex' : 'hidden'
            } lg:flex absolute lg:relative left-0 right-0 top-full lg:top-auto flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-2 lg:mt-0 p-4 lg:p-0 backdrop-blur-md lg:backdrop-blur-none bg-black/90 lg:bg-transparent rounded-2xl lg:rounded-none`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm lg:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}