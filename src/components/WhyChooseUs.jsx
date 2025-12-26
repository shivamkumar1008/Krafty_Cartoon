import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Quality Materials',
            text: 'We use only the finest raw materials to ensure durability and strength.'
        },
        {
            title: 'Custom Sizes',
            text: 'No standard limitations. We build boxes to your exact specifications.'
        },
        {
            title: 'Bulk Orders',
            text: 'Capable of handling large-scale industrial orders with consistent quality.'
        },
        {
            title: 'Reliable Delivery',
            text: 'Timely delivery to keep your supply chain moving smoothly.'
        }
    ];

    return (
        <section id="why-us" className="section why-us-section">
            <div className="container">
                <div className="why-us-content">
                    <h2 className="section-title">Why Choose Krafty Cartoons?</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-marker"></div>
                                <div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-text">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .why-us-section {
          background-color: var(--color-primary);
          color: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .why-us-section .section-title {
          color: var(--color-white);
          margin-bottom: 3rem;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-marker {
          width: 4px;
          height: 100%;
          min-height: 50px;
          background-color: var(--color-secondary);
          border-radius: 2px;
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;
