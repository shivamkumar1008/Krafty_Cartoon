import React from 'react';
import SEO from '../components/SEO';

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            title: 'Shipping & Transport Boxes',
            description: 'Durable corrugated boxes designed to withstand the rigors of shipping and handling. Perfect for logistics and supply chain.',
            image: '/images/shipping_box.jpg'
        },
        {
            id: 2,
            title: 'Custom Die-Cut Boxes',
            description: 'Precision-cut boxes tailored to your specific product dimensions and branding requirements. Ideal for retail display.',
            image: '/images/die_cut_box.jpg'
        },
        {
            id: 3,
            title: 'Corrugated Boards & Sheets',
            description: 'High-quality corrugated sheets available in various flutes and grades for versatile packaging applications.',
            image: '/images/corrugated_sheets_stack.jpg'
        },
        {
            id: 4,
            title: 'Triple/Double/Single Wall Boxes',
            description: 'Range of wall strengths from lightweight single wall to heavy-duty triple wall for maximum protection.',
            image: '/images/heavy_duty_box.jpg'
        },
        {
            id: 5,
            title: 'Rigid & Specialty Boxes',
            description: 'Premium rigid boxes for luxury items and gifts, offering superior strength and a high-end feel.',
            image: '/images/rigid_gift_box.jpg'
        },
        {
            id: 6,
            title: 'Corrugated Rolls & Sheets',
            description: 'Flexible corrugated rolls for wrapping irregular items and providing cushioning protection.',
            image: '/images/corrugated_rolls.jpg'
        },
        {
            id: 7,
            title: 'Offset Cartons',
            description: 'High-quality printed cartons with offset printing for vibrant graphics and detailed branding.',
            image: '/images/offset_printed_carton.jpg'
        },
        {
            id: 8,
            title: 'Point-of-Purchase (POP) Displays',
            description: 'Eye-catching floor and counter displays designed to boost product visibility and sales in retail environments.',
            image: '/images/pop_display.jpg'
        },
        {
            id: 9,
            title: 'Product Inserts & Dividers',
            description: 'Custom internal dividers to organize products and prevent movement within the box.',
            image: '/images/box_inserts.jpg'
        }
    ];

    return (
        <div className="page-container">
            <SEO
                title="Our Products - Krafty Cartoons"
                description="Explore our wide range of corrugated boxes, die-cut boxes, and packaging solutions."
            />
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Our Products</h1>
                    <p className="page-subtitle">Comprehensive packaging solutions designed for every industry need.</p>
                </header>

                <div className="products-grid-full">
                    {products.map((product) => (
                        <div key={product.id} className="product-card-full">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="product-content">
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-desc">{product.description}</p>
                                <a href="/#contact" className="btn-text">Request Quote →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .page-container {
                    padding-top: 120px;
                    padding-bottom: 80px;
                    background-color: var(--color-light);
                    min-height: 100vh;
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .page-title {
                    font-size: 2.5rem;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }

                .page-subtitle {
                    color: var(--color-gray);
                    font-size: 1.2rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .products-grid-full {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2.5rem;
                }

                .product-card-full {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }

                .product-card-full:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
                }

                .product-image-container {
                    height: 220px;
                    background-color: #f8f8f8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .product-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .product-card-full:hover .product-image {
                    transform: scale(1.05);
                }

                .product-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .product-title {
                    font-size: 1.25rem;
                    margin-bottom: 0.75rem;
                    color: var(--color-dark);
                }

                .product-desc {
                    color: var(--color-gray);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }

                .btn-text {
                    color: var(--color-secondary);
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-block;
                    margin-top: auto;
                }

                .btn-text:hover {
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .page-container {
                        padding-top: 100px;
                    }
                    .products-grid-full {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductsPage;
