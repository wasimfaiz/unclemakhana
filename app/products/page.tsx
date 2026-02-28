import { FiShoppingCart, FiTag } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

export const metadata = {
  title: 'Our Products - Uncle Makhana',
  description: 'Explore the delicious and healthy natural roasted fox nut flavors by Uncle Makhana.',
};

const products = [
  {
    id: 'classic-salted',
    name: 'Classic Salted',
    desc: 'Simple, elegant, and perfectly seasoned with Himalayan pink salt.',
    price: '₹149',
    weight: '100g',
    img: '/product-img/classic_salted_makhana.png',
    badge: 'Best Seller',
    gradient: 'linear-gradient(135deg, var(--pastel-blue), #bbdefb)',
    themeColor: '#42a5f5',
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri',
    desc: 'A fiery kick of African spices that\'s spicy, tangy, and totally irresistible.',
    price: '₹159',
    weight: '100g',
    img: '/product-img/peri_peri_makhana.png',
    badge: 'Spicy',
    gradient: 'linear-gradient(135deg, var(--pastel-orange), #ffcc80)',
    themeColor: '#ff5a26',
  },
  {
    id: 'cheese-delight',
    name: 'Cheese Delight',
    desc: 'Rich, creamy cheesy goodness in every single bite. A definite crowd favorite.',
    price: '₹159',
    weight: '100g',
    img: '/product-img/cheese_delight_makhana.png',
    badge: 'Kids Love It',
    gradient: 'linear-gradient(135deg, var(--pastel-yellow), #ffe082)',
    themeColor: '#fbc02d',
  },
  {
    id: 'mint-masala',
    name: 'Mint Masala',
    desc: 'Refreshing, zesty mint mixed with traditional Indian spices to perfection.',
    price: '₹149',
    weight: '100g',
    img: '/product-img/mint_masala_makhana.png',
    badge: 'Refreshing',
    gradient: 'linear-gradient(135deg, var(--pastel-green), #a5d6a7)',
    themeColor: '#66bb6a',
  },
  {
    id: 'cream-onion',
    name: 'Cream & Onion',
    desc: 'A classic, creamy delight balanced with the sharp, savory bite of fresh spring onions.',
    price: '₹159',
    weight: '100g',
    img: '/product-img/cream_onion.png',
    badge: 'Classic',
    gradient: 'linear-gradient(135deg, #f1f8e9, #dcedc8)',
    themeColor: '#8bc34a',
  },
  {
    id: 'spanish-tomato',
    name: 'Spanish Tomato',
    desc: 'A tantalizingly tangy and sweet tomato rush inspired by traditional Spanish tapas.',
    price: '₹159',
    weight: '100g',
    img: '/product-img/spanish_tomato.png',
    badge: 'Tangy',
    gradient: 'linear-gradient(135deg, #ffebee, #ffcdd2)',
    themeColor: '#e53935',
  },
  {
    id: 'tandoori',
    name: 'Tandoori Magic',
    desc: 'Smoked to perfection with authentic tandoori spices for a bold, roadside dhaba flavor.',
    price: '₹159',
    weight: '100g',
    img: '/product-img/tandoori-makhana.png',
    badge: 'Desi',
    gradient: 'linear-gradient(135deg, #fbe9e7, #ffccbc)',
    themeColor: '#f4511e',
  }
];

export default function ProductsPage() {
  return (
    <main className="page-wrapper pb-24">
      {/* Product Page Header */}
      <section className="page-header relative overflow-hidden pt-40 pb-20 w-full flex flex-col items-center justify-center" style={{ paddingTop: '160px' }}>
        <div className="absolute inset-0 z-[-1] opacity-20 bg-blob-pattern mix-blend-multiply" />
        <div style={{ margin: '0 auto', textAlign: 'center', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="px-6 relative z-10">
          <div className="inline-flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-orange-100 text-orange-500 font-bold mb-6 tracking-wide uppercase text-sm">
            <FaLeaf /> 100% Natural Flavors
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Taste The <span style={{ color: 'var(--brand-solid)' }}>Crunch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Seven premium, signature flavors. Roasted to absolute perfection. 
            Pick your favorite guilt-free snack today.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-showcase-card group">
              
              {/* Image Container with Dynamic Gradient */}
              <div 
                className="product-image-wrap" 
                style={{ background: product.gradient }}
              >
                {product.badge && (
                  <div className="product-badge" style={{ color: product.themeColor }}>
                    <FiTag className="mr-1" /> {product.badge}
                  </div>
                )}
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="product-img-element"
                />
              </div>

              {/* Product Info */}
              <div className="product-details">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="product-title" style={{ transition: 'color 0.3s', '--hover-color': product.themeColor } as any}>
                    {product.name}
                  </h3>
                  <span className="product-price font-bold text-xl" style={{ color: product.themeColor }}>
                    {product.price}
                  </span>
                </div>
                
                <p className="product-volume text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
                  Weight: {product.weight}
                </p>
                <p className="product-desc text-gray-600 leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Actions */}
                <div className="product-actions flex gap-3 mt-auto">
                  <button className="flex-1 btn-premium border-btn">
                     More Info
                  </button>
                  <button 
                    className="flex-1 btn-premium solid-btn" 
                    style={{ background: product.themeColor, borderColor: product.themeColor }}
                  >
                    <FiShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
