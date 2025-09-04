import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ scrollToSection, language }) => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ArtDen<span>Media</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {language === 'ro'
              ? 'Servicii profesionale de editare video pentru TikTok, Instagram Reels, YouTube Shorts și reclame video scurte.'
              : 'Professional video editing services for TikTok, Instagram Reels, YouTube Shorts and short video ads.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hero-buttons"
          >
            <button className="btn-primary" onClick={() => scrollToSection('portfolio')}>
              {language === 'ro' ? 'Vezi portofoliu' : 'View portfolio'}
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              {language === 'ro' ? 'Contactează-ne' : 'Contact us'}
            </button>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <img src="./hero-photo.jpg" alt="Video Editor" className="hero-image" />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;