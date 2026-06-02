import { useEffect, useRef } from 'react';
import './Promos.scss';
import PromosPic from '../../../assets/img/promos-pic.png';
import BBVALogo from '../../../assets/img/BBVA.png';
import CtaDniLogo from '../../../assets/img/cta-dni.png';
import BcoProvLogo from '../../../assets/img/bco-prov.png';
import GaliciaLogo from '../../../assets/img/galicia.png';


const promosData = [

  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'LUNES 27 Y MIÉRCOLES 29',
    dayColor: 'purple',
    title: '30% DE REINTEGRO',
    description: 'con tope de $13.000 por mes.',
  },
  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'MARTES',
    dayColor: 'pink',
    title: '30% DE REINTEGRO',
    description: 'con tope de $12.000 por mes.',
  },
  {
    bankLogo: GaliciaLogo,
    bankAlt: 'Banco Galicia',
    dayLabel: 'TODOS LOS MARTES',
    dayColor: 'purple',
    title: '15% DE REINTEGRO',
    highlight: 'Y 3 CUOTAS SIN INTERÉS',
    description: 'con tope de $10.000 por mes',
  },
  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'VIERNES Y SÁBADO',
    dayColor: 'yellow',
    title: '3 CUOTAS SIN INTERÉS',
    highlight: '',
    description: '',
  },
  {
    bankLogo: CtaDniLogo,
    bankAlt: 'Cuenta DNI',
    dayLabel: 'LUNES Y MARTES',
    dayColor: 'green',
    title: '10% DE REINTEGRO',
    description: 'con tope de $5.000 semanal.',
  },
  {
    bankLogo: CtaDniLogo,
    bankAlt: 'Cuenta DNI',
    dayLabel: 'MIÉRCOLES, JUEVES Y VIERNES',
    dayColor: 'red',
    title: '20% DE REINTEGRO',
    description: 'con tope de $5.000 .',
  },
  {
    bankLogo: BcoProvLogo,
    bankAlt: 'Banco Provincia',
    dayLabel: 'TODOS LOS DÍAS',
    dayColor: 'purple',
    title: '10% DE REINTEGRO',
    highlight: 'Y 4 CUOTAS SIN INTERÉS',
    description: 'Sin tope de reintegro',
  },
];

const Promos = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
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

    const cards = document.querySelectorAll('.promo-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="promos" className="promos-section" ref={sectionRef}>
      <div className="promos-container">
        {/* Left side – dog image + banner */}
        <div className="promos-left">
          <div className="promos-image-wrapper">
            <img src={PromosPic} alt="Perro con lentes de sol" className="promos-pic" />
          </div>
          <div className="promos-banner">
            <h2>
              PROMOS<br />
              BANCARIAS
            </h2>
            <p className="promos-date">JUNIO 2026</p>
            <a
              href="https://wa.me/5402215399399?text=¡Hola!%20Quisiera%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="promos-cta"
            >
              ¡Hacer mi pedido ahora!
            </a>
          </div>
        </div>

        {/* Right side – promo cards grid */}
        <div className="promos-grid">
          {promosData.map((promo, index) => (
            <div
              className="promo-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="promo-card__header">
                <img src={promo.bankLogo} alt={promo.bankAlt} className="promo-card__bank-logo" />
                <span className={`promo-card__day-pill promo-card__day-pill--${promo.dayColor}`}>
                  {promo.dayLabel}
                </span>
              </div>
              <div className="promo-card__body">
                <h3 className="promo-card__title">{promo.title}</h3>
                {promo.highlight && (
                  <p className="promo-card__highlight">
                    {promo.highlight} <span>{promo.description}</span>
                  </p>
                )}
                {!promo.highlight && promo.description && (
                  <p className="promo-card__desc">{promo.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promos;
