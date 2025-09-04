import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import './Header.css';

const Header = ({ activeSection, scrollToSection, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', ro: 'Acasă', en: 'Home' },
    { id: 'about', ro: 'Despre', en: 'About' },
    { id: 'portfolio', ro: 'Portofoliu', en: 'Portfolio' },
    { id: 'reviews', ro: 'Recenzii', en: 'Reviews' },
    { id: 'contact', ro: 'Contact', en: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src="/Logo.jpg" alt="ArtDenMedia Logo" />
          <span>ArtDen<span>Media</span></span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {language === 'ro' ? item.ro : item.en}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="language-switcher" onClick={toggleLanguage}>
            <FaGlobe />
            <span>{language === 'ro' ? 'EN' : 'RO'}</span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;