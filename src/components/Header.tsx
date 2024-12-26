import React from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  'New',
  'Popular',
  '2 Player',
  'Car',
  'Sports',
  'Skill',
  'Running',
  'More'
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-purple-900/50 to-transparent py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Unblocked-Games-ATSchool.Github.io
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-purple-900/95 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-purple-800/50 transition-colors uppercase text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}