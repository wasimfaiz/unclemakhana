import Link from 'next/link';
import { GiFruitBowl } from 'react-icons/gi';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-modern" style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative gradient blur */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '75%', height: '128px', opacity: 0.1, filter: 'blur(120px)', pointerEvents: 'none', backgroundColor: 'var(--brand-solid)' }}></div>
      
      <div className="footer-content" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Newsletter / CTA Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', padding: '40px', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '16px', color: 'white' }}>
              Join the <span style={{ color: 'var(--brand-solid)' }}>Uncle Makhana</span> Family
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Subscribe to get exclusive access to new flavor drops, early access sales, and healthy snacking tips delivered straight to your inbox.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{ padding: '16px 24px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', minWidth: '300px', flex: '1 1 auto', maxWidth: '400px', outlineColor: 'var(--brand-solid)' }}
            />
            <button className="btn btn-primary" style={{ padding: '16px 32px' }}>
              Subscribe <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Main Footer Links Grid using Global CSS */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="footer-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '1.75rem', fontWeight: 900, marginBottom: '24px', textDecoration: 'none', color: 'white' }}>
              <span style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: 'var(--brand-solid)' }}>
                <GiFruitBowl />
              </span>
              <span>Uncle Makhana</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '32px', paddingRight: '16px' }}>
              Premium, hand-harvested fox nuts roasted to perfection. We are redefining the standard for healthy, delicious, and guilt-free snacking across the globe.
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '1.25rem' }}>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', textDecoration: 'none' }}><FaInstagram /></a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', textDecoration: 'none' }}><FaFacebookF /></a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', textDecoration: 'none' }}><FaTwitter /></a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', textDecoration: 'none' }}><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: 'white', fontWeight: 800 }}>Explore</h4>
            <ul>
              <li><Link href="/products">Shop All</Link></li>
              <li><Link href="/about-us">Our Story</Link></li>
              <li><Link href="/blogs">Journal</Link></li>
              <li><Link href="/why-us">Why Makhana?</Link></li>
            </ul>
          </div>

          {/* Flavors */}
          <div className="footer-col">
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: 'white', fontWeight: 800 }}>Flavors</h4>
            <ul>
              <li><Link href="/products">Classic Salted</Link></li>
              <li><Link href="/products">Peri Peri</Link></li>
              <li><Link href="/products">Cheese Delight</Link></li>
              <li><Link href="/products">Cream & Onion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: 'white', fontWeight: 800 }}>Contact</h4>
            <ul style={{ color: 'rgba(255,255,255,0.6)' }}>
              <li style={{ marginBottom: '16px' }}>Email us at:<br/><a href="mailto:hello@unclemakhana.com" style={{ color: 'white', marginTop: '8px', display: 'inline-block' }}>hello@unclemakhana.com</a></li>
              <li>Call us:<br/><a href="tel:+919876543210" style={{ color: 'white', marginTop: '8px', display: 'inline-block' }}>+91 98765 43210</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Uncle Makhana. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Shipping Info</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
