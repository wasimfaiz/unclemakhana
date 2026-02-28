import Link from 'next/link';
import { FiClock, FiUser, FiChevronLeft } from 'react-icons/fi';

const blogContent: Record<string, any> = {
  'health-benefits-makhana': {
    title: 'The Health Benefits of Makhana: A Superfood in Disguise',
    date: 'February 28, 2026',
    author: 'Admin',
    image: '/blog-img/blog_health.png',
    color: 'var(--accent-green)',
    content: (
      <>
        <p>Fox nuts, also known as Makhana, are derived from lotus seeds and have been used in traditional medicine for centuries. Today, they are making a massive comeback as a mainstream superfood.</p>
        <h2>Low in Calories, High in Nutrients</h2>
        <p>Unlike regular fried snacks, roasted Makhana provides a satisfying crunch without an excessive caloric load. A typical serving is exceptionally low in saturated fats while packing a significant amount of protein and fiber.</p>
        <h2>Rich in Antioxidants</h2>
        <p>Makhana is loaded with antioxidants, which help neutralize free radicals and reduce oxidative stress. This not only keeps your heart healthy but also helps maintain healthy, glowing skin.</p>
        <h2>Diabetic Friendly</h2>
        <p>Because of its low glycemic index, it releases glucose slowly into the bloodstream, making it a perfectly safe and highly recommended snack for people managing their blood sugar levels.</p>
      </>
    )
  },
  'roasted-vs-fried-snacks': {
    title: 'Why Roasted Makhana is Better Than Traditional Fried Snacks',
    date: 'February 22, 2026',
    author: 'Nutritionist Jane',
    image: '/blog-img/blog_roasted_fried.png',
    color: 'var(--brand-solid)',
    content: (
      <>
        <p>When the 4 PM craving hits, it is all too easy to reach for a bag of potato chips. But what if there was an alternative that satisfied your urge for something salty and crunchy without the guilt?</p>
        <h2>The Danger of Deep-Frying</h2>
        <p>Most commercial snacks are deep-fried in refined oils at extremely high temperatures. This process strips away whatever nutritional value the base ingredient had and adds unhealthy trans fats.</p>
        <h2>The Roasting Advantage</h2>
        <p>At Uncle Makhana, we exclusively dry-roast our ingredients. Roasting helps retain the intrinsic nutritional value of the fox nuts. We then lightly coat them in minimal surface-level oil just enough for our natural spices to stick, dramatically reducing overall oil consumption while maximizing flavor.</p>
        <p>Next time you're craving a bag of chips, consider switching to a bag of Uncle Makhana's Peri Peri or Classic Salted for a purely positive snacking experience.</p>
      </>
    )
  },
  '5-delicious-makhana-recipes': {
    title: '5 Creative Ways to Incorporate Makhana into Your Diet',
    date: 'February 15, 2026',
    author: 'Chef Rahul',
    image: '/blog-img/blog_recipes.png',
    color: 'var(--accent-yellow)',
    content: (
      <>
        <p>While eating seasoned makhana straight from the packet is a joy in itself, these versatile little spheres can be used in numerous culinary ways.</p>
        <h3>1. Makhana Trail Mix</h3>
        <p>Combine plain roasted makhana with almonds, walnuts, pumpkin seeds, and a handful of dark chocolate chips for an energy-boosting mid-day mix.</p>
        <h3>2. Makhana Smoothie Bowl Topping</h3>
        <p>Instead of granola, crush some Classic Salted makhana over your morning açai or green smoothie bowl for a savory, low-carb crunch.</p>
        <h3>3. Spicy Makhana Bhel</h3>
        <p>Toss roasted makhana with chopped onions, tomatoes, green chilies, a squeeze of lime, and tamarind chutney. It's a healthy twist on classic Indian street food.</p>
        <h3>4. Creamy Makhana Kheer</h3>
        <p>Crush the makhana and slow-cook it in milk with saffron, cardamom, and a natural sweetener. It yields a rich, traditional pudding with fewer calories than rice kheer.</p>
        <h3>5. Salads and Soups</h3>
        <p>Use seasoned makhana as a crouton replacement. They add a brilliant texture to creamy tomato soups or fresh leafy green salads!</p>
      </>
    )
  },
  'journey-of-makhana': {
    title: 'The Journey of Makhana: From the Pond to Your Pantry',
    date: 'February 05, 2026',
    author: 'Farmer Singh',
    image: '/blog-img/blog_journey.png',
    color: 'var(--accent-blue)',
    content: (
      <>
        <p>The journey of a single makhana is a testament to the dedication of local farmers and age-old agricultural traditions.</p>
        <h2>Cultivated in the Wetlands</h2>
        <p>Makhana grows primarily in the stagnant wetlands and ponds of northern India. The plant, essentially a prickly water lily, produces pods beneath the water surface. Gathering these pods is incredibly labor-intensive and requires skilled farmers to dive into the ponds to manually collect them.</p>
        <h2>The Complex Process</h2>
        <p>Once gathered, the seeds undergo a rigorous process of sun-drying, grading, and roasting. They are then individually popped at high temperatures. The hard black shell cracks open, revealing the fluffy white kernel we all know and love.</p>
        <p>By consuming makhana, you are not just making a healthy choice for yourself, but you are also supporting rural agricultural communities that rely on this sustainable, eco-friendly crop.</p>
      </>
    )
  },
  'makhana-for-kids': {
    title: 'Why Makhana is the Perfect Lunchbox Snack for Kids',
    date: 'January 28, 2026',
    author: 'Admin',
    image: '/blog-img/blog_kids.png',
    color: 'var(--accent-pink)',
    content: (
      <>
        <p>Parents are constantly navigating the difficult line between packing a healthy school lunch and packing a lunch their kids will actually want to eat.</p>
        <h2>Kid-Approved Crunch</h2>
        <p>Children naturally gravitate towards snacks that have a satisfying crunch. Because roasted makhana mimics the texture of popcorn and potato chips, kids love them immediately.</p>
        <h2>Flavors That Win</h2>
        <p>With fun flavors like Cheese Delight and Cream & Onion, it doesn't feel like a "health food" to children. It feels like a treat!</p>
        <h2>Guilt-Free for Parents</h2>
        <p>Unlike greasy potato chips that leave residues and contain empty calories, a box of makhana ensures your child gets high-quality protein and fiber. This means they'll stay energized throughout the school day without a sudden sugar crash.</p>
      </>
    )
  },
  'history-of-makhana': {
    title: 'An Ancient Superfood: The Fascinating History of Makhana',
    date: 'January 14, 2026',
    author: 'Historian Gupta',
    image: '/blog-img/blog_history.png',
    color: 'var(--text-muted)',
    content: (
      <>
        <p>While Western wellness circles are just now discovering the power of the "fox nut," makhana has been a revered staple in Indian culture for millennia.</p>
        <h2>The Food of The Gods</h2>
        <p>In Hindu traditions, makhana is considered exceptionally pure. It is frequently offered to deities during religious festivals like Navratri and is consumed during fasting periods because it provides immense sustained energy.</p>
        <h2>Traditional Ayurvedic Medicine</h2>
        <p>Ancient Ayurvedic texts praise makhana for its astringent properties. It was historically prescribed to help balance the Vata and Pitta doshas, build strength, and promote longevity and vitality.</p>
        <p>Today, enjoying a bowl of Uncle Makhana connects you directly to this ancient, sacred history. What was once isolated to religious ceremonies and ancient healing is now an ultra-healthy modern snack.</p>
      </>
    )
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogContent[id];

  if (!post) {
    return (
      <div className="pt-40 text-center pb-20 page-wrapper">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <Link href="/blogs" className="btn btn-primary btn-sm">Return to Blogs</Link>
      </div>
    );
  }

  return (
    <main className="page-wrapper pb-24">
      {/* Blog Article Header */}
      <section className="relative overflow-hidden pt-40 pb-16" style={{ paddingTop: '160px' }}>
        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 mb-8 uppercase font-bold text-sm hover:underline" style={{ color: post.color }}>
            <FiChevronLeft /> Back to Blogs
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900 text-balance">
            {post.title}
          </h1>
          
          <div className="blog-meta flex gap-4 justify-center text-sm font-medium uppercase tracking-wider mb-8" style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-1"><FiClock /> {post.date}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1"><FiUser /> {post.author}</span>
          </div>
        </div>
        
        {/* Banner Graphic */}
        <div style={{ maxWidth: '900px', margin: '32px auto 0', padding: '0 24px' }}>
          <div style={{ width: '100%', height: '400px', borderRadius: '32px', position: 'relative', overflow: 'hidden', backgroundColor: '#f3f4f6', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, border: `16px solid ${post.color}`, opacity: 0.5, borderRadius: '32px', mixBlendMode: 'overlay' }}></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-6 max-w-3xl">
        <article className="blog-article-content">
          {post.content}
        </article>
      </section>
    </main>
  );
}
