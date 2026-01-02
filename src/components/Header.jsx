import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${id}`;
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.jpg" alt="Krafty Cartoons" className="logo" />
          <span className="logo-text">Krafty Cartoons</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button onClick={() => scrollToSection('#home')} className="nav-link-btn">Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('#about')} className="nav-link-btn">About</button>
            </li>
            <li>
              <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
            </li>
            <li>
              <button onClick={() => scrollToSection('#why-us')} className="nav-link-btn">Why Us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('#contact')} className="nav-link-btn">Contact</button>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-primary);
          text-decoration: none;
        }

        .logo {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
        
        .logo-text {
          display: none;
        }

        @media (max-width: 480px) {
           .logo-text { display: none; }
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link, .nav-link-btn {
          font-weight: 500;
          color: var(--color-dark);
          position: relative;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          padding: 0;
        }

        .nav-link:hover, .nav-link-btn:hover {
          color: var(--color-primary);
        }

        .nav-link::after, .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-secondary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link-btn:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          padding: 0.5rem;
          border: none;
          cursor: pointer;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--color-dark);
          position: relative;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background-color: var(--color-dark);
          left: 0;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: var(--color-white);
            padding: 2rem;
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .nav-open {
            transform: translateY(0);
          }

          .nav-list {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
