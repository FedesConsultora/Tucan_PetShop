import { useEffect, useRef, useState } from 'react';
import './Servicios.scss';
import FeedImg from '../../../assets/img/feed.png';
import AccesoriesImg from '../../../assets/img/accesories.png';
import FarmaciaImg from '../../../assets/img/farmacia-veterinaria.png';
import EsteticaImg from '../../../assets/img/estetica-cuidado.png';
import VGreen from '../../../assets/img/v-green.png';

const Servicios = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% is visible
      rootMargin: '0px 0px -60px 0px' // Delay until element is 160px from bottom of viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
        } else {
          entry.target.classList.remove('is-in-view');
        }
      });
    }, observerOptions);

    const cardElements = document.querySelectorAll('.servicios-card');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="servicios-section" ref={sectionRef}>
      {/* Decorative green curve */}
      <img src={VGreen} alt="" className="servicios-green-wave" aria-hidden="true" />

      <div className="servicios-container">
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
            <a
              href="https://wa.me/5402215399399?text=¡Hola!%20Quisiera%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="servicios-card__btn"
            >
              ¡Hacer mi pedido ahora!
            </a>
          </div>

          {/* Card 3 – Farmacia Veterinaria (bottom-left) */}
          <div className="servicios-card servicios-card--farmacia">
            <img src={FarmaciaImg} alt="Farmacia veterinaria" className="servicios-card__img" />
            <span className="servicios-card__label">Farmacia veterinaria</span>
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
