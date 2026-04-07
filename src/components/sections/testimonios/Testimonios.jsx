import { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonios.scss';

// Import 15 new avatars
import Avatar1 from '../../../assets/img/testimonios/avatars/avatar (1).png';
import Avatar2 from '../../../assets/img/testimonios/avatars/avatar (2).png';
import Avatar3 from '../../../assets/img/testimonios/avatars/avatar (3).png';
import Avatar4 from '../../../assets/img/testimonios/avatars/avatar (4).png';
import Avatar5 from '../../../assets/img/testimonios/avatars/avatar (5).png';
import Avatar6 from '../../../assets/img/testimonios/avatars/avatar (6).png';
import Avatar7 from '../../../assets/img/testimonios/avatars/avatar (7).png';
import Avatar8 from '../../../assets/img/testimonios/avatars/avatar (8).png';
import Avatar9 from '../../../assets/img/testimonios/avatars/avatar (9).png';
import Avatar10 from '../../../assets/img/testimonios/avatars/avatar (10).png';
import Avatar11 from '../../../assets/img/testimonios/avatars/avatar (11).png';
import Avatar12 from '../../../assets/img/testimonios/avatars/avatar (12).png';
import Avatar13 from '../../../assets/img/testimonios/avatars/avatar (13).png';
import Avatar14 from '../../../assets/img/testimonios/avatars/avatar (14).png';
import Avatar15 from '../../../assets/img/testimonios/avatars/avatar (15).png';

const testimoniosData = [
  { image: Avatar1, initial: '1', name: 'Cazein', stars: 5, date: 'Hace 6 meses', quote: 'Super amables.. muy buenos precios.' },
  { image: Avatar2, initial: '2', name: 'M. G. Salas', stars: 5, date: 'Hace un mes', quote: 'Excelente atención!! Son un amor ❤️' },
  { image: Avatar3, initial: '3', name: 'Pamela Fernández', stars: 4, date: 'Hace 6 meses', quote: 'Tienen todo lo q busques y a buen precio.' },
  { image: Avatar4, initial: '4', name: 'analia vázquez', stars: 4, date: 'Hace 7 meses', quote: 'Mil opciones en camas y alimento para tu mascota. Los precios son muy aceptables y lo mejor es que está abierto los domingos 🤗' },
  { image: Avatar5, initial: '5', name: 'Catalina Deandrea', stars: 5, date: 'Hace un año', quote: 'Excelente atención! Los chicos son muy amables, atienden rápido y te ayudan con lo que necesitas! Hacen chapitas para mascotas en el acto! 🙌🏻' },
  { image: Avatar6, initial: '6', name: 'Ezequiel Ferreyra', stars: 5, date: 'Hace un año', quote: 'Muy buenos precios y buena atención' },
  { image: Avatar7, initial: '7', name: 'Florencia Corvalan', stars: 5, date: 'Hace 10 meses', quote: 'Está abierto prácticamente siempre y tiene una atención y un stock genial' },
  { image: Avatar8, initial: '8', name: 'Maria Virgina Carbajo', stars: 5, date: 'Hace un año', quote: 'Muy buena atención variedad de productos y marcas buenos precios descuentos semanales con cuenta DNI abre los domingos y con horario extendido para tener en cuenta' },
  { image: Avatar9, initial: '9', name: 'jose luis ripa', stars: 5, date: 'Hace 4 años', quote: 'Muy amable el dependiente, gran variedad de cosas (montones de marcas de alimentos, almohadones, juguetes para animales, etc) con buenos precios' },
  {
    image: Avatar10, initial: '10', name: 'Lorena Neve', stars: 5, date: 'Hace 4 años', quote: 'Les compro desde hace 10 años aprox, siempre tienen muchísima variedad y excelentes precios. Promociones en descuentos o cantidad de productos. La atención es excelente y el horario super amplio.'
  },
  { image: Avatar11, initial: '11', name: 'OSCAR CUARTANGO', stars: 5, date: 'Hace 2 años', quote: 'Excelente atención y muy buena relación precio calidad. La persona que nos atendió demostró conocimiento del rubro.' },
  { image: Avatar12, initial: '12', name: 'Mariel Arros', stars: 5, date: 'Hace 2 años', quote: 'Genial, buen precio, descuento con BIP y sobre todo excelente trato y paciencia para los clientes con sus mascotas.Punto extra... te quedaste sin comida el sábado y/o domingo.... esta abrierto!!' },
  { image: Avatar13, initial: '13', name: 'Virginia Carignano', stars: 5, date: 'Hace 2 años', quote: 'Excelente atención, buenos precios y variadas opciones de pago. Muy completo.' },
  { image: Avatar14, initial: '14', name: 'Yanel Daronco', stars: 5, date: 'Hace un año', quote: 'Lo recomiendo a Tu Can , es un mundo para tus mascotas, tenes accesorios de comodidad, higiene, alimento (las mejores marcas ) , juguetes 😍 y la atención es excelente muy comprometidos con su trabajo. 🤗' },
  { image: Avatar15, initial: '15', name: 'Rosario garnica', stars: 4, date: 'Hace 2 meses', quote: 'Excelente. Encontré la marca de alimento que no encontraba por ninguna parte' },
];

const Testimonios = () => {
  const dataLength = testimoniosData.length;
  // Triplicate the data: [Set 1, Set 2 (Middle), Set 3]
  const extendedData = [
    ...testimoniosData,
    ...testimoniosData,
    ...testimoniosData,
    ...testimoniosData,
    ...testimoniosData,
  ];

  const [currentIndex, setCurrentIndex] = useState(dataLength * 2); // Start at the middle set (Set 3)
  const [isPaused, setIsPaused] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = extendedData.length;

  const handleJump = useCallback(() => {
    // With 5 sets [Set1, Set2, Set3, Set4, Set5]
    // Middle is Set3 (indices dataLength*2 to dataLength*3 - 1)

    // If we've moved into Set1 or Set2, jump into the middle (Set3 or Set4)
    if (currentIndex < dataLength * 2) {
      setHasTransition(false);
      setCurrentIndex(currentIndex + dataLength);
    }
    // If we've moved into Set5, jump back towards the middle
    else if (currentIndex >= dataLength * 3) {
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
    // Guard against going beyond Set5
    if (currentIndex >= totalSlides - 1) return;
    setCurrentIndex((prev) => prev + 1);
  }, [hasTransition, currentIndex, totalSlides]);

  const goPrev = useCallback(() => {
    if (!hasTransition) return;
    // Guard against going beyond Set1
    if (currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
  }, [hasTransition, currentIndex]);

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
    <section className="testimonios" id="testimonios">
      <div
        className="testimonios__viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div
          className={`testimonios__track ${!hasTransition ? 'testimonios__track--no-transition' : ''}`}
          ref={trackRef}
          onTransitionEnd={handleJump}
          style={{
            // The centering formula remains robust: Shift track by (index * totalWidth + halfCard)
            transform: `translateX(calc(50% - (${currentIndex} * (var(--card-width, 320px) + var(--card-gap, 24px)) + (var(--card-width, 320px) / 2))))`
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

                <p className="testimonios__author">{item.name}</p>

                <div className="testimonios__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`testimonios__star ${i < item.stars ? 'testimonios__star--filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>



                <p className="testimonios__quote">{item.quote}</p>
                <p className="testimonios__date">{item.date}</p>
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
    </section>
  );
};

export default Testimonios;
