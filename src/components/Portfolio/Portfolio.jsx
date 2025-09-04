import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = ({ language }) => {
  const portfolioItems = [
    {
      id: 1,
      title: language === "ro" ? "Reels Instagram" : "Instagram Reels",
      video: "/video 1.mp4",
      thumbnail: "/video1-thumb.jpg",
    },
    {
      id: 2,
      title: language === "ro" ? "TikTok Viral" : "Viral TikTok",
      video: "/video 2.mp4",
      thumbnail: "/video2-thumb.jpg",
    },
    {
      id: 3,
      title: language === "ro" ? "YouTube Short" : "YouTube Short",
      video: "/video 3.mp4",
      thumbnail: "/video3-thumb.jpg",
    },
    {
      id: 4,
      title: language === "ro" ? "Reclamă Video" : "Video Ad",
      video: "/video 4.mp4",
      thumbnail: "/video4-thumb.jpg",
    },
    {
      id: 5,
      title: language === "ro" ? "Editare Eveniment" : "Event Editing",
      video: "/video 5.mp4",
      thumbnail: "/video5-thumb.jpg",
    },
  ];

  const safePortfolioItems = portfolioItems || [];

  if (!Array.isArray(safePortfolioItems) || safePortfolioItems.length === 0) {
    return null;
  }

  const wrapIndex = (i) => {
    const n = safePortfolioItems.length;
    return ((i % n) + n) % n;
  };

  const INITIAL_INDEX = 0;
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [firstPlayed, setFirstPlayed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const leftVideoRef = useRef(null);
  const centerVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  // Preload videos
  useEffect(() => {
    safePortfolioItems.forEach((it) => {
      const v = document.createElement("video");
      v.src = it.video;
      v.preload = "auto";
    });
  }, []);

  // Control video playback
  useEffect(() => {
    const center = centerVideoRef.current;
    const left = leftVideoRef.current;
    const right = rightVideoRef.current;

    if (left) {
      left.muted = true;
      left.loop = true;
      left.play().catch(() => { });
    }
    if (right) {
      right.muted = true;
      right.loop = true;
      right.play().catch(() => { });
    }

    if (!center) return;

    else {
      center
        .play()
        .catch(() => {
          try {
            center.muted = true;
            center.play().catch(() => { });
          } catch (e) { }
        });
    }
  }, [currentIndex, firstPlayed, safePortfolioItems.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next
      nextItem();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right - previous
      prevItem();
    }
  };

  const prevItem = () => setCurrentIndex((p) => wrapIndex(p - 1));
  const nextItem = () => setCurrentIndex((p) => wrapIndex(p + 1));

  const leftIndex = wrapIndex(currentIndex - 1);
  const rightIndex = wrapIndex(currentIndex + 1);

  const handleFirstPlay = () => {
    const center = centerVideoRef.current;
    if (!center) return;

    center.muted = false;
    center
      .play()
      .then(() => {
        setFirstPlayed(true);
      })
      .catch(() => {
        center.muted = true;
        center.play().catch(() => { });
        setFirstPlayed(true);
      });
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {language === "ro" ? "Portofoliu" : "Portfolio"}
        </motion.h2>

        <div
          className="portfolio-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-button prev" onClick={prevItem} aria-label="Prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
            </svg>
          </button>

          <div className="carousel-container">
            {/* Left item */}
            <motion.div
              className="carousel-item left"
              aria-hidden="false"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.95, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="portfolio-item small">
                <video
                  ref={leftVideoRef}
                  src={safePortfolioItems[leftIndex]?.video || ""}
                  poster={safePortfolioItems[leftIndex]?.thumbnail || ""}
                  preload="auto"
                  playsInline
                  muted
                  loop
                />
              </div>
            </motion.div>

            {/* Center item */}
            <motion.div
              className="carousel-item center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="portfolio-item">
                <video
                  ref={centerVideoRef}
                  src={safePortfolioItems[currentIndex]?.video || ""}
                  poster={safePortfolioItems[currentIndex]?.thumbnail || ""}
                  preload="auto"
                  playsInline
                  loop
                  controls
                  autoPlay={false}
                />


              </div>
            </motion.div>

            {/* Right item */}
            <motion.div
              className="carousel-item right"
              aria-hidden="false"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.95, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="portfolio-item small">
                <video
                  ref={rightVideoRef}
                  src={safePortfolioItems[rightIndex]?.video || ""}
                  poster={safePortfolioItems[rightIndex]?.thumbnail || ""}
                  preload="auto"
                  playsInline
                  muted
                  loop
                />
              </div>
            </motion.div>
          </div>

          <button className="carousel-button next" onClick={nextItem} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" />
            </svg>
          </button>
        </div>

        <div className="portfolio-actions">
          <button className="btn-primary">{language === "ro" ? "Vezi toate" : "View all"}</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
