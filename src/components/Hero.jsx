import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Smart. Strong. <br />
                    <span className="highlight">Sustainable</span> Packaging.
                </h1>
                <p className="hero-subtitle">
                    Premium corrugated boxes and custom packaging solutions for your business.
                    From raw materials to finished excellence.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary">Get a Quote</a>
                    <a href="#contact" className="btn btn-outline">Contact Us</a>
                </div>
            </div>

            <style>{`
        .hero {
          padding: 160px 0 100px; /* Account for fixed header */
          background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(230, 138, 92, 0.05) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .hero-title {
          color: var(--color-dark);
          margin-bottom: 1.5rem;
          animation: fadeUp 0.8s ease-out;
        }

        .highlight {
          color: var(--color-secondary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-gray);
          margin-bottom: 2.5rem;
          max-width: 600px;
          animation: fadeUp 0.8s ease-out 0.2s backwards;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          animation: fadeUp 0.8s ease-out 0.4s backwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
            text-align: center;
          }
          
          .hero-content {
            margin: 0 auto;
          }

          .hero-actions {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
