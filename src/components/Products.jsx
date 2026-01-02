import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Corrugated Boxes',
      description: 'High-strength industrial boxes designed for maximum protection during transit.',
      icon: '📦'
    },
    {
      id: 2,
      title: 'Custom Packaging',
      description: 'Tailor-made solutions with specific dimensions and branding for your unique products.',
      icon: '✨'
    },
    {
      id: 3,
      title: 'End-to-End Manufacturing',
      description: 'Complete production from raw material sourcing to finished box delivery.',
      icon: '🏭'
    }
  ];

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products & Services</h2>
          <p className="section-subtitle">Comprehensive packaging solutions for every industry.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon" role="img" aria-label={`${product.title} icon`}>{product.icon}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          background-color: var(--color-light);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          color: var(--color-gray);
          font-size: 1.1rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background-color: var(--color-white);
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          border-color: var(--color-border);
        }

        .product-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background-color: rgba(42, 111, 125, 0.1); /* Primary color with opacity */
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--color-primary);
        }

        .product-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-dark);
        }

        .product-desc {
          color: var(--color-gray);
        }
      `}</style>
    </section>
  );
};

export default Products;
