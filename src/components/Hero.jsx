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
          background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/images/pexels-freek-wolsink-508219-34221998.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed; /* Parallax effect */
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
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
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
          font-weight: 800;
        }

        .highlight {
          color: var(--color-secondary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-dark); /* Darker for better visibility */
          margin-bottom: 2.5rem;
          max-width: 600px;
          animation: fadeUp 0.8s ease-out 0.2s backwards;
          font-weight: 600;
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
