import Link from 'next/link';
import { GiFruitBowl } from 'react-icons/gi';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <div className="footer-cta" id="order">
          <h2>Ready for Guilt-Free Snacking?</h2>
          <a href="#" className="btn btn-primary btn-lg">Order Uncle Makhana Now</a>
        </div>
        
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <span style={{ color: 'var(--brand-solid)' }}><GiFruitBowl /></span>
              <span>Uncle Makhana</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', lineHeight: 1.8 }}>
              Crunchy. Nutritious. Guilt-Free. Bringing healthy snacking to every generation with our premium roasted makhana.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/why-us">Why Us</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link href="#">Classic Salted</Link></li>
              <li><Link href="#">Peri Peri</Link></li>
              <li><Link href="#">Cheese Delight</Link></li>
              <li><Link href="#">Mint Masala</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@unclemakhana.com">hello@unclemakhana.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li style={{ marginTop: '16px', display: 'flex', gap: '16px', fontSize: '1.5rem' }}>
                <a href="#" title="Instagram"><FaInstagram /></a>
                <a href="#" title="Facebook"><FaFacebookF /></a>
                <a href="#" title="Twitter"><FaTwitter /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Uncle Makhana. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
