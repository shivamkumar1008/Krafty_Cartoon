import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Krafty Cartoons</h2>
            <div className="divider"></div>
            <p className="about-text">
              At Krafty Cartoons, we believe that packaging is more than just a box—it's a promise of safety, quality, and brand identity.
              Founded by Bharat, we specialize in end-to-end manufacturing of corrugated boxes, transforming raw materials into
              finished packaging solutions that meet the highest industrial standards.
            </p>
            <p className="about-text">
              Our commitment to sustainability and precision engineering ensures that every box we produce is strong, durable,
              and tailored to your specific needs. Whether you need bulk industrial packaging or custom-sized cartons,
              we deliver with reliability and excellence.
            </p>
          </div>
          <div className="about-visual">
            <div className="visual-box">
              <img
                src="/images/pexels-artempodrez-5025503.jpg"
                alt="Manufacturing Excellence"
                className="visual-image"
              />
              <h3>Manufacturing Excellence</h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-white);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          color: var(--color-primary);
        }

        .divider {
          width: 60px;
          height: 4px;
          background-color: var(--color-secondary);
          margin-bottom: 2rem;
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--color-gray);
          margin-bottom: 1.5rem;
        }

        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-box {
          padding: 0;
          border-radius: 8px;
          border: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          height: 400px; /* Fixed height for visual balance */
          width: 100%;
          position: relative;
        }

        .visual-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-content {
            text-align: center;
          }

          .divider {
            margin: 0 auto 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
