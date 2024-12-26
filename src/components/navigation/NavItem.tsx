import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavItem({ label, href, onClick, isMobile = false }: NavItemProps) {
  const baseClasses = "text-white/70 hover:text-white transition-all duration-200 uppercase text-sm tracking-wide font-medium hover:bg-white/5 rounded-lg";
  const mobileClasses = "block px-6 py-3";
  const desktopClasses = "px-4 py-2";

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      {label}
    </Link>
  );
}