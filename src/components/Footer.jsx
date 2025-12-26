import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Krafty Cartoons</h3>
          <p>Premium Packaging Solutions for your Business</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Krafty Cartoons. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-dark);
          color: var(--color-white);
          padding: 3rem 0;
          text-align: center;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .footer-brand h3 {
          color: var(--color-secondary);
          margin-bottom: 0.5rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: var(--color-white);
          text-decoration: underline;
        }

        .footer-copyright {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
