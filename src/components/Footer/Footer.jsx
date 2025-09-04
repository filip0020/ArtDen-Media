import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} ArtDen Media. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
};

export default Footer;