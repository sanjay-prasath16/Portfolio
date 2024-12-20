import { useRef, useState, useEffect } from 'react';
import slide_image_1 from '../assets/Vehicle.png';
import slide_image_2 from '../assets/backEnd.png';
import slide_image_3 from '../assets/Astrojs.png';
import slide_image_4 from '../assets/Recipe.png';
import '../styles/App.css';

const Project = () => {
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const slides = [
    {
      src: slide_image_1,
      alt: 'Vehicle Rental Management System',
      description: 'A system for managing vehicle rentals with user-friendly booking and management features.',
    },
    {
      src: slide_image_2,
      alt: 'Munch Spot',
      description: 'A backend service for a restaurant app, handling orders and reservations seamlessly.',
    },
    {
      src: slide_image_3,
      alt: 'Music Player',
      description: 'A lightweight music player built with Astro.js for smooth playback and playlist management.',
    },
    {
      src: slide_image_4,
      alt: 'Food Recipe',
      description: 'A platform to explore and share delicious recipes with step-by-step instructions.',
    },
  ];

  const loopedSlides = [...slides, ...slides];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    sliderRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    sliderRef.current.style.animationPlayState = 'running';
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const handleAnimationEnd = () => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.offsetHeight;
      slider.style.transition = 'transform 20s linear';
    };

    slider.addEventListener('animationiteration', handleAnimationEnd);
    return () => slider.removeEventListener('animationiteration', handleAnimationEnd);
  }, []);

  return (
    <section className="projects-section">
      <h3 className="text-center section-heading">Projects</h3>
      <h1 className="text-center section-subHeading">Completed Projects</h1>
      <div className="infinite-slider-container">
        <div
          className="infinite-slider"
          ref={sliderRef}
          onMouseLeave={handleMouseLeave}
        >
          {loopedSlides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              onMouseEnter={() => handleMouseEnter(index % slides.length)}
            >
              <img src={slide.src} alt={slide.alt} />
              <p className="slide-caption">{slide.alt}</p>
              {hoveredIndex === index % slides.length && (
                <div className="description-overlay">
                  <p>{slide.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;