import Link from 'next/link';
import { FiClock, FiUser, FiChevronLeft } from 'react-icons/fi';

export const metadata = {
  title: 'Blogs - Uncle Makhana',
  description: 'Read the latest news and insights about health, snacking, and the amazing benefits of Makhana.',
};

const blogs = [
  {
    id: 'health-benefits-makhana',
    title: 'The Health Benefits of Makhana: A Superfood in Disguise',
    excerpt: 'Discover why these little fox nuts are taking the wellness world by storm. From high protein to rich antioxidants...',
    date: 'February 28, 2026',
    author: 'Admin',
    image: '/blog-img/blog_health.png',
    color: 'var(--accent-green)',
  },
  {
    id: 'roasted-vs-fried-snacks',
    title: 'Why Roasted Makhana is Better Than Traditional Fried Snacks',
    excerpt: 'A deep dive into the nutritional differences between baked, roasted, and fried snacks. Spoiler alert: roasted wins every time.',
    date: 'February 22, 2026',
    author: 'Nutritionist Jane',
    image: '/blog-img/blog_roasted_fried.png',
    color: 'var(--brand-solid)',
  },
  {
    id: '5-delicious-makhana-recipes',
    title: '5 Creative Ways to Incorporate Makhana into Your Diet',
    excerpt: 'Tired of eating it straight out of the bag (though it is delicious)? Here are five unique ways to use Makhana in your meals.',
    date: 'February 15, 2026',
    author: 'Chef Rahul',
    image: '/blog-img/blog_recipes.png',
    color: 'var(--accent-yellow)',
  },
  {
    id: 'journey-of-makhana',
    title: 'The Journey of Makhana: From the Pond to Your Pantry',
    excerpt: 'Have you ever wondered how makhana is harvested and processed? Learn about the fascinating journey of this ancient snack.',
    date: 'February 05, 2026',
    author: 'Farmer Singh',
    image: '/blog-img/blog_journey.png',
    color: 'var(--accent-blue)',
  },
  {
    id: 'makhana-for-kids',
    title: 'Why Makhana is the Perfect Lunchbox Snack for Kids',
    excerpt: 'Struggling to find snacks that are both healthy and loved by kids? Flavored makhana might be the game-changer you need this school year.',
    date: 'January 28, 2026',
    author: 'Admin',
    image: '/blog-img/blog_kids.png',
    color: 'var(--accent-pink)',
  },
  {
    id: 'history-of-makhana',
    title: 'An Ancient Superfood: The Fascinating History of Makhana',
    excerpt: 'Long before it was a modern trendy snack, Makhana was considered the "food of the gods". Uncover the rich heritage of this sacred seed.',
    date: 'January 14, 2026',
    author: 'Historian Gupta',
    image: '/blog-img/blog_history.png',
    color: 'var(--text-muted)',
  },
];

export default function BlogsPage() {
  return (
    <main className="page-wrapper pb-24">
      {/* Blog Page Header */}
      <section className="page-header relative overflow-hidden pt-40 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm font-bold mb-6 tracking-wide uppercase text-sm" style={{ color: 'var(--accent-blue)' }}>
            Insights &amp; News
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Our <span style={{ color: 'var(--brand-solid)' }}>Journal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore health tips, nutritional deep-dives, and exciting stories from the world of Makhana and smart snacking.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card group">
              <Link href={`/blogs/${blog.id}`} className="blog-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Link>
              
              <div className="blog-content">
                <div className="blog-meta flex gap-4 text-sm mb-3 font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  <span className="flex items-center gap-1"><FiClock /> {blog.date}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1"><FiUser /> {blog.author}</span>
                </div>
                
                <Link href={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="blog-title" style={{ transition: 'color 0.3s', '--hover-color': blog.color } as React.CSSProperties}>
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="blog-excerpt leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {blog.excerpt}
                </p>
                
                <Link href={`/blogs/${blog.id}`} className="blog-read-more" style={{ color: blog.color }}>
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
