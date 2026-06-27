import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bell } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const notifRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, text: "New AP Calculus BC slots are open for Fall semester!", date: "Today" },
    { id: 2, text: "Download the updated College Physics formulas sheet on the Subjects page.", date: "1 day ago" },
    { id: 3, text: "Registration starts next week for the SAT Math Summer Boot Camp.", date: "3 days ago" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotif(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNotifClick = () => {
    setShowNotif(!showNotif);
    setHasUnread(false);
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Evelyn Vance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          {/* Notify Bell Button */}
          <div className="notif-wrapper" ref={notifRef}>
            <button 
              className={`notif-btn ${showNotif ? 'active' : ''}`} 
              onClick={handleNotifClick}
              aria-label="Toggle Notifications"
            >
              <Bell size={20} />
              {hasUnread && <span className="notif-badge"></span>}
            </button>
            
            {showNotif && (
              <div className="notif-dropdown card-glass">
                <div className="notif-header">
                  <h4>Announcements</h4>
                  <span className="notif-count">{notifications.length} updates</span>
                </div>
                <div className="notif-list">
                  {notifications.map((n) => (
                    <div key={n.id} className="notif-item">
                      <p className="notif-text">{n.text}</p>
                      <span className="notif-date">{n.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="btn btn-primary btn-nav-cta">Book Class</Link>
          
          {/* Double line hamburger menu */}
          <button
            className={`mobile-toggle-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className="burger-line line-top"></span>
            <span className="burger-line line-bottom"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-logo logo-container" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Evelyn Vance</span>
        </Link>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary mobile-cta-btn"
            onClick={() => setIsOpen(false)}
            style={{ marginTop: '20px', width: '100%' }}
          >
            Book Class
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
