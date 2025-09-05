import { motion } from 'framer-motion';
import './About.css';

const About = ({ language }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {language === 'ro' ? 'Despre mine' : 'About me'}
        </motion.h2>

        {/* Bloc poza + text */}
        <div className="about-info">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/Den-profil.jpg"
              alt={language === 'ro' ? 'Editor Video' : 'Video Editor'}
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              {language === 'ro'
                ? 'Sunt un editor video pasionat, dedicat creării de conținut vizual de înaltă calitate. Cu peste 2 ani de experiență în industrie, am lucrat la peste 200 de proiecte și am avut peste 50 de clienți mulțumiți.'
                : 'I am a passionate video editor, dedicated to creating high-quality visual content. With over 2 years of experience in the industry, I have worked on over 200 projects and had over 50 satisfied clients.'}
            </p>
            <p>
              {language === 'ro'
                ? 'Mă specializez în editarea de materiale video scurte, perfecte pentru TikTok, Instagram Reels, YouTube Shorts și reclame video scurte. Fiecare proiect este abordat cu atenție la detalii și creativitate, asigurându-mă că reflectă viziunea și personalitatea clientului.'
                : 'I specialize in editing short video material, perfect for TikTok, Instagram Reels, YouTube Shorts and short video ads. Each project is approached with attention to detail and creativity, ensuring that it reflects the vision and personality of the client.'}
            </p>
          </motion.div>
        </div>

        {/* Stats dedesubt */}
        <div className="stats">
          <div className="stat">
            <h3>2+</h3>
            <p>{language === 'ro' ? 'Ani experiență' : 'Years of experience'}</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>{language === 'ro' ? 'Proiecte' : 'Projects'}</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>{language === 'ro' ? 'Clienți mulțumiți' : 'Satisfied clients'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
