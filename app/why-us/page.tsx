import { FiActivity } from 'react-icons/fi';
import { FaLeaf, FaFireAlt, FaHeartbeat } from 'react-icons/fa';

export const metadata = {
  title: 'Why Us | Uncle Makhana',
  description: 'Snacking reimagined. Discover why Uncle Makhana stands out as a pure, health-driven choice.',
};

export default function WhyUs() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
      {/* Cinematic Hero immersive section */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/health/yoga.png" alt="Finding peace and health with sunrise yoga" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, var(--bg-color) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, color: 'white', maxWidth: '800px', padding: '120px 24px 0' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.15)', 
            backdropFilter: 'blur(12px)',
            color: 'white', 
            padding: '8px 24px', 
            borderRadius: '999px',
            fontWeight: 800,
            marginBottom: '32px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            <FaHeartbeat /> Our Philosophy
          </span>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', marginBottom: '24px', lineHeight: 1.05, fontWeight: 900, textShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
            Snacking, <br/> <span style={{ color: 'var(--accent-yellow)' }}>Reimagined.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, textShadow: '0 4px 16px rgba(0,0,0,0.8)', color: 'rgba(255, 255, 255, 0.95)', maxWidth: '700px', margin: '0 auto' }}>
            We believe you shouldn&apos;t have to choose between delicious flavor and treating your body right. We exist to build a bridge between irresistible crunch and absolute holistic wellness.
          </p>
        </div>
      </div>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px' }}>
        
        {/* Intro */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '160px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>More Than a <br/><span style={{ color: 'var(--brand-solid)' }}>Quick Craving.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              The modern snacking industry is broken. It is flooded with deep-fried fillers, hidden sodium, and empty calories that crash your energy and compromise your health. 
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Uncle Makhana was born to disrupt that cycle. By taking an ancient superfood and elevating it with mindful culinary practices, we provide fuel that actively respects your body&apos;s natural rhythm.
            </p>
          </div>
        </div>

        {/* Story Part 2 : Image Left, Text Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '160px' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health/running.png" alt="Person running through forest" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--pastel-blue), #BBDEFB)', color: 'var(--accent-blue)', width: '80px', height: '80px', fontSize: '2rem', marginBottom: '32px' }}>
              <FiActivity />
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>Sustained, <br/><span style={{ color: 'var(--accent-blue)' }}>Clean Energy.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              Whether you are powering through a grueling afternoon meeting or recovering from an intense forest run, your body demands high-quality input. 
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Because we exclusively slow-bake our foxnuts—never deep frying them in cheap oils—you digest pure, concentrated plant-based protein and rich dietary fiber. The result? A perfectly smooth, sustained release of energy without the lethargic crash.
            </p>
          </div>
        </div>

        {/* Story Part 3 : Text Left, Image Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '80px', direction: 'rtl' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health/spices.png" alt="Raw natural immunity spices" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ direction: 'ltr' }}>
            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--pastel-yellow), #FFF3E0)', color: 'var(--accent-yellow)', width: '80px', height: '80px', fontSize: '2rem', marginBottom: '32px' }}>
              <FaLeaf />
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>The Earth&apos;s <br/><span style={{ color: 'var(--brand-solid)' }}>Truest Flavors.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              We absolutely refuse to use laboratory-made flavorings, hidden sugars, or chemical preservatives. Your wellness dictates everything we do in our kitchens.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              From immunity-boosting turmeric to digestion-aiding mint, we strictly rely on pure, raw spices sourced directly from the earth. When you taste Uncle Makhana, you are tasting the uncompromising purity of nature itself. 
            </p>
          </div>
        </div>

      </section>

      {/* Footer CTA */}
      <section style={{ background: 'var(--surface)', padding: '120px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--pastel-orange), var(--pastel-pink))', color: 'var(--brand-solid)', width: '100px', height: '100px', fontSize: '2.5rem', margin: '0 auto 32px' }}>
             <FaFireAlt />
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>Ready to make <br/>the switch?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '48px' }}>
            Transform your pantry. Fuel your body with the smart, guilt-free snack designed for every generation.
          </p>
          <a href="/#products" className="btn btn-primary btn-lg">Explore Our Products</a>
        </div>
      </section>

    </main>
  );
}
