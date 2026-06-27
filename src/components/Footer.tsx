import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container footer-content">
        <div className="footer-brand-column">
          <Link to="/" className="logo-container">
            <span className="logo-text">Evelyn Vance</span>
          </Link>
          <p className="footer-tagline">
            Empowering students to master complex concepts, build rock-solid confidence, and achieve their academic dreams.
          </p>
          <div className="social-links">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-title">Pages</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/subjects">Subjects</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-title">Subjects</h4>
          <ul className="footer-links-list">
            <li><Link to="/subjects">AP Calculus AB/BC</Link></li>
            <li><Link to="/subjects">College Physics</Link></li>
            <li><Link to="/subjects">Computer Science</Link></li>
            <li><Link to="/subjects">SAT/ACT Math Prep</Link></li>
            <li><Link to="/subjects">IB Mathematics</Link></li>
          </ul>
        </div>

        <div className="footer-contact-column">
          <h4 className="footer-title">Studio / Office</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>450 Sutter St, Suite 1200, San Francisco, CA 94108</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>(415) 555-8901</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>dr.vance@evelyncoaching.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="divider"></div>
        <div className="footer-bottom-inner">
          <p>© {currentYear} Dr. Evelyn Vance. All rights reserved.</p>
          <div className="footer-policies">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
