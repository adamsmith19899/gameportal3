import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NavItem } from '../navigation/NavItem';

const mainNavItems = [
  { label: 'New', href: '/category/new' },
  { label: 'Popular', href: '/category/popular' },
  { label: 'Action', href: '/category/action' },
  { label: 'Racing', href: '/category/racing' },
  { label: 'Sports', href: '/category/sports' },
  { label: 'Puzzle', href: '/category/puzzle' },
  { label: '2 Player', href: '/category/2player' },
  { label: 'More', href: '/categories' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-b from-indigo-950/80 to-transparent backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          <Link to="/">Unblocked-Games-ATSchool.Github.io</Link>
        </h1>
        
        <button 
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
            />
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-indigo-950/95 backdrop-blur-sm border-t border-white/5 md:hidden">
            {mainNavItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isMobile
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}