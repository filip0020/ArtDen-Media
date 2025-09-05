import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';

const Header = ({ activeSection, scrollToSection, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a className="logo" href='#'>
          <img src="/Logo.jpg" alt="ArtDenMedia Logo" />
          <span>ArtDen<span>Media</span></span>
        </a>

        {/* Nav clasic doar pentru desktop */}
        <nav className="nav desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
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

          {/* BurgerMenu pentru mobil */}
          <BurgerMenu navItems={navItems} scrollToSection={scrollToSection} language={language} />
        </div>
      </div>
    </header>
  );
};

export default Header;
