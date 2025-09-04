import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { id: 1, name: 'Alexandra M.', text: 'Am fost impresionată de calitatea editării! Totul a fost exact cum mi-am dorit.', rating: 5 },
    { id: 2, name: 'Mihai P.', text: 'Profesionalism la cel mai înalt nivel. Recomand cu încredere!', rating: 5 },
    { id: 3, name: 'Cristina D.', text: 'Editarea video a transformat evenimentul meu într-o amintire de neuitat.', rating: 5 },
    { id: 4, name: 'Andrei L.', text: 'Răspuns rapid, editare creativă, rezultat exceptional!', rating: 5 },
  ];

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Părerea clienților
        </motion.h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? 'star filled' : 'star'} />
                ))}
              </div>
              <p>"{review.text}"</p>
              <h4>- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;