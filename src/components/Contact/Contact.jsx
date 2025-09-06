import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaInstagram, FaTiktok, FaFacebook, FaTelegram, FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceID = "service_lff04v9";
  const templateID = "template_fsk6aqo";
  const publicKey = "QkQQNgNmK3PtmRukN";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("A apărut o eroare, încearcă din nou!");
      });
  };

  const socialPlatforms = [
    { id: 'instagram', name: 'Instagram', icon: <FaInstagram />, color: '#E1306C', url: 'https://instagram.com/artdenmedia' },
    { id: 'tiktok', name: 'TikTok', icon: <FaTiktok />, color: '#000000', url: 'https://tiktok.com/@artdenmedia' },
    { id: 'facebook', name: 'Facebook', icon: <FaFacebook />, color: '#1877F2', url: 'https://facebook.com/artdenmedia' },
    { id: 'telegram', name: 'Telegram', icon: <FaTelegram />, color: '#0088CC', url: 'https://t.me/artdenmedia' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {language === 'ro' ? 'Hai să creăm ceva uimitor împreună!' : "Let's create something amazing together!"}
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {language === 'ro'
            ? 'Contactează-mă prin orice platformă preferi sau folosește formularul de mai jos'
            : 'Reach out through any platform you prefer or use the form below'}
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="social-platforms"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>{language === 'ro' ? 'Mă găsești pe:' : 'Find me on:'}</h3>

            <div className="platforms-grid">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`platform-card ${selectedPlatform === platform.id ? 'active' : ''}`}
                  style={{ '--platform-color': platform.color }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setSelectedPlatform(platform.id)}
                >
                  <div className="platform-icon">
                    {platform.icon}
                  </div>
                  <span>{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>{language === 'ro' ? 'Trimite un mesaj' : 'Send a message'}</h3>
              <div className="form-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder={language === 'ro' ? 'Numele tău' : 'Your name'}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>

              <motion.div
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={language === 'ro' ? 'Adresa de email' : 'Email address'}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>

              <motion.div
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="input-icon input-icon--textarea">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  placeholder={language === 'ro' ? 'Mesajul tău...' : 'Your message...'}
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaPaperPlane />
                {language === 'ro' ? 'Trimite mesajul' : 'Send message'}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {language === 'ro'
                    ? '✓ Mesajul a fost trimis cu succes!'
                    : '✓ Message sent successfully!'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
