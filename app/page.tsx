import { MdEco } from 'react-icons/md';
import { FiStar, FiActivity, FiHeart } from 'react-icons/fi';
import { FaChild, FaBriefcase, FaCoffee, FaLeaf, FaBolt, FaSeedling } from 'react-icons/fa';
import { GiSaltShaker, GiChiliPepper, GiCheeseWedge } from 'react-icons/gi';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-bg-blobs">
          <div className="blob-yellow"></div>
          <div className="blob-pink"></div>
          <div className="blob-green"></div>
        </div>
        
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem', display: 'flex' }}><MdEco /></span> 100% NATURAL & ROASTED
            </div>
            <h1>The <span style={{color: 'var(--brand-solid)'}}>Smart Snack</span> <br/> For Every Generation</h1>
            <p>Crunchy, nutritious, and absolutely guilt-free. Discover the magic of premium roasted fox nuts made with love by Uncle Makhana.</p>
            <div className="hero-buttons">
              <a href="#order" className="btn btn-primary btn-lg">Shop Now</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card-img">
              <div className="hero-badge-protein">
                <span style={{ color: 'var(--brand-solid)', display: 'flex' }}><FaBolt /></span> High Protein
              </div>
              <div className="hero-badge-baked">
                <span style={{ color: 'var(--accent-green)', display: 'flex' }}><FaSeedling /></span> 100% Baked
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bento Grid Features */}
      <section id="why-us">
        <div className="section-header">
          <h2>Why Uncle Makhana?</h2>
          <p>We believe snacking shouldn&apos;t compromise your health. Here&apos;s why our makhana stands out.</p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-item large">
            <div className="bento-icon" style={{ color: 'var(--brand-solid)' }}><FiStar /></div>
            <h3>100% Baked & Roasted</h3>
            <p>We never fry. Our makhanas are gently roasted to achieve that perfect crunch without the greasy aftermath, preserving all their natural goodness.</p>
          </div>
          
          <div className="bento-item tall">
            <div className="bento-icon" style={{ color: 'var(--accent-blue)' }}><FiActivity /></div>
            <h3>Protein & Fiber Rich</h3>
            <p>An incredible source of dietary fiber and plant-based protein. It&apos;s the perfect mid-day fuel that keeps you full and energized for hours on end. Say goodbye to empty calories.</p>
          </div>
          
          <div className="bento-item">
            <div className="bento-icon" style={{ color: 'var(--accent-green)' }}><FaLeaf /></div>
            <h3>All Natural Spices</h3>
            <p>No artificial flavors, zero preservatives, and no hidden ingredients. Just pure spices.</p>
          </div>
          
          <div className="bento-item">
            <div className="bento-icon" style={{ color: 'var(--accent-pink)' }}><FiHeart /></div>
            <h3>Gluten-Free & Vegan</h3>
            <p>Naturally gluten-free and perfectly suited for vegan diets. Snacking made accessible.</p>
          </div>
        </div>
      </section>

      {/* Nutritional Facts */}
      <section id="nutrition" className="nutrition-section">
        <div className="nutrition-container">
          <div className="nutrition-header">
            <h2>Why Makhana</h2>
            <p className="nutrition-subtitle">Nutritional Fact</p>
          </div>
          <div className="nutrition-table">
            <div className="nutrition-row main-row">
              <span>Energy</span>
              <span>514 Kcal</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Proteins</span>
              <span>7.12g</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Total Fat</span>
              <span>28.69g</span>
            </div>
            <div className="nutrition-row sub-row">
              <span>Saturated Fat</span>
              <span>6.36g</span>
            </div>
            <div className="nutrition-row sub-row">
              <span>Trans Fat</span>
              <span>0.00g</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Cholesterol</span>
              <span>0mg</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Total Carbohydrates</span>
              <span>7.12g</span>
            </div>
            <div className="nutrition-row sub-row">
              <span>Dietary Fiber</span>
              <span>14.5g</span>
            </div>
            <div className="nutrition-row sub-row">
              <span>Sugar</span>
              <span>0.5g</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Sodium</span>
              <span>28.69g</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Calcium</span>
              <span>7.12g</span>
            </div>
            <div className="nutrition-row main-row">
              <span>Iron</span>
              <span>28.69g</span>
            </div>
          </div>
          <p className="nutrition-footer">*Approximate Per 100gm</p>
        </div>
      </section>

      {/* For Everyone Strip */}
      <div id="everyone" style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div className="everyone-strip">
          <div className="everyone-card">
            <div className="everyone-emoji" style={{ color: 'var(--brand-solid)' }}><FaChild /></div>
            <h3>For Kids</h3>
            <p>A fun, crunchy alternative to ordinary chips. Complete peace of mind for parents.</p>
          </div>
          <div className="everyone-card">
            <div className="everyone-emoji" style={{ color: 'var(--accent-blue)' }}><FaBriefcase /></div>
            <h3>For Adults</h3>
            <p>The ultimate smart office snack. Keep it at your desk for mid-day cravings.</p>
          </div>
          <div className="everyone-card">
            <div className="everyone-emoji" style={{ color: 'var(--text-muted)' }}><FaCoffee /></div>
            <h3>For Elderly</h3>
            <p>Gentle on the stomach and very easy to digest, with immense health benefits.</p>
          </div>
        </div>
      </div>

      {/* Flavors 3D Carousel */}
      <section id="products" className="flavors-wrapper" style={{ padding: '120px 0', maxWidth: 'none' }}>
        <div className="section-header">
          <h2>Discover Our Products</h2>
          <p>Seven distinct profiles carefully crafted to satisfy every craving.</p>
        </div>
        
        <div className="flavors-track">

          
          <div className="flavor-card-3d flavor-classic">
            <div className="flavor-pack"><img src="/product-img/classic_salted_makhana.png" alt="Classic Salted" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Classic Salted</h3>
            <p>Simple, elegant, and perfectly seasoned with Himalayan pink salt.</p>
          </div>
          
          <div className="flavor-card-3d flavor-peri">
            <div className="flavor-pack"><img src="/product-img/peri_peri_makhana.png" alt="Peri Peri" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Peri Peri</h3>
            <p>A fiery kick of African spices that&apos;s spicy, tangy, and totally irresistible.</p>
          </div>
          
          <div className="flavor-card-3d flavor-cheese">
            <div className="flavor-pack"><img src="/product-img/cheese_delight_makhana.png" alt="Cheese Delight" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Cheese Delight</h3>
            <p>Rich, creamy cheesy goodness in every single bite. A definite crowd favorite.</p>
          </div>
          
          <div className="flavor-card-3d flavor-mint">
            <div className="flavor-pack"><img src="/product-img/mint_masala_makhana.png" alt="Mint Masala" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Mint Masala</h3>
            <p>Refreshing, zesty mint mixed with traditional Indian spices to perfection.</p>
          </div>
          <div className="flavor-card-3d flavor-cream-onion">
            <div className="flavor-pack"><img src="/product-img/cream_onion.png" alt="Cream & Onion" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Cream & Onion</h3>
            <p>A classic, creamy delight balanced with the sharp, savory bite of fresh spring onions.</p>
          </div>
          
          <div className="flavor-card-3d flavor-spanish-tomato">
            <div className="flavor-pack"><img src="/product-img/spanish_tomato.png" alt="Spanish Tomato" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Spanish Tomato</h3>
            <p>A tantalizingly tangy and sweet tomato rush inspired by traditional Spanish tapas.</p>
          </div>
          
          <div className="flavor-card-3d flavor-tandoori">
            <div className="flavor-pack"><img src="/product-img/tandoori-makhana.png" alt="Tandoori" style={{ width: '105%', height: '105%', objectFit: 'contain', zIndex: 10 }} /></div>
            <h3>Tandoori Magic</h3>
            <p>Smoked to perfection with authentic tandoori spices for a bold, roadside dhaba flavor.</p>
          </div>
          

        </div>
      </section>

      {/* Available On Section */}
      <section className="available-on">
        <div className="available-container">
          <p className="available-text">Available Online On</p>
          <div className="brand-logos">
            <div className="brand-logo amazon">amazon</div>
            <div className="brand-logo flipkart">Flipkart</div>
            <div className="brand-logo swiggy">swiggy</div>
            <div className="brand-logo zomato">zomato</div>
            <div className="brand-logo blinkit">blinkit</div>
            <div className="brand-logo meesho">meesho</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="section-header">
          <h2>Snackers Love Us</h2>
          <p>Don&apos;t just take our word for it. Here&apos;s what our community says.</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">&quot;Honestly the best healthy snack I&apos;ve tried! The Peri Peri flavor is out of this world and genuinely keeps me full.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/avatars/anjali.png" alt="Anjali Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="author-info">
                <h4>Anjali Sharma</h4>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">&quot;My kids are obsessed with the Cheese Delight, and I absolutely love that it&apos;s actually good for them! A lifesaver.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/avatars/rahul.png" alt="Rahul Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="author-info">
                <h4>Rahul Patel</h4>
                <p>Parent of Two</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">&quot;The perfect companion for my evening chai. It&apos;s incredibly light and has an absolutely satisfying crunch every time.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/avatars/meena.png" alt="Meena Kapoor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="author-info">
                <h4>Meena Kapoor</h4>
                <p>Loyal Fan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
