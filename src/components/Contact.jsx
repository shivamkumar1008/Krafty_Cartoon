
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('An error occurred. Please try again later.');
    } finally {
      setStatus('');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-detail">
              <strong>Owner:</strong> Bharat Tomar
            </p>
            <p className="contact-detail">
              <strong>Phone:</strong> <a href="tel:+918586801489">+91 85868 01489</a>
            </p>
            <p className="contact-detail">
              <strong>Email:</strong> <a href="mailto:KraftyCartoons@gmail.com">KraftyCartoons@gmail.com</a>
            </p>
            <p className="contact-detail">
              <strong>Address:</strong> A7/10, G.T. Road, South Side GT Road, Ghaziabad, India 201012
            </p>
            <div className="contact-extra">
              <p>Ready to start your project? Call us or fill out the form for a quick quote.</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-input"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-white);
        }

        .text-center { text-align: center; }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-info {
          padding: 2rem;
          background-color: var(--color-light);
          border-radius: 8px;
        }

        .contact-info h3 {
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .contact-detail {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .contact-detail a {
          color: var(--color-secondary);
          font-weight: 500;
        }

        .contact-extra {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-gray);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: var(--color-dark);
        }

        .form-input {
          padding: 0.75rem;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(42, 111, 125, 0.1);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
