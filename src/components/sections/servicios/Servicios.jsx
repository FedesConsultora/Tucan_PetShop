import './Servicios.scss';
import FeedImg from '../../../assets/img/feed.png';
import AccesoriesImg from '../../../assets/img/accesories.png';
import FarmaciaImg from '../../../assets/img/farmacia.png';
import EsteticaImg from '../../../assets/img/estetica.png';
import VGreen from '../../../assets/img/v-green.png';

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-section">
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
