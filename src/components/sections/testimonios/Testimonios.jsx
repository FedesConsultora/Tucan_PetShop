import { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonios.scss';

const testimoniosData = [
  {
    initial: 'M',
    name: 'María S. (Dueña de "Luna")',
    title: 'Aman a los animales',
    quote:
      'Tucán no es solo que tiene buenas marcas, sino la calidad humana. Me ayudan en el juguete ideal o el alimento para mi perrita según su edad.',
  },
  {
    initial: 'L',
    name: 'Lucía M. (Dueña de "Coki" y "Toby")',
    title: 'Mi pet shop de confianza desde siempre.',
    quote:
      '"Compro todo acá: desde las pipetas hasta los juguetes. Los precios son muy competitivos y las ofertas del mes realmente valen la pena. Lo mejor es que el trato es super humano y personalizado."',
  },
  {
    initial: 'M',
    name: 'Mariana G. (Dueña de "Rocco")',
    title: 'La atención por WhatsApp es un 10.',
    quote:
      '"Me encanta que puedo hacer mi pedido en dos minutos mientras trabajo y me llega a casa el mismo día. No tengo que cargar bolsas pesadas y siempre tienen el alimento que mi perro necesita. ¡Súper recomendados!"',
  },
  {
    initial: 'C',
    name: 'Carlos R. (Dueño de "Milo")',
    title: 'Tienen de todo y te asesoran.',
    quote:
      '"Buscaba un medicamento para alergias alimentarias que no encontraba en ningún lado, y acá me ayudaron enseguida con opciones y el envío fue rápido."',
  },
  {
    initial: 'A',
    name: 'Ana P. (Dueña de "Bella")',
    title: 'Servicio excelente siempre.',
    quote:
      '"Desde que los descubrí no compro en otro lado. El envío rápido y las promos bancarias me salvan siempre."',
  },
];

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = testimoniosData.length;

  const goTo = useCallback(
    (index) => {
      let newIndex = index;
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      setCurrentIndex(newIndex);
    },
    [totalSlides]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Calculate translate for centered view showing partial cards on sides
  const getTranslateX = () => {
    // Each card ~320px + gap 24px, we center the active card
    return `calc(50% - ${currentIndex * 344}px - 160px)`;
  };

  return (
    <div className="testimonios" id="testimonios">
      <div
        className="testimonios__viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="testimonios__track"
          ref={trackRef}
          style={{ transform: `translateX(${getTranslateX()})` }}
        >
          {testimoniosData.map((item, index) => (
            <div
              className={`testimonios__card ${index === currentIndex ? 'testimonios__card--active' : ''
                }`}
              key={index}
            >
              <div className="testimonios__avatar">
                <span>{item.initial}</span>
              </div>
              <h4 className="testimonios__card-title">{item.title}</h4>
              <p className="testimonios__quote">{item.quote}</p>
              <p className="testimonios__author">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="testimonios__arrow testimonios__arrow--left"
        onClick={goPrev}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="testimonios__arrow testimonios__arrow--right"
        onClick={goNext}
        aria-label="Siguiente"
      >
        ›
      </button>


    </div>
  );
};

export default Testimonios;
