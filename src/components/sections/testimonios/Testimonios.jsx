import { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonios.scss';

// Import images
import Testimony1 from '../../../assets/img/testimonios/testimony-1.png';
import Testimony2 from '../../../assets/img/testimonios/testimony-2.png';
import Testimony3 from '../../../assets/img/testimonios/testimony-3.png';
import Testimony4 from '../../../assets/img/testimonios/testimony-4.png';
import Testimony5 from '../../../assets/img/testimonios/testimony-5.png';

const testimoniosData = [
  {
    image: Testimony1,
    initial: 'M',
    name: 'María S. (Dueña de "Luna")',
    title: 'Aman a los animales',
    quote:
      'Tucán no es solo que tiene buenas marcas, sino la calidad humana. Me ayudan en el juguete ideal o el alimento para mi perrita según su edad.',
  },
  {
    image: Testimony2,
    initial: 'L',
    name: 'Lucía M. (Dueña de "Coki" y "Toby")',
    title: 'Mi pet shop de confianza desde siempre.',
    quote:
      '"Compro todo acá: desde las pipetas hasta los juguetes. Los precios son muy competitivos y las ofertas del mes realmente valen la pena. Lo mejor es que el trato es super humano y personalizado."',
  },
  {
    image: Testimony3,
    initial: 'M',
    name: 'Mariana G. (Dueña de "Rocco")',
    title: 'La atención por WhatsApp es un 10.',
    quote:
      '"Me encanta que puedo hacer mi pedido en dos minutos mientras trabajo y me llega a casa el mismo día. No tengo que cargar bolsas pesadas y siempre tienen el alimento que mi perro necesita. ¡Súper recomendados!"',
  },
  {
    image: Testimony4,
    initial: 'C',
    name: 'Carlos R. (Dueño de "Milo")',
    title: 'Tienen de todo y te asesoran.',
    quote:
      '"Buscaba un medicamento para alergias alimentarias que no encontraba en ningún lado, y acá me ayudaron enseguida con opciones y el envío fue rápido."',
  },
  {
    image: Testimony5,
    initial: 'A',
    name: 'Ana P. (Dueña de "Bella")',
    title: 'Servicio excelente siempre.',
    quote:
      '"Desde que los descubrí no compro en otro lado. El envío rápido y las promos bancarias me salvan siempre."',
  },
];

const Testimonios = () => {
  const dataLength = testimoniosData.length;
  // Triplicate the data: [Set 1, Set 2 (Middle), Set 3]
  const extendedData = [
    ...testimoniosData,
    ...testimoniosData,
    ...testimoniosData,
  ];

  const [currentIndex, setCurrentIndex] = useState(dataLength); // Start at the beginning of the middle set
  const [isPaused, setIsPaused] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = extendedData.length;

  const handleJump = useCallback(() => {
    // If we've moved into the first set, jump to the same item in the middle set
    if (currentIndex < dataLength) {
      setHasTransition(false);
      setCurrentIndex(currentIndex + dataLength);
    } 
    // If we've moved into the last set, jump to the same item in the middle set
    else if (currentIndex >= dataLength * 2) {
      setHasTransition(false);
      setCurrentIndex(currentIndex - dataLength);
    }
  }, [currentIndex, dataLength]);

  // Reset transition after jumping
  useEffect(() => {
    if (!hasTransition) {
      const raf = requestAnimationFrame(() => {
        setHasTransition(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [hasTransition]);

  const goNext = useCallback(() => {
    if (!hasTransition) return;
    setCurrentIndex((prev) => prev + 1);
  }, [hasTransition]);

  const goPrev = useCallback(() => {
    if (!hasTransition) return;
    setCurrentIndex((prev) => prev - 1);
  }, [hasTransition]);

  const handleArrowClick = (direction) => {
    setIsPaused(true);
    if (direction === 'next') goNext();
    else goPrev();
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      goNext();
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="testimonios" id="testimonios">
      <div
        className="testimonios__viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`testimonios__track ${!hasTransition ? 'testimonios__track--no-transition' : ''}`}
          ref={trackRef}
          onTransitionEnd={handleJump}
          style={{ 
            // The centering formula remains robust: Shift track by (index * totalWidth + halfCard)
            transform: `translateX(calc(50% - (${currentIndex} * (var(--card-width, 480px) + var(--card-gap, 24px)) + (var(--card-width, 480px) / 2))))` 
          }}
        >
          {extendedData.map((item, index) => {
            // Highlight the visual active card (the one in the middle of current view)
            const isActive = index === currentIndex;

            return (
              <div
                className={`testimonios__card ${isActive ? 'testimonios__card--active' : ''}`}
                key={index}
              >
                <div className="testimonios__avatar">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <span>{item.initial}</span>
                  )}
                </div>
                <h4 className="testimonios__card-title">{item.title}</h4>
                <p className="testimonios__quote">{item.quote}</p>
                <p className="testimonios__author">— {item.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="testimonios__arrow testimonios__arrow--left"
        onClick={() => handleArrowClick('prev')}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="testimonios__arrow testimonios__arrow--right"
        onClick={() => handleArrowClick('next')}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
};

export default Testimonios;
