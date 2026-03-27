import './Promos.scss';
import PromosPic from '../../../assets/img/promos-pic.png';
import BBVALogo from '../../../assets/img/BBVA.png';
import CtaDniLogo from '../../../assets/img/cta-dni.png';
import BcoProvLogo from '../../../assets/img/bco-prov.png';

const promosData = [
  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'MARTES',
    dayColor: 'pink',
    title: '30% DE REINTEGRO',
    description: 'con tope de $11.000 por mes.',
  },
  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'VIERNES Y SABADO',
    dayColor: 'blue',
    title: '30 CUOTAS SIN INTERES',
    description: '',
  },
  {
    bankLogo: BBVALogo,
    bankAlt: 'BBVA',
    dayLabel: 'JUEVES',
    dayColor: 'yellow',
    title: '30% DE REINTEGRO',
    highlight: 'Y 6 CUOTAS SIN INTERES',
    description: 'con tope de $14.000 por mes.',
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
    dayLabel: 'TODOS LOS VIERNES',
    dayColor: 'red',
    title: '20% DE REINTEGRO',
    description: 'con tope de $5.000.',
  },
  {
    bankLogo: BcoProvLogo,
    bankAlt: 'Banco Provincia',
    dayLabel: 'TODOS LOS DÍAS',
    dayColor: 'purple',
    title: '10% DE REINTEGRO',
    highlight: 'Y 4 CUOTAS SIN INTERES',
    description: 'sin con tope.',
  },
];

const Promos = () => {
  return (
    <section id="promos" className="promos-section">
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
            <p className="promos-date">MARZO 2026</p>
            <a href="#promos" className="promos-cta">¡Hacer mi pedido ahora!</a>
          </div>
        </div>

        {/* Right side – promo cards grid */}
        <div className="promos-grid">
          {promosData.map((promo, index) => (
            <div className="promo-card" key={index}>
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
