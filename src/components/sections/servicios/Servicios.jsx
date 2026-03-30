import { useEffect, useRef, useState } from 'react';
import './Servicios.scss';
import FeedImg from '../../../assets/img/feed.png';
import AccesoriesImg from '../../../assets/img/accesories.png';
import FarmaciaImg from '../../../assets/img/farmacia-veterinaria.png';
import EsteticaImg from '../../../assets/img/estetica.png';
import VGreen from '../../../assets/img/v-green.png';

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection status
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Trigger slightly earlier for better feel
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="servicios" className="servicios-section" ref={sectionRef}>
      {/* Decorative green curve */}
      <img src={VGreen} alt="" className="servicios-green-wave" aria-hidden="true" />

      <div className={`servicios-container ${isVisible ? 'is-visible' : ''}`}>
        {/* Bento grid */}
        <div className="servicios-grid">
          {/* Card 1 – Alimentos (large, top-left) */}
          <div className="servicios-card servicios-card--alimentos">
            <img src={FeedImg} alt="Alimentos" className="servicios-card__img" />
            <span className="servicios-card__label">Alimentos</span>
          </div>

          {/* Card 2 – CTA yellow card (top-right) */}
          <div className="servicios-card servicios-card--cta">
            <h2>
              TODO PARA<br />
              SU BIENESTAR
            </h2>
            <a href="#promos" className="servicios-card__btn">¡Hacer mi pedido ahora!</a>
          </div>

          {/* Card 3 – Farmacia Veterinaria (bottom-left) */}
          <div className="servicios-card servicios-card--farmacia">
            <img src={FarmaciaImg} alt="Farmacia Veterinaria" className="servicios-card__img" />
            <span className="servicios-card__label">Farmacia Veterinaria</span>
          </div>

          {/* Card 4 – Accesorios (center, spans rows) */}
          <div className="servicios-card servicios-card--accesorios">
            <img src={AccesoriesImg} alt="Accesorios" className="servicios-card__img" />
            <span className="servicios-card__label">Accesorios</span>
          </div>

          {/* Card 5 – Estética y cuidado (bottom-right) */}
          <div className="servicios-card servicios-card--estetica">
            <img src={EsteticaImg} alt="Estética y cuidado" className="servicios-card__img" />
            <span className="servicios-card__label">Estética y cuidado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
