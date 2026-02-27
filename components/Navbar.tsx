"use client";

import { useState } from 'react';
import Link from 'next/link';
import { GiFruitBowl } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-pill">
        <Link href="/" className="nav-brand">
          <span className="brand-emoji" style={{ color: 'var(--brand-solid)' }}><GiFruitBowl /></span>
          <span>Uncle Makhana</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/why-us">Why Us</Link>
          <Link href="/#products">Products</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
        
        <a href="#order" className="btn btn-primary btn-sm desktop-cta">Get Yours</a>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-nav-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        <Link href="/why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
        <Link href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
        <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
        <a href="/#order" className="btn btn-primary btn-sm mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Get Yours</a>
      </div>
    </div>
  );
}
