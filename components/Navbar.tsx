'use client';

import Link from 'next/link';
import { ApptahualpaLogo } from './Logo';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#3F2E1E]/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <ApptahualpaLogo />
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm tracking-[0.02em]">
          <Link href="#mission" className="hover:text-[#C45C3B] transition-colors">Mission</Link>
          <Link href="#regions" className="hover:text-[#C45C3B] transition-colors">Regions</Link>
          <Link href="#apps" className="hover:text-[#C45C3B] transition-colors">Apps &amp; Games</Link>
          <Link href="#about" className="hover:text-[#C45C3B] transition-colors">About</Link>
        </div>

        <Link 
          href="#contact" 
          className="px-5 py-2 text-sm rounded-full bg-[#3F2E1E] text-[#F9F6F0] hover:bg-[#C45C3B] transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
