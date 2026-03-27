import './Inicio.scss';
import HeroPic from '../../../assets/img/hero-pic.png';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            TODO LO QUE TU<br />
            MASCOTA AMA,
            <span>
              A UN SOLO CLIC<br />
              DE DISTANCIA.
            </span>
          </h1>
          <a href="#promos" className="cta-btn">¡Hacer mi pedido ahora!</a>
        </div>

        <div className="hero-image-wrapper">
          <img src={HeroPic} alt="Happy Pet and Owner" className="hero-pic" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
