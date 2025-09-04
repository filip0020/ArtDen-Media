import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState('ro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ro' ? 'en' : 'ro');
  };

  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <Hero
        scrollToSection={scrollToSection}
        language={language}
      />
      <About language={language} />
      <Portfolio language={language} />
      <Reviews language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;