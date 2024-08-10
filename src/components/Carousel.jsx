import { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const Carousel = ({ slides }) => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const width = carouselRef.current.offsetWidth;
    if (direction === 'left') {
      carouselRef.current.scrollLeft -= width;
    } else {
      carouselRef.current.scrollLeft += width;
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={() => handleScroll('left')}>{'<'}</button>
      <div className="carousel" ref={carouselRef}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <a 
              href={slide.link} 
              target="_blank"
              className="carousel-link"
            >
              View in Github
            </a>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={() => handleScroll('right')}>{'>'}</button>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Carousel