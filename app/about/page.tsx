import { FaSeedling, FaSun, FaFire, FaHeart } from 'react-icons/fa';

export const metadata = {
  title: 'Our Story | Uncle Makhana',
  description: 'A story of tradition, patience, and love. Journey with us to the heart of Bihar to see how our premium Makhana is harvested.',
};

export default function AboutUs() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
      {/* Cinematic Hero immersive section */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/story/pond.png" alt="Makhana Ponds in Bihar" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, var(--bg-color) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, color: 'white', maxWidth: '800px', padding: '120px 24px 0' }}>
          <span style={{ 
            display: 'inline-block', 
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
            A Journey to the Roots
          </span>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', marginBottom: '24px', lineHeight: 1.05, fontWeight: 900, textShadow: '0 8px 32px rgba(0,0,0,0.6)' }}>
            The Soul of <br/> <span style={{ color: 'var(--brand-solid)' }}>Makhana.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, textShadow: '0 4px 16px rgba(0,0,0,0.8)', color: 'rgba(255, 255, 255, 0.95)', maxWidth: '700px', margin: '0 auto' }}>
            Before it becomes the perfect crunch in your hands, every single foxnut undergoes a miraculous journey. A story woven with tradition, generational patience, and the tranquil waters of India.
          </p>
        </div>
      </div>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px' }}>
        {/* Story Part 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '160px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>Born in the <br/><span style={{ color: 'var(--accent-green)' }}>Still Waters.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              Deep in the Mithila region of Bihar, the air is thick with history. Here, beneath the shimmering surface of marshy ponds, the Euryale ferox plant stretches its sprawling, thorny leaves to catch the morning sun. 
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              This is where the magic begins. The ecosystem remains completely undisturbed, acting as a natural sanctuary for the seeds to slowly mature, absorbing the profound purity of the earth and water.
            </p>
          </div>
        </div>

        {/* Story Part 2 : Image Left, Text Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '160px' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/story/harvest.png" alt="Farmer holding Makhana seeds" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>A Labor of <br/><span style={{ color: 'var(--accent-yellow)' }}>Deep Love.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              Harvesting Makhana cannot be automated. It is a grueling, deeply intimate ritual that can only be performed by the weathered, skilled hands of generational farmers.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              They dive into the cool waters at dawn, carefully sweeping the muddy pond floors to gather the heavy, black pearls that have naturally fallen. It is an act of profound devotion and patience that no machine could ever replicate.
            </p>
          </div>
        </div>

        {/* Story Part 3 : Text Left, Image Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '80px', direction: 'rtl' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/story/roasting.png" alt="Roasting Makhana over fire" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ direction: 'ltr' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>The Alchemy of <br/><span style={{ color: 'var(--brand-solid)' }}>Fire & Rhythm.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              The black seeds are cleaned and dried under the vibrant Indian sun until they are ready for the metamorphosis. Within heavy earthen vessels over a roaring, crackling wood fire, the true magic happens.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Using an ancient technique of timing and rhythm, the farmer strikes the tough shell at the exact perfect temperature. With a sharp snap, the hard casing explodes, releasing a pristine, fluffy white puff. It is alchemy at its finest.
            </p>
          </div>
        </div>

      {/* Story Part 4 : Image Left, Text Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '160px' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/story/grading.png" alt="Grading and sorting Makhana" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>The <br/><span style={{ color: 'var(--accent-blue)' }}>Meticulous Grade.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              Not all fox nuts are created equal. Once popped, the fluffy white seeds are meticulously sorted and graded entirely by hand.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Only the largest, most structurally sound, and perfectly spherical makhanas are chosen to bear the Uncle Makhana name. This rigorous selection process ensures an uncompromising, ultra-premium crunch in absolutely every single bite.
            </p>
          </div>
        </div>

        {/* Story Part 5 : Text Left, Image Right */}
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '80px', direction: 'rtl' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/story/flavoring.png" alt="Flavoring Makhana with spices" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ direction: 'ltr' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>A Symphony of <br/><span style={{ color: 'var(--brand-solid)' }}>Global Flavors.</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '24px' }}>
              The journey concludes with our signature roasting process. We strictly dry-roast our graded makhanas, completely avoiding heavy fry oils.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              They are then gently tumbled in our bespoke, all-natural spice blends. From the traditional heat of Peri Peri to the soothing coolness of Cream & Onion, the makhana acts as a perfect, highly-absorbent canvas for explosive flavor.
            </p>
          </div>
        </div>

      </section>
      {/* Footer CTA */}
      <section style={{ background: 'var(--surface)', padding: '120px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>From our roots, <br/>to your hands.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '48px' }}>
            Uncle Makhana guarantees that every handful you eat has been ethically sourced, gently slow-baked, and tossed in all-natural ingredients. 
          </p>
          <a href="/#products" className="btn btn-primary btn-lg">Taste the Tradition</a>
        </div>
      </section>

    </main>
  );
}
